import { useCallback, useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MovieCard from '../components/MovieCard.jsx';
import MovieModal from '../components/MovieModal.jsx';
import { discoverOrSearchMovies, fetchMovieGenres } from '../api/tmdb.js';

export default function Movies() {
  const [genres, setGenres] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [genreId, setGenreId] = useState('');
  const [certification, setCertification] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [appliedGenre, setAppliedGenre] = useState('');
  const [appliedCert, setAppliedCert] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [err, setErr] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const g = await fetchMovieGenres();
        if (!cancelled) setGenres(g);
      } catch {
        if (!cancelled) setGenres([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const load = useCallback(async () => {
    setErr(null);
    try {
      const data = await discoverOrSearchMovies({
        page,
        query: appliedQuery,
        genreId: appliedGenre,
        certification: appliedCert,
      });
      setMovies(data.results || []);
      setTotalPages(Math.min(data.total_pages || 1, 500));
    } catch (e) {
      setErr(e.message || 'Erro ao carregar filmes.');
      setMovies([]);
    }
  }, [page, appliedQuery, appliedGenre, appliedCert]);

  useEffect(() => {
    load();
  }, [load]);

  const applyFilters = () => {
    setAppliedQuery(searchInput.trim());
    setAppliedGenre(genreId);
    setAppliedCert(certification);
    setPage(1);
  };

  return (
    <div className="app-shell">
      <Header layout="bar" showSearch={false} />

      <main className="movies-page-main app-main">
        <div className="filter-panel">
          <div className="search-container">
            <input
              type="text"
              id="searchInput"
              placeholder="Pesquisar filmes..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') applyFilters();
              }}
            />

            <select id="genreSelect" value={genreId} onChange={(e) => setGenreId(e.target.value)}>
              <option value="">Todos os gêneros</option>
              {genres.map((g) => (
                <option key={g.id} value={String(g.id)}>
                  {g.name}
                </option>
              ))}
            </select>

            <select id="ageRatingSelect" value={certification} onChange={(e) => setCertification(e.target.value)}>
              <option value="">Faixa etária (EUA)</option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
              <option value="NC-17">NC-17</option>
            </select>

            <button type="button" className="search-btn" id="searchMovies" onClick={applyFilters} aria-label="Aplicar filtros">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>

        {err && <div className="api-warning">{err}</div>}

        <div className="movie-list" id="movieList">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} onOpen={setModalId} />
          ))}
        </div>

        <div className="pagination" id="pagination">
          {page > 1 && (
            <button type="button" onClick={() => setPage((p) => p - 1)} aria-label="Página anterior">
              <i className="bi bi-arrow-left-circle" />
            </button>
          )}
          <span>
            Página {page}
            {totalPages > 1 ? ` / ${totalPages}` : ''}
          </span>
          {page < totalPages && (
            <button type="button" onClick={() => setPage((p) => p + 1)} aria-label="Próxima página">
              <i className="bi bi-arrow-right-circle" />
            </button>
          )}
        </div>
      </main>

      <Footer />
      {modalId != null && <MovieModal movieId={modalId} onClose={() => setModalId(null)} />}
    </div>
  );
}

import { useCallback, useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HeroBanner from '../components/HeroBanner.jsx';
import MovieRow from '../components/MovieRow.jsx';
import MovieCard from '../components/MovieCard.jsx';
import MovieModal from '../components/MovieModal.jsx';
import { fetchPopularMovies, fetchTrendingMovies, searchMoviesQuery } from '../api/tmdb.js';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loadErr, setLoadErr] = useState(null);
  const [searchErr, setSearchErr] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [t, p] = await Promise.all([fetchTrendingMovies(), fetchPopularMovies()]);
        if (!cancelled) {
          setTrending(t);
          setPopular(p);
          setLoadErr(null);
        }
      } catch (e) {
        if (!cancelled) setLoadErr(e.message || 'Erro ao carregar a página inicial.');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const runSearch = useCallback(async () => {
    const q = searchInput.trim();
    if (!q) {
      setSearchActive(false);
      setSearchResults([]);
      setSearchErr(null);
      return;
    }
    setSearchActive(true);
    setSearchErr(null);
    try {
      const r = await searchMoviesQuery(q);
      setSearchResults(r);
    } catch (e) {
      setSearchErr(e.message || 'Erro na busca.');
      setSearchResults([]);
    }
  }, [searchInput]);

  return (
    <div className="app-shell">
      <Header
        layout="hero"
        showSearch
        searchValue={searchInput}
        onSearchChange={setSearchInput}
        onSearchSubmit={runSearch}
      />

      {!searchActive && <HeroBanner />}

      <main className="container pt-5 app-main">
        {loadErr && <div className="api-warning">{loadErr}</div>}

        {!searchActive && !loadErr && (
          <>
            <MovieRow title="Tendências" movies={trending} variant="trending" onOpenMovie={setModalId} />
            <MovieRow title="Filmes populares" movies={popular} variant="popular-movies" onOpenMovie={setModalId} />
          </>
        )}

        {searchActive && (
          <div className="search-results-wrap">
            <h1 className="search-results-title" id="results">
              Resultados da busca
            </h1>
            {searchErr && <div className="api-warning">{searchErr}</div>}
            {!searchErr && (
              <div className="movies-grid">
                {searchResults.length === 0 ? (
                  <p className="empty-hint">Nenhum filme encontrado.</p>
                ) : (
                  searchResults.map((m) => <MovieCard key={m.id} movie={m} onOpen={setModalId} />)
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
      {modalId != null && <MovieModal movieId={modalId} onClose={() => setModalId(null)} />}
    </div>
  );
}

import { useEffect, useState } from 'react';
import {
  fetchMovieDetails,
  pickYoutubeTrailer,
  pickUsCertification,
  pickDirectors,
  posterUrl,
} from '../api/tmdb.js';

export default function MovieModal({ movieId, onClose }) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setErr(null);
    (async () => {
      try {
        const d = await fetchMovieDetails(movieId);
        if (!cancelled) setData(d);
      } catch (e) {
        if (!cancelled) setErr(e.message || 'Erro ao carregar.');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [movieId]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const bg =
    data?.poster_path != null
      ? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.98)), url(${posterUrl(data.poster_path, 'w1280')})`
      : undefined;

  const trailerKey = data ? pickYoutubeTrailer(data.videos) : null;
  const certification = data ? pickUsCertification(data.release_dates) : 'N/A';
  const director = data ? pickDirectors(data.credits?.crew) : 'N/A';
  const lang = data?.spoken_languages?.[0]?.name || 'N/A';

  return (
    <div
      className="popup-container show-popup"
      style={bg ? { backgroundImage: bg } : undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby="movie-modal-title"
    >
      <span className="x-icon" role="presentation" onClick={onClose}>
        &#10006;
      </span>
      <div className="content">
        {!data && !err && <p className="modal-status">Carregando…</p>}
        {err && <p className="modal-status modal-status--error">{err}</p>}
        {data && (
          <>
            <div className="left">
              <div className="poster-img">
                {data.poster_path ? (
                  <img src={posterUrl(data.poster_path, 'w500')} alt={data.title} />
                ) : (
                  <div className="poster-placeholder">Sem pôster</div>
                )}
              </div>
            </div>
            <div className="right">
              <h1 id="movie-modal-title">{data.title}</h1>
              {data.tagline ? <h3>{data.tagline}</h3> : null}
              <div className="single-info-container">
                <div className="single-info">
                  <span>Idioma:</span>
                  <span>{lang}</span>
                </div>
                <div className="single-info">
                  <span>Duração:</span>
                  <span>{data.runtime != null ? `${data.runtime} minutos` : 'N/A'}</span>
                </div>
                <div className="single-info">
                  <span>Avaliação (TMDb):</span>
                  <span>{data.vote_average != null ? `${Number(data.vote_average).toFixed(1)} / 10` : 'N/A'}</span>
                </div>
                <div className="single-info">
                  <span>Classificação (EUA):</span>
                  <span>{certification}</span>
                </div>
                <div className="single-info">
                  <span>Data de lançamento:</span>
                  <span>{data.release_date || 'N/A'}</span>
                </div>
                <div className="single-info">
                  <span>Direção:</span>
                  <span>{director}</span>
                </div>
              </div>
              <div className="genres">
                <h2>Gêneros</h2>
                <ul>{(data.genres || []).map((g) => <li key={g.id}>{g.name}</li>)}</ul>
              </div>
              <div className="overview">
                <h2>Sinopse</h2>
                <p>{data.overview?.trim() || 'Sinopse não disponível.'}</p>
              </div>
              {trailerKey ? (
                <div className="trailer">
                  <h2>Trailer</h2>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

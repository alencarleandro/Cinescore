import { posterUrl } from '../api/tmdb.js';

export default function MovieCard({ movie, onOpen }) {
  const src = posterUrl(movie.poster_path, 'w500');
  const title = movie.title || movie.name || 'Filme';

  return (
    <article
      className="card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(movie.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(movie.id);
        }
      }}
    >
      <div className="img">
        {src ? (
          <img src={src} alt={title} />
        ) : (
          <div className="card-placeholder">{title}</div>
        )}
      </div>
    </article>
  );
}

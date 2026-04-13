import { useRef } from 'react';
import MovieCard from './MovieCard.jsx';

export default function MovieRow({ title, movies, onOpenMovie, variant = 'trending' }) {
  const gridRef = useRef(null);

  const scroll = (delta) => {
    const el = gridRef.current;
    if (el) el.scrollLeft += delta;
  };

  if (!movies?.length) return null;

  return (
    <section className={`movies-container ${variant}`}>
      <h1>{title}</h1>
      <i className="bi bi-chevron-left" role="presentation" onClick={() => scroll(-140)} />
      <i className="bi bi-chevron-right" role="presentation" onClick={() => scroll(140)} />
      <div className="movies-grid" ref={gridRef}>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} onOpen={onOpenMovie} />
        ))}
      </div>
    </section>
  );
}

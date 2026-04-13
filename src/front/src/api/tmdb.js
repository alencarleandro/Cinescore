const BASE = 'https://api.themoviedb.org/3';

function getKey() {
  const k = import.meta.env.VITE_TMDB_API_KEY;
  if (!k) {
    throw new Error('Defina VITE_TMDB_API_KEY no arquivo .env (raiz do front).');
  }
  return k;
}

export function posterUrl(path, size = 'w500') {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export async function fetchTrendingMovies() {
  const apiKey = getKey();
  const r = await fetch(`${BASE}/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
  if (!r.ok) throw new Error('Não foi possível carregar as tendências.');
  const d = await r.json();
  return d.results.slice(0, 20);
}

export async function fetchPopularMovies() {
  const apiKey = getKey();
  const r = await fetch(`${BASE}/movie/popular?api_key=${apiKey}&language=pt-BR`);
  if (!r.ok) throw new Error('Não foi possível carregar os filmes populares.');
  const d = await r.json();
  return d.results.slice(0, 20);
}

export async function searchMoviesQuery(query) {
  const apiKey = getKey();
  const r = await fetch(
    `${BASE}/search/movie?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(query)}`
  );
  if (!r.ok) throw new Error('Busca falhou.');
  const d = await r.json();
  return d.results.slice(0, 24);
}

export async function fetchMovieGenres() {
  const apiKey = getKey();
  const r = await fetch(`${BASE}/genre/movie/list?api_key=${apiKey}&language=pt-BR`);
  if (!r.ok) throw new Error('Gêneros indisponíveis.');
  const d = await r.json();
  return d.genres;
}

/**
 * @param {{ page: number, query?: string, genreId?: string, certification?: string }} opts
 */
export async function discoverOrSearchMovies(opts) {
  const apiKey = getKey();
  const { page, query, genreId, certification } = opts;
  let url;
  if (query?.trim()) {
    url = `${BASE}/search/movie?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(query.trim())}&page=${page}`;
  } else {
    url = `${BASE}/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`;
    if (genreId) url += `&with_genres=${genreId}`;
    if (certification) url += `&certification_country=US&certification=${certification}`;
  }
  const r = await fetch(url);
  if (!r.ok) throw new Error('Não foi possível carregar a lista de filmes.');
  return r.json();
}

export async function fetchMovieDetails(id) {
  const apiKey = getKey();
  const r = await fetch(
    `${BASE}/movie/${id}?api_key=${apiKey}&language=pt-BR&append_to_response=credits,videos,release_dates`
  );
  if (!r.ok) throw new Error('Detalhes indisponíveis.');
  return r.json();
}

export function pickYoutubeTrailer(videos) {
  const list = videos?.results || [];
  const t = list.find((v) => v.site === 'YouTube' && v.type === 'Trailer');
  return t?.key || null;
}

export function pickUsCertification(releaseDates) {
  const us = releaseDates?.results?.find((e) => e.iso_3166_1 === 'US');
  const cert = us?.release_dates?.[0]?.certification;
  return cert || 'N/A';
}

export function pickDirectors(crew) {
  if (!crew?.length) return 'N/A';
  const dirs = crew.filter((m) => m.job === 'Director').map((m) => m.name);
  return dirs.length ? dirs.join(', ') : 'N/A';
}

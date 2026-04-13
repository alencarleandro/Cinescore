import { Link, NavLink } from 'react-router-dom';

export default function Header({
  layout = 'bar',
  showSearch = false,
  searchValue = '',
  onSearchChange,
  onSearchSubmit,
}) {
  const headerClass = layout === 'hero' ? 'site-header site-header--hero' : 'site-header site-header--bar';

  return (
    <header className={headerClass}>
      <Link to="/" className="logo">
        <img src="/assets/img/LogoCineScore.png" alt="CineScore" />
      </Link>
      <ul className="navigation" id="score">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/filmes" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>
            Filmes
          </NavLink>
        </li>
      </ul>

      {showSearch && (
        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar filmes..."
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                onSearchSubmit?.();
              }
            }}
          />
          <button type="button" className="search-btn" onClick={() => onSearchSubmit?.()} aria-label="Buscar">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      )}
    </header>
  );
}

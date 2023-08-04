import { Link, useLocation } from 'react-router-dom';

export function Navigation({ title, link }) {
  const location = useLocation();
  return (
    <Link to={link}>
      <button
        className={`navigation-item ${
          location.pathname === link ? 'active' : ''
        }`}
      >
        {title}
      </button>
    </Link>
  );
}

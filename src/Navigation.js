import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export function Navigation({ title, link }) {
  const location = useLocation();
  console.log(location.pathname.split('/'), link);
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

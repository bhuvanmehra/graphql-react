import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={'/'}
          className="left brand-logo logo"
        >
          Car Lovers
        </Link>
        <ul className="right">
          <li>
            <a className="search" href="/search">Search</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

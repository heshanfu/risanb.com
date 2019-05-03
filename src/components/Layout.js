import React from 'react';
import { Link } from 'gatsby';
import SiteMetadata from './SiteMetadata';

export default ({ children, className, ...props }) => (
  <div className={className}>
    <SiteMetadata {...props} />

    <header className="header">
      <div className="container">
        <Link to="/" className="header__title">
          Risan Bagja
        </Link>
        <nav className="nav">
          <ul className="nav__menu">
            <li>
              <Link to="/posts/">Posts</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main className="main container">{children}</main>

    <footer className="footer container">
      <nav>
        <ul className="footer__links">
          <li>
            <a href="https://github.com/risan">Github</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/5138222">Stack Overflow</a>
          </li>
          <li>
            <a href="/rss.xml">RSS</a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
);

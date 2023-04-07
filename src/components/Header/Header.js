import './Header.css';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to="/">Bookstore</Link>
      <ul className="header__nav">
        <li><NavLink className="header__nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="header__nav-link" to="/categories">Categories</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;

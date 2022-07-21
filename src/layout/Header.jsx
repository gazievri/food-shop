import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="light-blue darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Your Recipes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

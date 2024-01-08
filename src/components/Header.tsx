import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <Link style={{ textDecoration: 'none', color: "inherit" }} to="/"><h2 className="name">Ben Pearson</h2></Link>
      <nav className="links">
        <Link to="about">
          <a className="nav-link">About</a>
        </Link>
        <Link to="projects">
          <a className="nav-link">Projects</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

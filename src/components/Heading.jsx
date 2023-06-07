import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Movies app</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/movies" className="nav-link" aria-current="page">
              Movies
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/add" className="nav-link" aria-current="page">
              Add Movie
            </Link>
          </li> */}
          <li>
            <Link to="/register" className="nav-link" aria-current="page">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link" aria-current="page">
              Sign In
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Heading;

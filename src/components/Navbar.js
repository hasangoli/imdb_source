import { Link } from "react-router-dom";

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <nav className="navbar navbar-light mb-3 bg-light sticky-top p-0">
      <div className="container-fluid bg-info bg-opacity-25 py-2">
        <Link to="/" className="navbar-brand fw-bold">
          IMDB
        </Link>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            value={searchInput}
            placeholder="Search"
            onChange={e => setSearchInput(e.target.value)}
            disabled
          />
          <Link
            to="/search"
            className="btn btn-outline-info disabled"
            type="submit"
          >
            Search
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Search;

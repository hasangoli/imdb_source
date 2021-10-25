import Genre from "./Genre";

const Genres = ({ genres }) => {
  return (
    <span className="nav-item dropdown">
      <button
        className="btn btn-info mb-2 text-light dropdown-toggle"
        id="navbarDropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Genres
      </button>
      <ul
        className="dropdown-menu row"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          {genres.map(genre => (
            <Genre key={genre.id} genre={genre} />
          ))}
        </li>
      </ul>
    </span>
  );
};

export default Genres;

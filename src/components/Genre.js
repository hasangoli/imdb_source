import { Link } from "react-router-dom";

const Genre = ({ genre }) => {
  return (
    <Link to={`/genres/${genre.id}`} className="dropdown-item col-2">
      {genre.name}
    </Link>
  );
};

export default Genre;

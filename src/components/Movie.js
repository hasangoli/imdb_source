import { Link } from "react-router-dom";
import { FaImdb } from "react-icons/fa";

const Movie = ({ movie }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-2">
      <Link
        to={`/movies/${movie.id}`}
        className="card p-0 m-0 bg-secondary bg-opacity-10 border-0 shadow-md"
      >
        <div className="row g-0">
          <div className="col-4">
            <img
              src={movie.poster}
              className="img-fluid rounded-start h-100"
              alt={movie.title}
            />
          </div>
          <div className="col-8">
            <div className="card-body text-dark">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                <small className="muted">{movie.year}</small>
              </p>
              <p className="card-text">
                <FaImdb className="text-warning" /> {movie.imdb_rating}/10
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;

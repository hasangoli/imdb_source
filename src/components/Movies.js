import Movie from "./Movie";
import Genres from "./Genres";
import Pagination from "./Pagination";
import { useEffect } from "react";

const Movies = ({ movies, page, setPage, genres, totalCount }) => {
  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="container">
      <h1 className="h5 fw-bold my-3">All Movies</h1>

      <Genres genres={genres} />

      <div className="row">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalCount={totalCount} />
    </div>
  );
};

export default Movies;

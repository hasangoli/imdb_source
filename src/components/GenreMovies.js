import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Movie from "./Movie";
import Pagination from "./Pagination";
import { FaArrowLeft } from "react-icons/fa";

const GenreMovies = ({ page, setPage }) => {
  const history = useHistory();
  const { id } = useParams();
  const [genreList, setGenreList] = useState([]);
  const [metaData, setMetaData] = useState([]);

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      fetch(`http://moviesapi.ir/api/v1/genres/${id}/movies?page=${page}`)
        .then(res => res.json())
        .then(data => {
          setGenreList(data.data);
          setMetaData(data.metadata);
        })
        .catch(err => console.log(err.message));
    };

    fetchMovieDetails();
  }, [id, page]);

  return (
    <div className="container">
      <h1 className="h5 fw-bold my-3">
        {genreList.map(genre => genre.id === id)} Movies
      </h1>

      <button className="btn btn-info btn-sm d-block my-3">
        <FaArrowLeft
          className="text-light m-1"
          onClick={() => history.goBack()}
        />
      </button>

      <div className="row">
        {genreList.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalCount={metaData.page_count}
      />
    </div>
  );
};

export default GenreMovies;

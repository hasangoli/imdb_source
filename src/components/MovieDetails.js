import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      fetch(`http://moviesapi.ir/api/v1/movies/${id}`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
        .catch(err => console.log(err.message));
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="container">
      <button className="btn btn-info btn-sm d-block my-3">
        <FaArrowLeft
          className="text-light m-1"
          onClick={() => history.goBack()}
        />
      </button>

      <div className="row">
        <div className="img col-md-4 mb-5 pb-5">
          <img
            src={movieDetails.poster}
            className="img-fluid rounded"
            alt={movieDetails.title}
          />
        </div>

        <div className="info ms-md-3 col-md-7">
          <h2 className="h3 my-3">{movieDetails.title}</h2>
          <p className="lead fw-normal">{movieDetails.year}</p>
          <p className="muted">{movieDetails.country}</p>
          <p>
            <FaImdb className="text-warning" /> {movieDetails.imdb_rating}/10
          </p>

          <p>
            <span className="h6">Genres: </span>
            {movieDetails.genres &&
              movieDetails.genres.map((genre, index) => (
                <button
                  key={index}
                  className="btn btn-sm mx-1 my-md-1 disabled"
                >
                  {genre}
                </button>
              ))}
          </p>
        </div>

        <div className="d-grid">
          <div className="images col-md-12">
            <h5 className="bg-info bg-opacity-25 text-light p-3 rounded">
              Screen Shots
            </h5>
            {movieDetails.images &&
              movieDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="img-fluid rounded my-3"
                  alt={movieDetails.title}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

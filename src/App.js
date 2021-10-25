import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";
import GenreMovies from "./components/GenreMovies";
import Footer from "./components/Footer";

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // const searchMovies = async () => {
  //   if (searchInput !== "") {
  //     fetch(`http://moviesapi.ir/api/v1/movies?q=${searchInput}&page=${page}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         setMovies(data.data);
  //         setMetaData(data.metadata);
  //       })
  //       .catch(err => console.log(err.message));
  //   }
  // };

  useEffect(() => {
    const fetchMovies = async () => {
      fetch(`http://moviesapi.ir/api/v1/movies?page=${page}`)
        .then(res => res.json())
        .then(data => {
          setMovies(data.data);
          setMetaData(data.metadata);
        })
        .catch(err => console.log(err.message));
    };

    const fetchGenres = async () => {
      fetch("http://moviesapi.ir/api/v1/genres")
        .then(res => res.json())
        .then(data => setGenres(data))
        .catch(err => console.log(err.message));
    };

    fetchGenres();
    fetchMovies();
  }, [page]);

  return (
    <div className="app">
      <Router>
        <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
        <Switch>
          <Route exact path="/">
            <Home
              genres={genres}
              movies={movies}
              page={metaData.current_page}
              totalCount={metaData.page_count}
              setPage={setPage}
            />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/genres/:id">
            <GenreMovies page={page} setPage={setPage} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

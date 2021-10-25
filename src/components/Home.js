import Movies from "./Movies";

const Home = ({ movies, page, setPage, genres, totalCount }) => {
  return (
    <div className="home">
      <Movies
        genres={genres}
        movies={movies}
        page={page}
        totalCount={totalCount}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;

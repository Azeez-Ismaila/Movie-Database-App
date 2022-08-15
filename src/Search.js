import Movie from "./Movie";
import "./App.css";
const Search = ({ movieTitle, setMovieTitle, setMovieInfo, movieInfo }) => {
  const titleHandler = (e) => {
    setMovieTitle(e.target.value);
    // console.log(movieTitle);
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=89a787c4d970f7c077cb6454b9c9b74e&query=${movieTitle}`
    );
    const data = await response.json();
    setMovieInfo(data.results);
    console.log(data.results);
    console.log(data);
  };
  return (
    <div>
      <form className="form-control">
        <input
          type="text"
          name=""
          id=""
          placeholder="Insert Movie Title"
          value={movieTitle}
          onChange={titleHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </form>
      <div className="search-cmp">
        {movieInfo.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            synopsis={movie.overview}
            image={movie.poster_path}
            date={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

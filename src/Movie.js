const Movie = ({ title, synopsis, image, date, rating }) => {
  return (
    <div className="movie-card">
      <div className="movie-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt="None Found"
        />
      </div>
      <div className="card-body">
        <h1 className="movie-title">{title}</h1>
        <p>
          <strong className="movie-synopsis">Release Date: </strong>
          {date}
        </p>
        <p>
          <strong className="movie-synopsis">Movie Rating: </strong>
          {rating}/10
        </p>
        <p className="movie-intro">
          <strong className="movie-synopsis">Synopsis: </strong>
          {synopsis}
        </p>
      </div>
    </div>
  );
};

export default Movie;

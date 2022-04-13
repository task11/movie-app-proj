import { Link } from "react-router-dom";

function MovieDetail({ title, year, genres, description, coverImg }) {
  return (
    <div>
      <img src={coverImg} alt="cover image"></img>
      <h3> <Link to="/movie-app-proj">back</Link></h3>
      <div>{title}</div>
      <span>{year}</span>
      <div>{genres}</div>
      <p>{description}</p>
    </div>
  );

}

export default MovieDetail;
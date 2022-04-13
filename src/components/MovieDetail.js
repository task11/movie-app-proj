import { Link } from "react-router-dom";

function MovieDetail({ title, year, genres, description, date, coverImg }) {
  return (
    <div>
      <h3> <Link to="/movie-app-proj">back</Link></h3>
      <div>{title}</div>
      <span>{year}</span>
      <span>{date}</span>
      <div>{genres}</div>
      <p>{description}</p>
      <img src={coverImg} alt="cover image"></img>
    </div>
  );

}

export default MovieDetail;
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title}></img>
      <div>
        <Link to="/movie">{title}</Link>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div >
  );

}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
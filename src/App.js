import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <strong>Loading ...</strong> : null}
      <h1>Movie List</h1>
      <ul>
        {movie.map((item, id) => {
          return <li>제목 : {item.title} 평점 : {item.rating} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;

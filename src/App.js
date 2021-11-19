import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? <strong>Loading ...</strong> : null}
      <h1>Movie List</h1>
      <ul>
        {movie.map((item, id) => {
          return <li key={id}>제목 : {item.title} 평점 : {item.rating} </li>;
        })}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading ...</strong>
      ) : (
        <div>
          <div>
            {movie.map((item) => (
              <div key={item.id}>
                <img src={item.medium_cover_image}></img>
                <div>
                  <h2>{item.title}</h2>{item.rating}
                  <p>{item.summary}</p>
                  <ul>
                    {item.genres.map((g) => {
                      return <li key={g}>{g}</li>
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

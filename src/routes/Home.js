import { useState, useEffect } from "react";
import Movie from "../components/Movie";


function Home() {
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
              <Movie
                key={item.id}
                coverImage={item.medium_cover_image}
                title={item.title}
                summary={item.summary}
                genres={item.genres}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;
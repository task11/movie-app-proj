import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <div className={styles.movies}>
            {movie.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                coverImage={item.medium_cover_image}
                title={item.title}
                year={item.year}
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
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
  display: flex;
  justify-content: center;
  `;

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  `;

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 50px;
    width: 80%;
    padding-top: 70px;

    @media screen and (max-width: 1090px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
`;

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
    <Container>
      {loading ? (
        <Loader>
          <span>Loading...</span>
        </Loader>
      ) : (
        <div>
          <Movies>
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
          </Movies>
        </div>
      )}

    </Container>
  );
}

export default Home;;
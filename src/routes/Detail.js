import MovieDetail from "../components/MovieDetail"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieDetail = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieDetail(json.data.movie);
  }

  useEffect(() => {
    getMovieDetail();
  })

  return (
    <MovieDetail
      title={movieDetail.title}
      year={movieDetail.year}
      genres={movieDetail.genres}
      description={movieDetail.description_full}
      coverImg={movieDetail.large_cover_image}
    />
  );

}

export default Detail;
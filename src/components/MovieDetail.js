import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 300px 0 300px;
`;

const Btn = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: tomato;
  border: solid 1px tomato;
  border-radius: 15px;
  margin-bottom: 20px;

  a{
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;


function MovieDetail({ title, year, genres, description, coverImg }) {
  return (
    <Wrapper>

      <Btn><Link to="/movie-app-react-frontend">back</Link></Btn>
      <img src={coverImg} alt="cover image"></img>
      <div>{title}</div>
      <span>{year}</span>
      <div>Genres : {genres}</div>
      <p><strong>SUMMARY</strong>: {description}</p>
    </Wrapper>
  );

}

export default MovieDetail;
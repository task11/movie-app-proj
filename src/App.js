import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      {loading ? <strong>Loading ...</strong> : null}
    </div>
  );
}

export default App;

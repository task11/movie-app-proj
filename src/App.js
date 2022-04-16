import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white
`;

function App() {
  return <Father>
    <Box bgColor="teal">
      <Text>Text</Text>
    </Box>
    <Box bgColor="tomato"></Box>
  </Father>;
}

/* 
<Router>
    <Routes>
      <Route
        path="/movie/:id"
        element={<Detail />}
      />
      <Route
        path={process.env.PUBLIC_URL + "/"}
        element={<Home />}
      />

    </Routes>
  </Router>; */

export default App;

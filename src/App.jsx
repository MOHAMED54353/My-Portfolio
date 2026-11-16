import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./Layout/Default";
import Home from "./Pages/Home";
import Arcade from "./Pages/Arcade";
import ProverbsGame from './Pages/ProverbsGame';
import TicTacToe from "./Pages/TicTacToe";
import JsonFormatter from "./Pages/JsonFormatter";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route  index element={<Home />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/arcade/proverbs" element={<ProverbsGame />} />
          <Route path="/arcade/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/arcade/json-formatter" element={<JsonFormatter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

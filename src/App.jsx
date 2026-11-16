import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./Layout/Default";
import Home from "./Pages/Home";
import Arcade from "./Pages/Arcade";
import ProverbsGame from './Pages/ProverbsGame';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route  index element={<Home />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/arcade/proverbs" element={<ProverbsGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

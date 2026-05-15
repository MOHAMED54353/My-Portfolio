import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./Layout/Default";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route  index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import "./app.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Movielist from "./Components/MovieList/movielist";
import Navbar from "./Components/Navbar/navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Movielist type="popular" title="Popular" emoji={Fire} />}
        />
        <Route
          path="/top_rated"
          element={
            <Movielist type="top_rated" title="Top Rated" emoji={Star} />
          }
        />
        <Route
          path="/upcoming"
          element={<Movielist type="upcoming" title="Upcoming" emoji={Party} />}
        />
      </Routes>
    </div>
  );
};

export default App;

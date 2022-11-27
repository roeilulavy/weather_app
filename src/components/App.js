import { Routes, Route, Link, Outlet, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />

        <Route
              path="/home"
              element={<Home />}
        />
        <Route
              path="/favorites"
              element={<Favorites />}
        />
      </Routes>
    </div>
  );
}

export default App;

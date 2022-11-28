import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import './App.css';
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
        />

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
    </ThemeContext.Provider>
  );
}

export default App;

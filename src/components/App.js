import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from './Home/Home';
import Favorites from './Favorites/Favorites';
import './App.css';
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

  const getLocalStorage = () => {
    let list = localStorage.getItem('savedPlaces');

    if(list) {
      return JSON.parse(localStorage.getItem('savedPlaces'));
    } else {
      return [];
    }
  }

  const [theme, setTheme] = useState("light");
  const [savedPlaces, setSavedPlaces] = useState(getLocalStorage());


  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const handleAddPlace = (data) => {
    let list = JSON.parse(localStorage.getItem('savedPlaces'));

    const isExist = list.some(item => data.Key === item.Key);

    if(!isExist) {
      list.push(data);
      localStorage.setItem('savedPlaces', JSON.stringify(list));
      setSavedPlaces(list);
    }
    
  };

  const handleRemovePlace = (KeyCode) => {
    let list = JSON.parse(localStorage.getItem('savedPlaces'));

    const filteredList = list.filter(place => {
      return place.Key !== KeyCode
    });

    console.log(filteredList)

    localStorage.setItem('savedPlaces', JSON.stringify(filteredList));
    setSavedPlaces(filteredList);
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
                element={
                  <Home 
                    savedPlaces={savedPlaces}
                    handleAddPlace={handleAddPlace}
                    handleRemovePlace={handleRemovePlace}
                  />
                }
          />
          <Route
                path="/favorites"
                element={
                  <Favorites 
                    savedPlaces={savedPlaces}
                    handleRemovePlace={handleRemovePlace}
                  />
                }
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

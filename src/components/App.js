import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getGeoSearch } from "../utils/Api";
import "./App.css";
import Favorites from "./Favorites/Favorites";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

export default function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("savedPlaces");

    if (list) {
      return JSON.parse(localStorage.getItem("savedPlaces"));
    } else {
      return [];
    }
  };

  const [theme, setTheme] = useState("light");
  const [savedPlaces, setSavedPlaces] = useState(getLocalStorage());
  const [isMetric, setIsMetric] = useState(true);
  const [searchByKeycode, setSearchByKeycode] = useState([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const getGeoLocation = async (location) => {
          const getLocation = await getGeoSearch(location);

          if (getLocation) {
            setSearchByKeycode({
              keyCode: getLocation.Key,
              cityName: getLocation.LocalizedName,
            });
          }
        };

        getGeoLocation([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      setSearchByKeycode({ keyCode: "215854", cityName: "Tel Aviv" });
    }
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const toggleMetric = () => {
    setIsMetric(!isMetric);
  };

  const handlePlaceClick = (keyCode, cityName) => {
    setSearchByKeycode({ keyCode, cityName });
  };

  const handleAddPlace = (data) => {
    let list = JSON.parse(localStorage.getItem("savedPlaces"));

    if (list === null) {
      let newList = [];
      newList.push(data);
      localStorage.setItem("savedPlaces", JSON.stringify(newList));
      setSavedPlaces(newList);
    } else {
      const isExist = list.some((item) => data.Key === item.Key);

      if (!isExist) {
        list.push(data);
        localStorage.setItem("savedPlaces", JSON.stringify(list));
        setSavedPlaces(list);
      }
    }
  };

  const handleRemovePlace = (KeyCode) => {
    let list = JSON.parse(localStorage.getItem("savedPlaces"));

    const filteredList = list.filter((place) => {
      return place.Key !== KeyCode;
    });

    localStorage.setItem("savedPlaces", JSON.stringify(filteredList));
    setSavedPlaces(filteredList);
  };

  return (
    <div className="App" id={theme}>
      <Navbar toggleTheme={toggleTheme} toggleMetric={toggleMetric} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isMetric={isMetric}
              savedPlaces={savedPlaces}
              searchByKeycode={searchByKeycode}
              handleAddPlace={handleAddPlace}
              handleRemovePlace={handleRemovePlace}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              isMetric={isMetric}
              savedPlaces={savedPlaces}
              handlePlaceClick={handlePlaceClick}
              handleRemovePlace={handleRemovePlace}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

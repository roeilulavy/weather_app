import { useState } from "react";
import { Link } from "react-router-dom";
import Celsius_icon from "../../images/icons/celsius-icon.png";
import Day_icon from "../../images/icons/day-icon.png";
import Ferenheit_icon from "../../images/icons/ferenheit-icon.png";
import Night_icon from "../../images/icons/night-icon.png";
import "./Navbar.css";

export default function Navbar({ toggleTheme, toggleMetric }) {
  const [checked, setChecked] = useState(false);
  const [metric, setMetric] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
    toggleTheme();
  };

  const handleMetric = () => {
    setMetric(!metric);
    toggleMetric();
  };

  return (
    <div className="Navbar">
      <h1 className="Navbar__title">Welcome to your forecast!</h1>
      <nav className="Navbar__nav-container">
        {metric ? (
          <img
            className="Navbar__temp-icon"
            src={Ferenheit_icon}
            alt=""
            onClick={() => handleMetric()}
          />
        ) : (
          <img
            className="Navbar__temp-icon"
            src={Celsius_icon}
            alt=""
            onClick={() => handleMetric()}
          />
        )}
        {checked ? (
          <img
            className="Navbar__theme-icon"
            src={Day_icon}
            alt=""
            onClick={() => handleChange()}
          />
        ) : (
          <img
            className="Navbar__theme-icon"
            src={Night_icon}
            alt=""
            onClick={() => handleChange()}
          />
        )}
        <Link to="/home" className="Navbar__link">
          Home
        </Link>
        <Link to="/favorites" className="Navbar__link">
          Favorites
        </Link>
      </nav>
    </div>
  );
}

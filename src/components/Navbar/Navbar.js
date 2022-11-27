import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import './Navbar.css';

export default function Navbar({toggleTheme, theme}) {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggleTheme();
  };

  return (
    <div className='Navbar'>
      <h1 className="Navbar__title">Welcome to your forecast!</h1>
        
      <nav className="Navbar__nav-container">
        <Switch
          className="Navbar__switch"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <Link to="/home" className="Navbar__link">Home</Link>
        <Link to="/favorites" className="Navbar__link">Favorites</Link>
      </nav>
    </div>
  );
}

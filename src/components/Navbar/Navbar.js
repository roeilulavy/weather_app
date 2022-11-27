import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <h1 className="Navbar__title">Welcome to your forecast!</h1>
        
      <nav className="Navbar__nav-container">
        <button className="Navbar__button">Theme</button>
        <Link to="/home" className="Navbar__link">Home</Link>
        <Link to="/favorites" className="Navbar__link">Favorites</Link>
      </nav>
    </div>
  );
}

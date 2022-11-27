import { Routes, Route, Link, Outlet, useNavigate, Navigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to="/home" >Home</Link>
      <Link to="/favorites" >Users</Link>
    </nav>
  );
}

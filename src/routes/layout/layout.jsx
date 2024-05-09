import Navbar from "../../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import React from 'react';

export default function Layout() {
  return (
     <div className="layout">
    <div className="navbar">
    <Navbar/>
    </div>
    <div className="content">
     <Outlet/>
    </div>
  </div>
  )
}

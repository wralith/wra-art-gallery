import React from "react";
import { NavLink, Outlet } from "react-router-dom";

//TODO Add Hamburger Menu for Mobile

export default function Navbar() {
  return (
    <nav className="flex flex-row m-10 items-center justify-between">
      <div className="text-2xl font-bold flex flex-row items-center">
        <a href="#">
          <span className="bg-primary p-1 rounded-md text-white">W</span>ra
        </a>
      </div>
      <ul className="hidden md:flex flex-row gap-2 lg:gap-12">
        <li>
          <NavLink to={'/'} href="#">Home</NavLink>
        </li>
        <li>
          <NavLink to={'/random-arts'} href="#">Random Art</NavLink>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>
      <ul className="flex flex-row gap-3">
        <li>
          <a href="#" className="btn-primary bg-gray-500">
            Log in
          </a>
        </li>
        <li>
          <a href="#" className="btn-primary">
            Register
          </a>
        </li>
      </ul>
    <Outlet />
    </nav>
  );
}

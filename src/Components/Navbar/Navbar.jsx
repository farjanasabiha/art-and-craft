import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "../../App.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === "dark");

  useEffect(() => {
    darkMood();
  }, [isDarkMode]);

  const darkMood = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleDarkMood = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.theme = newTheme;
    setIsDarkMode(!isDarkMode);
  };

  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout().then().catch();
  };

  const links = (
    <>
      <li className="bg-white hover:bg-transparent focus:bg-transparent rounded-none">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="bg-transparent hover:bg-transparent focus:bg-transparent rounded-none">
        <NavLink
          to="/AllArtAndCraftItem"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          All Art & Craft Item
        </NavLink>
      </li>
      <li className="bg-transparent hover:bg-transparent focus:bg-transparent rounded-none">
        <NavLink
          to="/AddCraftItem"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          Add Craft Item
        </NavLink>
      </li>
      <li className="bg-transparent hover:bg-transparent focus:bg-transparent rounded-none">
        <NavLink
          to="/MyArtAndCraftList"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          My Art & Craft List
        </NavLink>
      </li>
    </>
  );                                                              
  return (
    <div className="shadow-md bg-white">
      <div className="navbar bg-base-100 mx-auto container py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="text-2xl font-bold text-black">Art And Craft</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 rounded-none">{links}</ul>
        </div>
        <div className="navbar-end ">
          <div className="mr-5" onClick={toggleDarkMood}>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                checked={isDarkMode}
                onChange={toggleDarkMood}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <div className="flex items-center justify-center gap-3">
              <div className="navContainer">
                <img
                  className="image w-14 h-14 cursor-pointer"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <div className="overlay">{user.displayName}</div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn px-2 md:px-8 bg-[#4b85f0] text-white font-semibold text-sm md:text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <a
                href="/login"
                className="btn mr-3 px-3 md:px-8 bg-[#4b85f0] text-white font-semibold  text-xs md:text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                <button>Login</button>
              </a>
              <a
                href="/register"
                className="btn px-3 md:px-8 bg-[#4b85f0] text-white font-semibold text-xs md:text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                <button>Register</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

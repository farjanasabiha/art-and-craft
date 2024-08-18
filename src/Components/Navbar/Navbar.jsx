import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "../../App.css";

const Navbar = () => {

  const themes = {
    dark: "light",
    light: "dark",
  };

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      const _theme = themes[theme];
      localStorage.setItem("theme", _theme);
      updateTheme(_theme);
    };

    const updateTheme = (name) => {
      setTheme(name);
      document.querySelector("html")?.classList.remove(themes[name]);

      document.querySelector("html")?.classList.add(name);
    };
    useEffect(() => {
      const _theme = localStorage.getItem("theme") || "dark";
      updateTheme(_theme);
    }, []);

  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout().then().catch();
  };

  const links = (
    <>
      <li className="bg-white rounded-lg hover:bg-transparent focus:bg-transparent ml-5">
        <NavLink
          className="dark:text-white"
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
      <li className="bg-white rounded-lg hover:bg-transparent focus:bg-transparent ml-5">
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
      <li className="bg-white  rounded-lg bg-transparent hover:bg-transparent focus:bg-transparent  ml-5">
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
      <li className="bg-white  rounded-lg bg-transparent hover:bg-transparent focus:bg-transparent  ml-5">
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
    <div className="shadow-md bg-white dark:bg-black">
      {(theme, toggleTheme)}
      <div className="container mx-auto bg-white dark:bg-white">
        <div className="navbar bg-white dark:bg-black mx-auto  py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content dark:text-white bg-base-100 rounded-box mr-5 z-[1] mt-3 w-52 p-2 shadow"
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
            <div className="mr-5">
              <button onClick={toggleTheme}>Change Theme</button>
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
    </div>
  );
};

export default Navbar;

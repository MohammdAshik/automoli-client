import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const navOptions = (
    <>
      <li>
        <Link
          to={"/blog"}
          className="btn btn-ghost rounded-lg text-primary mx-1"
        >
          Blog
        </Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link
              to={"/dashboard"}
              className="btn btn-ghost rounded-lg text-primary mx-1"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              onClick={() => logout(localStorage.removeItem("automoliToken"))}
              className="btn btn-ghost rounded-lg text-primary mx-1"
            >
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to={"/login"}
              className="btn btn-ghost rounded-lg text-primary mx-1"
            >
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-accent">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-primary lg:hidden"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn flex items-center text-white btn-ghost normal-case text-2xl"
          >
            Aut <GiCarWheel className="w-[13px] mt-[5px] text-primary" /> m
            <GiCarWheel className="w-[13px] mt-[5px] text-primary" />
            li
          </Link>
        </div>
        <div className="navbar-center ml-auto hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizonta  p-0">{navOptions}</ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;

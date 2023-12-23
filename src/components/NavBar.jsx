import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/AuthReducer";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-lg">Image Gallery</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to={"/"}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {user ? (
                  <span onClick={() => dispatch(logout())}>Logout</span>
                ) : (
                  <NavLink to={"/login"}>Login</NavLink>
                )}
              </div>
              {!user ? (
                <NavLink
                  to={"/signup"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </NavLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

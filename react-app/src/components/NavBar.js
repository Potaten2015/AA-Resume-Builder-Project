import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-accentLight bg-opacity-75">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <NavLink
                to="/main"
                exact={true}
                activeClassName="active"
                className="px-3 py-2 flex items-center text- uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Resume Builder
              </NavLink>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div className="flex lg:flex-grow items-center" id="example-navbar-info">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                {!authenticated && (
                  <li className="nav-item">
                    <NavLink
                      to="/sign-up"
                      exact={true}
                      activeClassName="active"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                )}
                {authenticated && (
                  <li className="nav-item">
                    <NavLink
                      to="/templates"
                      exact={true}
                      activeClassName="active"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Templates
                    </NavLink>
                  </li>
                )}
                {authenticated && (
                  <li className="nav-item">
                    <NavLink
                      to="/resumes"
                      exact={true}
                      activeClassName="active"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      My Resumes
                    </NavLink>
                  </li>
                )}
                {!authenticated && (
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      exact={true}
                      activeClassName="active"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {authenticated && (
                  <li className="nav-item">
                    <LogoutButton setAuthenticated={setAuthenticated} />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { LoginForm, SignUpForm } from "../auth";

import splashImage from "./splash.jpg";
import testerResume from "./test-img.png";

const LandingPage = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/main" />;
  }

  return (
    <div className="m-4">
      <div className="text-center pt-4 bg-main mb-2 pb-4 ">
        <h1 className="text-6xl text-accentDark">Resume Builder</h1>
        <div className="flex flex-row space-around justify-center text-accentDark text-2xl">
          <p className="p-2 transform hover:scale-105 cursor-pointer">About</p>
          <p className="pt-2"> | </p>
          <p className="p-2 transform hover:scale-105 cursor-pointer">Log In</p>
        </div>
      </div>
      <div id="splash">
        <div className="w-full overflow-hidden">
          <img src={splashImage} alt="This is a splash image" />
        </div>
      </div>
      <div
        id="interaction-box"
        className="grid grid-cols-3 bg-main mt-2 mb-4 p-4"
      >
        <div
          id="forms"
          className="bg-accentLight45 col-start-1 col-end-2 p-4 m-2 flex flex-col justify-center items-center"
        >
          <Switch>
            <Route path="/login" exact>
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <Route path="/sign-up" exact>
              <SignUpForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
          </Switch>
          <div className="flex flex-row m-2 text-lg text-accentDark font-bold">
            <NavLink
              to="/sign-up"
              exact={true}
              className="p-2 transform hover:scale-105 cursor-pointer"
            >
              Sign Up
            </NavLink>
            <p className="pt-2"> | </p>
            <NavLink
              to="/login"
              exact={true}
              className="p-2 transform hover:scale-105 cursor-pointer"
            >
              Log In
            </NavLink>
            <p className="pt-2"> | </p>
            <NavLink
              to="/login"
              exact={true}
              className="p-2 transform hover:scale-105 cursor-pointer"
              disabled={true}
            >
              Demo User
            </NavLink>
          </div>
        </div>

        <div
          id="style-wheel"
          className="bg-accentLight45 p-4 m-2 col-start-2 col-end-4"
        >
          <h1 className="text-4xl text-accentDark font-semibold mb-3 text-center">
            Some of our Resume style Templates!
          </h1>
          <div className="flex justify-center">
            <img src={testerResume} alt="This is a test image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

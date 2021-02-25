import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { LoginForm, SignUpForm } from "../auth";

import splashImage from "./splash.jpg";

const LandingPage = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/main" />;
  }

  return (
    <div className="m-4">
      <div className="text-center pt-4 bg-main mb-2 pb-4 ">
        <h1 className="text-6xl text-accentDark">Resume Builder</h1>
        <div className="flex flex-row space-around justify-center text-accentDark text-xl">
          <p className="p-2 transform hover:scale-105 cursor-pointer">About</p>
          <p className="pt-2"> | </p>
          <p className="p-2 transform hover:scale-105 cursor-pointer">Log In</p>
        </div>
      </div>
      <div id="splash">
        <div>
          <img src={splashImage} alt="This is a splash image" />
        </div>
      </div>

      <div id="interaction-box">
        <div id="forms">
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
          <NavLink to="/sign-up" exact={true}>
            Sign Up
          </NavLink>
          <NavLink to="/login" exact={true}>
            Login
          </NavLink>
        </div>

        <div id="style-wheel">
          <h1>Style previewer</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

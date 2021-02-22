import React from 'react';
import './LandingPage.css';
import { Redirect } from 'react-router-dom';

const LandingPage = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/main" />;
  }
  return <h1>Landing Page</h1>;
};

export default LandingPage;

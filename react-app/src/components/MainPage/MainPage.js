import React from 'react';
import Carousel from './Carousel.js';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
      <h1>Main Page</h1>
      <section>Quick Start</section>
      <section>My Resumes</section>
      <Carousel />
      <section>Discover Templates</section>
    </>
  );
};

export default MainPage;

import React from 'react';
import Carousel from './Carousel.js';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
      <h1>Main Page</h1>
      <section>Quick Start</section>
      <section>My Resumes</section>
      <div class="flex flex-col bg-white m-auto p-auto">
        <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
          Recent Resumes
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>

      <section>Discover Templates</section>
    </>
  );
};

export default MainPage;

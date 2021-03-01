import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="inline-block px-3">
      <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <div>
            <img
              alt="Placeholder Image"
              className="block h-auto w-full"
              src="https://picsum.photos/600/400/?random"
            />
          </div>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <div className="no-underline hover:underline text-black">{title}</div>
            </h1>
            <p className="text-grey-darker text-sm">14/4/19</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <div className="flex items-center no-underline hover:underline text-black">
              <img
                alt="Placeholder Image"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p className="ml-2 text-sm">Author Name</p>
            </div>
            <div className="no-underline text-grey-darker hover:text-red-dark">
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Card;

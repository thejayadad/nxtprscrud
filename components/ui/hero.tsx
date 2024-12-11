import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[500px] flex flex-col items-center justify-center bg-gray-100 py-12 px-6 text-center">
      {/* Title Section */}
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold z-10">
          Welcome to <span className="text-blue-600">DriveDiary</span>
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-6 bg-blue-200 -z-10"></div>
      </div>

      {/* Description Banner */}
      <div className="mt-6 bg-blue-200 py-4 px-8 rounded-lg shadow-md">
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-900 font-medium">
          Share your experiences with vehicles and discover insights from drivers around the world.
        </p>
      </div>

      {/* Smaller Description */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700">
        Join our community to post reviews, read experiences, and make informed decisions about your next vehicle.
      </p>

      {/* Search Bar */}
      <div className="mt-8 w-full sm:w-3/4 lg:w-1/2">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search for vehicle reviews..."
            className="flex-grow p-3 border border-blue-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-all"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;

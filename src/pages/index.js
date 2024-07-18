import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-white flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-blue-400 shadow-lg rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Welcome to Edunify!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-700">
          Manage schools efficiently with Edunify.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/addSchool"className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center block w-full md:w-auto focus:outline-none focus:bg-blue-700 transition duration-300">
              Add a School
           
          </Link>
          <Link href="/showSchools" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-center block w-full md:w-auto focus:outline-none focus:bg-green-700 transition duration-300">
              Show Schools
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

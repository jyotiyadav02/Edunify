import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data.schools);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching schools:', error);
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-10">
          <h1 className="text-xl font-bold animate-pulse">Loading Schools...</h1>
        </div>
      </>
    );
  }

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          School List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-lg shadow-md overflow-hidden school-card" // Added class for styling
            >
              <img
                src={school.image_path}
                alt={school.name}
                className="w-full object-fill rounded-t-lg h-64 md:h-80 lg:h-96" // Adjusted image height for different screen sizes
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-indigo-600">
                  <span className="text-indigo-900 font-semibold">
                    School Name:
                  </span>{' '}
                  {school.name}
                </h2>
                <p className="text-gray-700">
                  <span className="text-indigo-900 font-semibold">
                    Address:
                  </span>{' '}
                  {school.address}
                </p>
                <p className="text-gray-700">
                  <span className="text-indigo-900 font-semibold">City:</span>{' '}
                  {school.city}, {school.state}
                </p>
                <p className="text-gray-700">
                  <span className="text-indigo-900 font-semibold">
                    Contact us:
                  </span>{' '}
                  {school.contact}
                </p>
                <p className="text-gray-700">
                  <span className="text-indigo-900 font-semibold">Email:</span>{' '}
                  {school.email_id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShowSchools;


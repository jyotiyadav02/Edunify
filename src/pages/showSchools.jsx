
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Navbar from '@/components/Navbar';
// // import Layout from '@/components/Layout';

// // const ShowSchools = () => {
// //   const [schools, setSchools] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchSchools = async () => {
// //       try {
// //         const response = await axios.get('/api/getSchools');
// //         setSchools(response.data.schools);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching schools:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchSchools();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <Layout>
// //         <Navbar />
// //         <div className="text-center mt-10">Loading...</div>
// //       </Layout>
// //     );
// //   }

// //   return (
// //     <Layout>
// //       <Navbar />
// //       <div className="container">
// //         <h1 className="text-3xl font-bold mb-8 text-center">School List</h1>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {schools.map((school) => (
// //             <div key={school.id} className="school-card">
// //               <img
// //                 src={school.image_path}
// //                 alt={school.name}
// //                 className="school-image"
// //               />
// //               <div className="school-info">
// //                 <h2>School Name: {school.name}</h2>
// //                 <p>Address: {school.address}</p>
// //                 <p>City: {school.city}, {school.state}</p>
// //                 <p>Contact: {school.contact}</p>
// //                 <p>Email: {school.email_id}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default ShowSchools;



// // pages/ShowSchools.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '@/components/Navbar';
// import Layout from '@/components/Layout';

// const ShowSchools = () => {
//   const [schools, setSchools] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSchools = async () => {
//       try {
//         const response = await axios.get('/api/getSchools');
//         setSchools(response.data.schools);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching schools:', error);
//         setLoading(false);
//       }
//     };

//     fetchSchools();
//   }, []);

//   if (loading) {
//     return (
//       <Layout>
//         <Navbar />
//         <div className="text-center mt-10">Loading...</div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <Navbar />
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-8 text-center">School List</h1>
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {schools.map((school) => (
//             <div key={school.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <img
//                 src={school.image_path}
//                 alt={school.name}
//                 className="w-full object-full rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h2 className="text-2xl font-bold mb-2 text-blue-600"><span className="text-blue-600 font-semibold">School Name:</span> {school.name}</h2>
//                 <p className="text-gray-700"><span className="text-blue-600 font-semibold">Address:</span> {school.address}</p>
//                 <p className="text-gray-700"><span className="text-blue-600 font-semibold">City:</span> {school.city}, {school.state}</p>
//                 <p className="text-gray-700"><span className="text-blue-600 font-semibold">Contact us :</span> {school.contact}</p>
//                 <p className="text-gray-700"><span className="text-blue-600 font-semibold">Email:</span> {school.email_id}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ShowSchools;


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


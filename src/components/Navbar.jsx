// // // components/Navbar.js
// // import Link from 'next/link';

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-blue-600 p-4 text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-2xl font-bold">
// //           School App
// //         </div>
// //         <div>
// //           <Link href="/" className="mr-4">
// //             Home
// //           </Link>
// //           <Link href="/addSchool">
// //             Add School
// //           </Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // components/Navbar.jsx
// import React from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-white text-xl font-bold">Home
//         </Link>
//         <Link href="/showSchools" className="text-white text-xl font-bold">Show Schools
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <span className="text-white text-xl font-bold cursor-pointer">Home</span>
        </Link>
        <div className="flex items-center">
          <Link href="/showSchools">
            <span className="text-white text-xl font-bold cursor-pointer mr-4">Show Schools</span>
          </Link>
          {/* Add more navigation links here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


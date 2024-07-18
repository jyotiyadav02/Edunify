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


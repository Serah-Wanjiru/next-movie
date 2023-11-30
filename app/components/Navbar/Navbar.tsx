import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h3 className="text-white font-bold text-xl">Moovies</h3>
            </Link>
          </div>
          <form>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search"
              className="px-3 py-2 rounded-md text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="ml-2 px-3 py-2 rounded-md text-sm bg-blue-500 hover:bg-blue-600 text-white font-medium focus:outline-none"
            >
              Search
            </button>
          </form>
          <div className="flex">
            <div className="flex space-x-4">
              <Link href="/">
                <h3 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</h3>
              </Link>
              <Link href="/about">
                <h3 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</h3>
              </Link>
              <Link href="/about">
                <h3 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">movie list</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
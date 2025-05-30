import React from 'react';

import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AuthMenu = () => {
    const {loading, handleLogout} = useAuth();
  return (
    <div className="group relative z-50">
      <Link >
        <CiUser className="text-2xl cursor-pointer" />
      </Link>
      <div className="hidden group-hover:block absolute right-0 pt-4">
        <menu className="flex flex-col gap-2 w-36 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded shadow-lg z-50">
          <li className="cursor-pointer hover:text-black dark:hover:text-white text-center">
            <Link to="/profile">My Profile</Link>
          </li>
          <li className="cursor-pointer hover:text-black dark:hover:text-white text-center">
            <Link to="/orders">Orders</Link>
          </li>
          <button
            className="cursor-pointer hover:text-black dark:hover:text-white text-center"
            onClick={handleLogout}
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        </menu>
      </div>
    </div>
  );
};

export default AuthMenu;

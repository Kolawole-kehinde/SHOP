import React from 'react';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AuthMenu = () => {
  const { loading, handleLogout } = useAuth();

  return (
    <div className="group relative z-50">
      <Link to="#">
        <CiUser className="text-2xl cursor-pointer" />
      </Link>
      <div className="hidden group-hover:block absolute right-0 pt-4">
        <menu className="flex flex-col items-start px-4 gap-2 w-36 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded shadow-lg z-50">
          <li className="cursor-pointer hover:text-primary dark:hover:text-white text-center">
            <Link to="/profile">My Profile</Link>
          </li>
          <li className="cursor-pointer hover:text-primary dark:hover:text-white text-center">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="cursor-pointer hover:text-primary dark:hover:text-white text-center">
            <Link to="/settings">Settings</Link>
          </li>
          <button
            className="cursor-pointer hover:text-primary dark:hover:text-white text-center"
            disabled={loading}
            onClick={handleLogout}
          >
            Logout
          </button>
        </menu>
      </div>
    </div>
  );
};

export default AuthMenu;

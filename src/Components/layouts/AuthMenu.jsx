import React from 'react';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// Added icons from react-icons
import { FaUser, FaBoxOpen, FaCog, FaSignOutAlt } from 'react-icons/fa';

const AuthMenu = () => {
  const { loading, handleLogout } = useAuth();

  return (
    <div className="group relative z-50">
      <Link to="#">
        <CiUser className="text-2xl cursor-pointer" />
      </Link>
      <div className="hidden group-hover:block absolute right-0 pt-4">
        <menu className="flex flex-col items-start px-4 gap-2 w-44 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded shadow-lg z-50">
          <li className="flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-white">
            <FaUser className="text-lg" />
            <Link to="/profile" className="text-center">My Profile</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-white">
            <FaBoxOpen className="text-lg" />
            <Link to="/orders" className="text-center">Orders</Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-white">
            <FaCog className="text-lg" />
            <Link to="/settings" className="text-center">Settings</Link>
          </li>
          <button
            className="flex items-center gap-2 cursor-pointer hover:text-primary dark:hover:text-white text-center w-full"
            disabled={loading}
            onClick={handleLogout}
          >
            <FaSignOutAlt className="text-lg" />
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        </menu>
      </div>
    </div>
  );
};

export default AuthMenu;

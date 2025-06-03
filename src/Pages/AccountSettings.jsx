import React from "react";
import { FaArrowLeft, FaLock, FaShieldAlt, FaBell, FaMoon, FaGlobe, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        {/* <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <FaArrowLeft /> Back
        </button> */}

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Account Settings</h1>
          <p className="text-sm text-gray-500">Manage your account preferences</p>
        </div>

        <div className="space-y-10">
          {/* Security Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-gray-700">
              <FaShieldAlt className="text-primary" />
              <h2 className="text-xl font-semibold">Security</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="flex justify-between items-center py-4">
                <div>
                  <p className="font-medium text-gray-800">Change Password</p>
                  <p className="text-sm text-gray-500">Update your login password</p>
                </div>
                <Link to="/change-password">
                  <button className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-orange-600">
                    Change
                  </button>
                </Link>
              </div>

              <div className="flex justify-between items-center py-4">
                <div>
                  <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add extra security to your account</p>
                </div>
                <button className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-orange-600">
                  Enable
                </button>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-gray-700">
              <FaBell className="text-yellow-500" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Order Updates", type: "email" },
                { label: "Promotional Offers", type: "sms" },
                { label: "Monthly Newsletter", type: "email" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-700">
                    {item.label} ({item.type.toUpperCase()})
                  </span>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-primary  rounded"
                    defaultChecked={item.label !== "Monthly Newsletter"}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Preferences Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-gray-700">
              <FaGlobe className="text-green-500" />
              <h2 className="text-xl font-semibold">Preferences</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaMoon />
                  <span>Dark Mode</span>
                </div>
                <button className="bg-gray-200 px-4 py-1 rounded-full text-sm text-gray-600 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaGlobe />
                  <span>Language</span>
                </div>
                <select className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-red-200">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <FaTrash />
              <h2 className="text-xl font-semibold">Danger Zone</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Deleting your account is permanent and cannot be undone. All your data will be lost.
            </p>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
              Delete Account
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

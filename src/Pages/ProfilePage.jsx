import React, { useContext } from "react";
import {
  FaUserEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaCamera,
} from "react-icons/fa";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import useAvatarUpload from "../hooks/useAvatarUpload";

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const { preview, uploading, error, handleFileChange } = useAvatarUpload(
    user?.id,
    setUser
  );

  if (!user) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold text-lg">
        User not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition mb-6"
        aria-label="Go back"
      >
        <FaArrowLeftLong fontSize={20} />
        Back
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-gradient-to-r from-primary to-primary/80 text-white relative">
          <div className="relative group">
            <img
              src={
                preview ||
                user.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4F46E5&color=fff`
              }
              alt="Profile"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg transition-transform group-hover:scale-105"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-2 right-2 bg-white text-primary p-2 rounded-full cursor-pointer shadow-md hover:bg-primary hover:text-white transition flex items-center justify-center"
              title="Change Profile Picture"
            >
              <FaCamera />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e)}
              className="hidden"
            />
          </div>

          <div className="flex-1 text-center md:text-left  md:space-y-3">
            <h1 className="text-3xl font-extrabold tracking-wide">{user.name}</h1>
            <p className="text-sm md:text-base font-medium opacity-90">
              {user.location || "No location added"}
            </p>
            <p className="text-sm md:text-base">
              Joined{" "}
              <time dateTime={user.created_at}>
                {user.created_at
                  ? new Date(user.created_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Date unavailable"}
              </time>
            </p>
            <p className="text-sm md:text-base italic text-primary/90">
              {user.gender || "Gender not set"}
            </p>
            
          </div>

          <div className="md:ml-auto mt-4 md:mt-0">
            <button
              onClick={() => navigate("/edit-profile")}
              className="flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-primary hover:text-white transition"
              aria-label="Edit Profile"
            >
              <FaUserEdit /> Edit Profile
            </button>
          </div>
        </div>

        <section className="p-8 space-y-8 bg-white">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600 text-base leading-relaxed min-h-[72px]">
              {user.bio || "No bio added yet."}
            </p>
        
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Contact Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition">
                <FaEnvelope className="text-primary text-xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">Email</p>
                  <p className="text-base text-gray-900">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition">
                <FaPhoneAlt className="text-primary text-xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">Phone</p>
                  <p className="text-base text-gray-900">
                    {user.phone || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {uploading && (
            <p className="text-sm text-gray-500 italic">Uploading profile picture...</p>
          )}
          {error && <p className="text-sm text-red-500 font-semibold">{error}</p>}
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;

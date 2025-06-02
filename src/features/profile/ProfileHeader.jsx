import React from "react";
import { FaCamera, FaUserEdit } from "react-icons/fa";

const ProfileHeader = ({ user, preview, handleFileChange, navigate }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-10 bg-gradient-to-r from-primary to-indigo-600 text-white">
      <div className="relative group">
        <img
          src={
            preview ||
            user.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4F46E5&color=fff`
          }
          alt={`${user.name}'s avatar`}
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg transition group-hover:scale-105"
        />
        <label
          htmlFor="avatar-upload"
          className="absolute bottom-2 right-2 bg-white text-primary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
        >
          <FaCamera />
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="flex-1 text-center md:text-left space-y-1">
        <h1 className="text-3xl font-bold tracking-wide">{user.name}</h1>
        <p className="text-sm">{user.location || "No location added"}</p>
        <p className="text-sm">
          Joined{" "}
          <time dateTime={user.created_at}>
            {new Date(user.created_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <p className="text-sm italic">{user.gender || "Gender not set"}</p>
      </div>

      <div className="mt-4 md:mt-0">
        <button
          onClick={() => navigate("/edit-profile")}
          className="flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2 rounded-xl shadow hover:bg-primary hover:text-white transition"
        >
          <FaUserEdit /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

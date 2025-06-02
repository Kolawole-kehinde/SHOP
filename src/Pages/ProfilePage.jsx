// src/pages/ProfilePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";
import useAvatarUpload from "../hooks/useAvatarUpload";
import ProfileHeader from "../features/profile/ProfileHeader";
import ProfileAbout from "../features/profile/ProfileAbout";
import ProfileContact from "../features/profile/ProfileContact";


const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const { preview, uploading, error, handleFileChange } = useAvatarUpload(user?.id, setUser);

  if (!user) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold text-lg">
        User not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      {/* <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-6 transition"
        aria-label="Go back"
      >
        <FaArrowLeftLong size={18} />
        Back
      </button> */}

      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
        <ProfileHeader
          user={user}
          preview={preview}
          handleFileChange={handleFileChange}
          navigate={navigate}
        />
        <div className="px-6 py-8 md:px-10 space-y-10">
          <ProfileAbout bio={user.bio} />
          <ProfileContact email={user.email} phone={user.phone} />

          {uploading && (
            <p className="text-sm text-gray-500 italic">Uploading profile picture...</p>
          )}
          {error && <p className="text-sm text-red-500 font-semibold">{error}</p>}
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

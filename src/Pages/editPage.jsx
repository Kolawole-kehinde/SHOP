import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../hooks/useAuth";
import { editProfileInputs } from "../constant/editPageInput";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        bio: user.bio || "",
        location: user.location || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("users")
        .update(formData)
        .eq("user_id", user.user_id);

      if (error) throw error;

      setUser({ ...user, ...formData });

      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error("Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <button
        onClick={() => navigate(-1)}
        aria-label="Go back"
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 mb-6"
      >
        <FaArrowLeftLong fontSize={20} />
        Back
      </button>

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-6" noValidate>
          {editProfileInputs?.map(({ label, name, type, placeholder, disabled }) =>
            type === "textarea" ? (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {label}
                </label>
                <textarea
                  id={name}
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  rows={4}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="w-full border border-gray-300 rounded-md p-3
                             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600
                             disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                />
              </div>
            ) : (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="w-full border border-gray-300 rounded-md p-3
                             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600
                             disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            )
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md bg-blue-600 text-white py-3 font-semibold
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600
                        disabled:opacity-60 disabled:cursor-not-allowed transition`}
          >
            {loading ? "Saving..." : "Update Profile"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditProfile;

import React from "react";

const ProfileForm = ({ formData, loading, onChange, onSave }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave();
      }}
      className="space-y-6 max-w-md mx-auto"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          placeholder="Your full name"
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          placeholder="you@example.com"
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          autoComplete="email"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-md bg-blue-600 text-white py-2 font-semibold
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                    disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
};

export default ProfileForm;

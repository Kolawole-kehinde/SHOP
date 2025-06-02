const AvatarUploader = ({ avatarUrl, preview, uploading, error, handleFileChange }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div className="relative w-32 h-32">
        <img
          src={preview || avatarUrl || "/default-avatar.png"}
          alt="Profile"
          className="rounded-full w-full h-full object-cover border shadow"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 text-sm font-medium">
            Uploading...
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default AvatarUploader;

const ProfileAbout = ({ bio }) => (
  <section className="border-b border-gray-200 pb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
    <p className="text-gray-600 leading-relaxed min-h-[72px]">
      {bio || "No bio added yet."}
    </p>
  </section>
);

export default ProfileAbout;

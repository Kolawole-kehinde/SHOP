import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ProfileContact = ({ email, phone }) => (
  <section>
    <h2 className="text-xl font-semibold text-gray-800 mb-5">
      Contact Information
    </h2>
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow transition">
        <FaEnvelope className="text-primary text-xl" />
        <div>
          <p className="text-sm font-medium text-gray-700">Email</p>
          <p className="text-base text-gray-900">{email}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow transition">
        <FaPhoneAlt className="text-primary text-xl" />
        <div>
          <p className="text-sm font-medium text-gray-700">Phone</p>
          <p className="text-base text-gray-900">{phone || "Not provided"}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileContact;

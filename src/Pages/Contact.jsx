import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill in all fields." });
      return;
    }
    setStatus({ type: "success", msg: "Thank you for contacting us! We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/images/customer.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 px-4 py-24 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
          {/* Contact Info with Map */}
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-white">Contact Information</h2>
            <ul className="space-y-6 text-lg mb-10">
              <li className="flex items-center gap-4">
                <HiOutlineLocationMarker fontSize={30} className=" text-primary" />
                <span>123 Gadget St, Tech City, USA</span>
              </li>
              <li className="flex items-center gap-4">
                <HiOutlinePhone fontSize={30} className=" text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <HiOutlineMail fontSize={30} className=" text-primary" />
                <span>support@eshop.com</span>
              </li>
            </ul>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019059305128!2d-122.4206793846813!3d37.77492927975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2e5cdd0f7b%3A0xbbb6c33e0a3ebed0!2sGadget%20Street%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615910380432!5m2!1sen!2sus"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="w-full border-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg"
            noValidate
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Send Us a Message</h2>

            <label className="block mb-5">
              <span className="text-white font-semibold mb-2 block">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-md border px-4 py-3 text-black focus:ring-2 focus:ring-primary"
                required
              />
            </label>

            <label className="block mb-5">
              <span className="text-white font-semibold mb-2 block">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-md border px-4 py-3 text-black focus:ring-2 focus:ring-primary"
                required
              />
            </label>

            <label className="block mb-6">
              <span className="text-white font-semibold mb-2 block">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                className="w-full rounded-md border px-4 py-3 text-black focus:ring-2 focus:ring-indigo-400"
                required
              />
            </label>

            {status && (
              <p
                className={`mb-4 font-semibold ${
                  status.type === "success" ? "text-green-300" : "text-red-300"
                }`}
              >
                {status.msg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/85 text-white font-semibold rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

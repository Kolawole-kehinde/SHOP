import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/images/aboutt.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 py-20 px-6 md:px-12 lg:px-24 text-white">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          About <span className="text-primary-400">Eshop</span>
        </h2>

        {/* Flex container to sync height */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Image with Blur Background */}
          <div className="relative rounded-lg overflow-hidden shadow-lg backdrop-blur-md bg-white p-2 h-full flex">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
              alt="Modern gadgets"
              className="w-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-md"></div>
          </div>

          {/* Right: Text content with Blur Background */}
          <div className="space-y-8 backdrop-blur-md bg-white text-black rounded-xl p-8 shadow-lg h-full flex flex-col justify-center">
            <p className="text-lg leading-relaxed">
              At <strong>Eshop</strong>, we deliver the latest and most innovative gadgets to enhance your lifestyle.
              From smart home devices to cutting-edge wearables, our handpicked selection ensures you get quality and value.
            </p>

            <p className="text-lg leading-relaxed">
              Founded in 2023, our mission is to make advanced technology accessible and exciting for everyone.
              We believe that the right gadgets empower you, simplify everyday tasks, and bring joy to your routine.
            </p>

            <ul className="list-disc list-inside space-y-3">
              <li><strong>Innovative Products:</strong> Carefully curated to stay ahead of the curve.</li>
              <li><strong>Customer First:</strong> Exceptional service, support, and fast shipping.</li>
              <li><strong>Trust & Transparency:</strong> Honest information and reliable quality.</li>
              <li><strong>Sustainability:</strong> Committed to eco-friendly practices.</li>
            </ul>

            <Link to="/shop">
              <button className="mt-4 bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

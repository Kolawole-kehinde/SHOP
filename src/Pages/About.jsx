import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6 md:px-12 lg:px-24 ">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
            About <span className="text-primary-600">Eshop</span>
          </h2>
     <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
            alt="Modern gadgets"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>

        {/* Right: Text content */}
        <div className="space-y-8">
        
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Eshop</strong>, we deliver the latest and most innovative gadgets to enhance your lifestyle.
            From smart home devices to cutting-edge wearables, our handpicked selection ensures you get quality and value.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2023, our mission is to make advanced technology accessible and exciting for everyone.
            We believe that the right gadgets empower you, simplify everyday tasks, and bring joy to your routine.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li><strong>Innovative Products:</strong> Carefully curated to stay ahead of the curve.</li>
            <li><strong>Customer First:</strong> Exceptional service, support, and fast shipping.</li>
            <li><strong>Trust & Transparency:</strong> Honest information and reliable quality.</li>
            <li><strong>Sustainability:</strong> Committed to eco-friendly practices.</li>
          </ul>

          <Link to="/shop">
            <button className="mt-4 inline-block bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
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

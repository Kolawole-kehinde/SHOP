import React, { useState } from 'react';

const ImageGallery = ({ images = [], productName }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">
      {/* Sub-images */}
      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[20%]">
        {images.map((img, index) => {
          const isActive = selectedImage === img;
          return (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(img)}
              className={`w-[60px] h-[60px] object-cover rounded border-2 cursor-pointer transition-all ${
                isActive ? 'border-green-600' : 'border-gray-300'
              }`}
            />
          );
        })}
      </div>

      {/* Main image */}
      <div className="w-full sm:w-[80%]">
        <img
          src={selectedImage || '/placeholder.jpg'}
          alt={productName}
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default ImageGallery;

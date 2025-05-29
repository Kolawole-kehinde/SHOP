import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { shopContext } from '../Context/ShopContext';
import RelatedProducts from '../Components/RelatedProducts';
import { supabase } from '../lib/supabaseClient';

const fetchProductById = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { currency, addToCart } = useContext(shopContext);

  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });

  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <div className="container text-center py-10">Loading product details...</div>;
  }

  if (isError) {
    return <div className="container text-center text-red-600 py-10">Error: {error.message}</div>;
  }

  const images = Array.isArray(product.images)
    ? product.images
    : product.images
    ? [product.images]
    : [];

  const mainImage = selectedImage || images[0] || '/placeholder.jpg';

  return (
    <div className="container py-10 border-t">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Images Section */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col gap-2 sm:space-y-2 overflow-x-auto sm:overflow-y-auto sm:w-[20%]">
            {images.map((img, index) => {
              const isActive = selectedImage === img || (!selectedImage && index === 0);
              return (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-[100px] h-[100px] object-cover cursor-pointer rounded-md border transition-all duration-200
                    ${isActive ? 'border-green-600 shadow-md' : 'border-gray-300 hover:border-black'}`}
                  onClick={() => setSelectedImage(img)}
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-8 sm:mt-0">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-4 text-2xl font-bold">
            {currency}
            {product.price}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="border px-3 py-1"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="border px-3 py-1"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => addToCart(product.id, quantity)}
              className="bg-gray-800 text-white px-6 py-3"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => {
                addToCart(product.id, quantity);
                navigate('/checkout');
              }}
              className="bg-black text-white px-6 py-3"
            >
              BUY NOW
            </button>
          </div>

          {/* Trust Info */}
          <div className="mt-8 text-sm text-gray-500 space-y-1">
            <p>✅ 100% Original Product</p>
            <p>✅ Cash On Delivery is available</p>
            <p>✅ Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-16">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="border px-6 py-6 text-sm text-gray-600 space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor aspernatur
            iste officiis quod quisquam molestias facere!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur nulla eum
            sint cupiditate expedita nesciunt aspernatur adipisci!
          </p>
        </div>
      </div>

      <RelatedProducts
        category={product.category}
        subCategory={product.subCategory}
      />
    </div>
  );
};

export default ProductPage;

// src/Pages/ProductPage.jsx
import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { shopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";
import { supabase } from "../lib/supabaseClient";


const fetchProductById = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id) // id is UUID string, no parseInt
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { currency, addToCart } = useContext(shopContext);

  const [image, setImage] = useState("");

  const {
    data: productData,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });

  // Set main image once product data loads
  useEffect(() => {
    if (productData) {
      const firstImage = Array.isArray(productData.images)
        ? productData.images[0]
        : productData.images;
      setImage(firstImage || "");
    }
  }, [productData]);

  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="container text-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container text-center text-red-600">
        <p>Error loading product: {error.message}</p>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="container text-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Left Side: Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {(Array.isArray(productData.images)
              ? productData.images
              : [productData.images]
            ).map(
              (item, index) =>
                item && (
                  <img
                    src={item}
                    key={index}
                    alt={`Sub image ${index + 1}`}
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                    onClick={() => setImage(item)}
                  />
                )
            )}
          </div>
          <div className="w-full sm:w-[80%]">
            {image ? (
              <img src={image} alt={productData.name} className="w-full h-auto" />
            ) : (
              <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
                <span>No Image Available</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <p className="mt-5 text-3xl font-medium mb-2">
            {currency}
            {productData.price}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="border px-3 py-1"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="border px-3 py-1"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-5">
            <button
              onClick={() => addToCart(productData.id, quantity)}
              className="bg-gray-800 text-white px-6 py-3"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => {
                addToCart(productData.id, quantity);
                navigate("/checkout");
              }}
              className="bg-black text-white px-6 py-3"
            >
              BUY NOW
            </button>
          </div>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>✅ 100% Original Product</p>
            <p>✅ Cash On Delivery is available on this product</p>
            <p>✅ Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Product Description & Reviews */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
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

      {/* Related Products Section */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default ProductPage;

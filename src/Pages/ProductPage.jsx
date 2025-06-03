import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductById } from '../hooks/useProducts';
import RelatedProducts from '../Components/RelatedProducts';
import ImageGallery from '../Components/ProductDetails/ImageGallery';
import ProductInfo from '../Components/ProductDetails/ProductInfo';
import SkeletonCard from '../Components/SkeletonCard';
import { ShopContext } from '../Context/ShopContext';
import { CartContext } from '../Context/CartContext';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { currency } = useContext(ShopContext);
  const { addToCart, setBuyNowItem } = useContext(CartContext);

  const { data: product, isLoading, isError, error } = useProductById(productId);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="container py-10 border-t">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-1/2">
            <SkeletonCard />
          </div>
          <div className="w-full sm:w-1/2 space-y-4">
            <div className="h-6 bg-gray-300 animate-pulse w-1/2 rounded" />
            <div className="h-5 bg-gray-300 animate-pulse w-3/4 rounded" />
            <div className="h-4 bg-gray-300 animate-pulse w-1/4 rounded" />
            <div className="h-10 bg-gray-300 animate-pulse w-full rounded mt-4" />
            <div className="h-10 bg-gray-300 animate-pulse w-full rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container text-center text-red-600 py-10">
        Error: {error.message}
      </div>
    );
  }

  const images = Array.isArray(product.images)
    ? product.images
    : product.images
    ? [product.images]
    : [];

  return (
    <div className="container py-10 border-t">
      <div className="flex flex-col sm:flex-row gap-10">
        <ImageGallery images={images} productName={product.name} />

        <ProductInfo
          product={product}
          currency={currency}
          quantity={quantity}
          setQuantity={setQuantity}
          onAddToCart={() => {
            addToCart(product.id, quantity);
            setBuyNowItem(null);
          }}
          onBuyNow={() => {
            setBuyNowItem({ ...product, quantity });
            navigate('/checkout');
          }}
        />
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

      <RelatedProducts category={product.category} subCategory={product.subCategory} />
    </div>
  );
};

export default ProductPage;

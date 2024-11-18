import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../Components/Contex/ShopContext';

const ProductPage = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(shopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const product = products.find((item) => item.id === parseInt(productId));
    if (product) {
      setProductData(product);
      setImage(Array.isArray(product.image) ? product.image[0] : product.image);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="container text-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {Array.isArray(productData.image) &&
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt={`Sub image ${index}`}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Main product" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <h1 className="mt-5 text-gray-500 md:w-4/5">{productData.description}</h1>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-4">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash On Delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor aspernatur iste officiis quod quisquam molestias facere! Atque, fugit perspiciatis. Molestiae sequi recusandae labore at veniam cum voluptas distinctio, aperiam exercitationem saepe aspernatur voluptatibus, suscipit molestias, ducimus nobis perspiciatis illo delectus aliquid eveniet commodi! Ad nisi magnam doloribus vel hic! Accusamus hic deleniti consequatur asperiores? Nihil quae voluptates alias voluptatum! Quisquam laboriosam quia iusto ipsum architecto soluta repellat velit quam assumenda ut accusantium ad adipisci, possimus accusamus iure, facere minus libero animi ab asperiores optio harum? Perferendis possimus unde repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia pariatur nulla eum sint cupiditate
            expedita nesciunt aspernatur adipisci! Vel nemo mollitia quos exercitationem at ullam numquam quas
            eius alias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

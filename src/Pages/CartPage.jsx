import React, { useContext, useState, useEffect } from "react";
import Tittle from "../Components/Tittle";
import { shopContext } from "../Context/ShopContext";


const CartPage = () => {
  const { products, currency, cartItems } = useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartItems ){
      for(const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
    
  }, [cartItems]);

  return (
    <section className="container mx-auto border-t pt-14">
      <div className="text-2xl mb-3">
        <Tittle text1="YOUR" text2="CART" />
      </div>
          <div>
              {
                cartData.map((item,index) => {
                  const productData = products.find((product) => product._id === item._id);
                  return (
                    <div key={index} className=" py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr items-center gap-4]">
                        <div className="flex items-start gap-6">
                            <img src={productData.image[0]} alt="" className="w-16 sm:w-20"/>
                            <div>
                              <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                            </div>
                        </div>
                    </div>
                  )
                })
              }
          </div>
   
    </section>
  );
};

export default CartPage;
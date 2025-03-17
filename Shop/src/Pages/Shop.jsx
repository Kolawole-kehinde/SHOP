import React, { useContext, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Tittle from "../Components/Tittle";
import ProductItem from "../Components/ProductItem";
import { shopContext } from "../Components/Context/ShopContext";


const Shop = () => {
  const { products, search, showSearch, Search } = useContext(shopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products); 
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')


  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  
  // Apply filtering whenever category or products change
  useEffect(() => {
    // Start with a filter of the original products array
    let filteredProducts = [...products];
  
    // Filter by category
    filteredProducts = 
      category.length === 0 
        ? filteredProducts 
        : filteredProducts.filter((item) => category.includes(item.category));
  
    // Apply search filter if showSearch is true and search term is provided
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter((item) => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(filteredProducts);
  }, [category, products, search, showSearch]);
  
  
  // Apply sorting whenever sortType changes or filterProducts is updated
  useEffect(() => {
    setFilterProducts((prev) =>
      [...prev].sort((a, b) =>
        sortType === "low-high" ? a.price - b.price : b.price - a.price
      )
    );
  }, [sortType]);
  


  return (
    <section>
      <div className="container flex flex-col lg:flex-row gap-4 pt-10 border-t">
        {/* Filter Section */}
        <div className="w-full sm:w-1/6">
          <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center gap-2 cursor-pointer">
            FILTER
            <RiArrowDropDownLine
              
              className={`h-6 lg:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </p>
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} lg:block`}>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value="Laptop"
                  onChange={toggleCategory}
                  className="w-3"
              
                />
                Laptops
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value="Speaker"
                  onChange={toggleCategory}
                  className="w-3"
                />
                Speakers
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value="Watch"
                  onChange={toggleCategory}
                  className="w-3 capitalize"

                />
                Watch
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value="Gaming"
                  onChange={toggleCategory}
                  className="w-3"
                />
                Gaming
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value="Headphone"
                  onChange={toggleCategory}
                  className="w-3"
                />
                Headphones
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1 text-center">
              <Tittle text1={"All"} text2={"COLLECTION"} />
            </div>
            <div>
            <select onChange={(e) =>setSortType (e.target.value)} className="border-2 border-gray-300 text-sm px-2 py-2 h-10">
              <option value="relevant">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
            </div>
            </div>

          {/* Map Product */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.length > 0 && filterProducts.map((item, index) => (
             <ProductItem 
             key={item.id} 
             id={item.id} 
             image={item.image} 
             name={item.name} 
             price={item.price}
           
           />
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

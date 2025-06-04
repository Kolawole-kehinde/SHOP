import React, { useEffect, useState, useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Tittle from "../Components/Tittle";
import ProductItem from "../Components/ProductItem";
import SearchBar from "../Components/SearchBar";
import SkeletonCard from "../Components/SkeletonCard";
import { ShopContext } from "../Context/ShopContext";
import { useProducts } from "../hooks/useProducts";

const Shop = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  const { data: products = [], isLoading, isError, error } = useProducts();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortType === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filtered);
  }, [products, category, sortType, search, showSearch]);

  return (
    <section>
      <SearchBar
        search={search}
        setSearch={setSearch}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <div className="container flex flex-col lg:flex-row gap-4 pt-10 border-t">
        {/* Filter Sidebar */}
        <div className="w-full sm:w-1/6">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center gap-2 cursor-pointer"
          >
            FILTER
            <RiArrowDropDownLine
              className={`h-6 lg:hidden transition-transform ${
                showFilter ? "rotate-90" : ""
              }`}
            />
          </p>
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } lg:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Laptop", "Speaker", "Watch", "Gaming", "Headphone"].map(
                (cat) => (
                  <label key={cat} className="flex gap-2 capitalize">
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                      className="w-3"
                    />
                    {cat}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1 text-center">
              <Tittle text1="All" text2="COLLECTION" />
            </div>
            <div>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border-2 border-gray-300 text-sm px-2 py-2 h-10"
                value={sortType}
              >
                <option value="relevant">Sort By: Relevant</option>
                <option value="low-high">Sort By: Low to High</option>
                <option value="high-low">Sort By: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
            {isLoading
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <SkeletonCard key={idx} />
                ))
              : filterProducts.map((item) => (
                  <ProductItem
                    key={item.id}
                    id={item.id}
                    images={item.images}
                    name={item.name}
                    price={item.price}
                  />
                ))}
          </div>

          {isError && (
            <p className="text-center mt-8 text-red-500">
              Error: {error.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;

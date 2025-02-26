import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { shopContext } from './Contex/ShopContext'
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const {search,setSearch,showSearch, setShowSearch} =useContext(shopContext);
  const [visible, setVisible] =useState(false);
  const location = useLocation();

  useEffect(() =>{
     if (location.pathname.includes('shop')) {
       setVisible(true);
     }
     else{
      setVisible(false);
     }
     
  },[location])


  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center py-3 flex items-center justify-center'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 '>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
      <CiSearch  className='w-4 text-2xl'/>
      </div>
      <RxCross2 className='w-4'onClick={() =>setShowSearch(false)} />
     
     
    </div>
  ) :null
}

export default SearchBar;
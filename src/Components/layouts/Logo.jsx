import React from "react";
import { Link,} from "react-router-dom";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="flex items-center gap-4 text-2xl md:text-3xl text-primary">
     <Link to="/" className='text-3xl sm:text-4xl text-red-600 tracking-wide' onClick={toggleMenu}>EShop</Link>
    </h1>
  );
};

export default Logo;

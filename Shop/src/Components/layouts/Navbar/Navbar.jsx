import { useState } from 'react';
import NavRight from '../NavRight';
import { BiMenuAltRight } from 'react-icons/bi';
import Logo from '../Logo';
import { IoClose } from "react-icons/io5";
import Menu from '../Menu';


const NavBar = () => {
  const [openMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    return SetOpenMenu((prev) => !prev);
  }  
  return (
    <header className=' bg-white dark:bg-gray-900 py-4 dark:text-white duration-200 relative z-40'>
      <nav className='container flex justify-between items-center'>
        <Logo/>
        <button className='lg:hidden block' onClick={toggleMenu}>
        <BiMenuAltRight fontSize={30}/>
        </button>
           <Menu menuStyle="hidden lg:flex items-center gap-14 font-semibold uppercase"/>

        {/* Right Section */}
          <NavRight/>
      </nav>


        {/* Hamburger Menu */}
        {
          openMenu && (
            <nav className='fixed inset-0 z-40 bg-gray-300 w-full h-[300px]'>
               <div className='flex justify-between items-center p-4'>
               <Logo toggleMenu={toggleMenu}/>
                  <button onClick={toggleMenu}>
                <IoClose fontSize={30}/>
             </button>
               </div>
                <Menu menuStyle='flex flex-col items-start space-y-6 p-4 text-xl' toggleMenu={toggleMenu}/>  
            </nav>
          )
        }
    </header>
  );
};

export default NavBar;

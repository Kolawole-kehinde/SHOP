import React from 'react'
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../../constant/navRoutes';

const Menu = ({menuStyle, toggleMenu}) => {
    const active =(isActive) => {
        return isActive ? "text-red-500" : "text-gray-500";
      }
  return (
    <>
        <menu className={menuStyle} >
                 {
            navRoutes.map(({name, path, id}) => (
             <li key={id}>
                <NavLink
                to={path}
                className={({ isActive }) => active(isActive)}
                onClick={toggleMenu}
              >
                {name}
              </NavLink>
            

             </li>
            ))
          }
               </menu>
    </>
  )
}

export default Menu

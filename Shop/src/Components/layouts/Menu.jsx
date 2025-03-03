import React from 'react'

const Menu = () => {
  return (
    <>
        <menu className='flex flex-col items-start space-y-6 p-4'>
                 {
            navRoutes.map(({name, path, id}) => (
             <li key={id}>
                <NavLink
              
                to={path}
                className={({ isActive }) =>
                  `inline-block px-4 font-semibold  duration-200 ${
                    isActive ? "text-red-500" : "text-white"
                  }`
                }
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

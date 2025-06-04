import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";



const MobileMenu = ({ open, toggleMenu, user }) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-gray-100 dark:bg-gray-800 w-full h-[350px] p-4 flex flex-col rounded-2xl"
        >
          <div className="flex justify-between items-center mb-6">
            <Logo toggleMenu={toggleMenu} />
            <button onClick={toggleMenu} aria-label="Close mobile menu">
              <IoClose fontSize={30} />
            </button>
          </div>

          <Menu
            menuStyle="flex flex-col items-start gap-6 text-lg font-medium"
            toggleMenu={toggleMenu}
          />

          {!user && (
            <button
              onClick={() => {
                navigate("/auth/register");
                toggleMenu();
              }}
              className="mt-4 py-3 px-6 bg-primary text-white rounded-md text-base font-semibold hover:scale-105 transition-all"
            >
              Register
            </button>
          )}

       
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

import { motion } from "framer-motion";
const NavbarMenulayout = ({ children }) => {
  return (
    <motion.div
      initial={{ x : "400px" }}
      animate={{ x :"0px" }}
      transition={{ duration : 0.4, ease : 'easeOut' }}
      exit={{ x : "400px" }}
      className="fixed px-4 py-4 z-10 h-screen w-full flex md:hidden flex-col bg-[#0a192f] text-gray-300">
      {children}
    </motion.div>
  );
}
 
export default NavbarMenulayout;
import { motion } from "framer-motion";
const AboutLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ x : "300px", opacity : 0 }}
      animate={{ x : "0", opacity : 1 }}
      transition={{ duration : 0.5, ease : "easeOut" }}  
      className="py-20 px-20 md:px-52 w-full bg-[#0a192f] min-h-screen text-gray-300 flex flex-col items-center justify-center">
      {children}
    </motion.div>
  );
}
 
export default AboutLayout;
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io"; 

const Notification = ({ message, onClose, type }) => {
  
  useEffect(() => {
    setTimeout(onClose, 5000);
  }, [onClose]);

  return (
    <motion.div
      initial={{ height : "0px", paddingTop : "0px", paddingBottom : "0px" }}
      animate={{ height : "70px", paddingTop : "24px", paddingBottom : "24px" }}
      transition={{ duration : 0.4, ease : 'easeOut' }}
      exit={{ height : "0px", paddingTop : "0px", paddingBottom : "0px" }} 
      className={`
        fixed z-20 bottom-0 px-14 w-full
        flex items-center justify-between 
        ${ type === 'error' ? 'bg-red-600' : 'bg-green-600' }
        overflow-hidden text-white text-lg
      `}
    >
      <div className="h-full flex items-center">
        <span className="mr-3">
        { type === 'error' &&  <IoIosWarning size={"18px"} /> }
        { type === 'success' && <IoIosCheckmark size={"24px"} /> }
        </span>
        <p className="font-medium"> {message} </p>
      </div>
      <span
        onClick={onClose} 
        className={`
          px-2 py-2 rounded-full flex items-center justify-center 
          ${type === 'error' ? 'hover:bg-red-700' : 'hover:bg-green-700'}
          hover:cursor-pointer
        `}
      >
        <MdClose size={"24px"} />
      </span>
    </motion.div>
  );
}
 
export default Notification;
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return (
    createPortal(
      <AnimatePresence>
        {children}
      </AnimatePresence>
      , document.getElementById('root')
    )
  );
}
 
export default Modal;
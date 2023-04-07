const NavbarLayout = ({ children }) => {
  return (
    <div 
      className={`
        z-10 fixed bg-[#0a192f] px-4 w-full h-20 flex justify-between items-center 
        text-gray-300 overflow-hidden shadow-md
      `}
    >
      {children}  
    </div>
  );
}
 
export default NavbarLayout;
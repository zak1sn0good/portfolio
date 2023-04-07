const NavbarNavLayout = ({ children }) => {
  return (
    <div className="hidden h-full md:flex">
      { children }
    </div>
  );
}
 
export default NavbarNavLayout;
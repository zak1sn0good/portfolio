import { Link } from "react-router-dom";
const NavbarMenuItem = ({ label, closeMenu, active, handleActive }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <Link
        to={ label === "Home" ? "/" : "/".concat(label) }
        onClick={() => {
          handleActive();
          closeMenu();
        }} 
        className={`py-5 hover:cursor-pointer hover:text-pink-600 ${active ? 'text-pink-700' : ''}`}
      >
        <span className="text-3xl font-light pointer-events-none">
          { label }
        </span>
      </Link>
    </div>
  );
}
 
export default NavbarMenuItem;
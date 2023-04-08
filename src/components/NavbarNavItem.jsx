import { Link } from "react-router-dom";

const NavbarNavItem = ({ label, active, handleActive }) => {
  return (
    <Link
      to={ label === "Home" ? "/" : "/".concat(label) }
      className={`
        h-full px-3 flex items-center hover:cursor-pointer 
        hover:text-pink-600 ${active ? 'text-pink-600' : ''}
      `}
      onClick={handleActive}
    >
      <span className="text-lg">
        {label}
      </span>
    </Link>
  );
}
 
export default NavbarNavItem;
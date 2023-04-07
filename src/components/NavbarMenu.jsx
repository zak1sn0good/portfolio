import { MdClose } from "react-icons/md";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarMenuLayout from "../layouts/NavbarMenuLayout";

const NavbarMenu = ({ closeMenu, active, handleActive }) => {
  return (
    <NavbarMenuLayout>
      <div className="py-4 w-full flex items-center justify-end">
        <div
          onClick={closeMenu} 
          className="px-2 py-2 hover:cursor-pointer hover:bg-[#08081e] rounded-full">
          <span className="pointer-events-none">
            <MdClose 
              size={"30px"}
            />
          </span>
        </div>
      </div>
      <NavbarMenuItem 
        label='Home' 
        closeMenu={closeMenu} 
        active={ active === "Home" }
        handleActive={() => handleActive("Home")} 
      />
      <NavbarMenuItem 
        label='About' 
        closeMenu={closeMenu} 
        active={ active === "About" }
        handleActive={() => handleActive("About")} 
      />
      <NavbarMenuItem 
        label='Skills' 
        closeMenu={closeMenu} 
        active={ active === "Skills" }
        handleActive={() => handleActive("Skills")} 
      />
      <NavbarMenuItem 
        label='Work' 
        closeMenu={closeMenu} 
        active={ active === "Work" }
        handleActive={() => handleActive("Work")} 
      />
      <NavbarMenuItem 
        label='Contact' 
        closeMenu={closeMenu} 
        active={ active === "Contact" }
        handleActive={() => handleActive("Contact")} 
      />
    </NavbarMenuLayout>
  );
}
 
export default NavbarMenu;
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarLayout from "../layouts/NavbarLayout";
import NavbarNavLayout from "../layouts/NavbarNavLayout";
import NavbarNavItem from "./NavbarNavItem";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
      <NavbarLayout>
        <div className="w-64 -ml-12">
          <img 
            src={Logo} 
            alt="logo..." 
          />
        </div>
        <NavbarNavLayout>
          <NavbarNavItem 
            key={"Home"} 
            label="Home" 
            active={ "Home" === active }
            handleActive={() => setActive("Home")} 
          />
          <NavbarNavItem 
            key={"About"} 
            label="About" 
            active={ "About" === active }
            handleActive={() => setActive("About")} 
          />
          <NavbarNavItem 
            key={"Skills"} 
            label="Skills" 
            active={ "Skills" === active }
            handleActive={() => setActive("Skills")} 
          />
          <NavbarNavItem 
            key={"Work"} 
            label="Work" 
            active={ "Work" === active }
            handleActive={() => setActive("Work")} 
          />
          <NavbarNavItem 
            key={"Contact"} 
            label="Contact" 
            active={ "Contact" === active }
            handleActive={() => setActive("Contact")} 
          />
        </NavbarNavLayout>
        {/* this is the hamburger it's either hidden|flex */}
        <div
          onClick={() => setMenu(true)} 
          className="px-3 md:hidden h-full flex items-center hover:cursor-pointer">
          <span className="pointer-events-none">
            <GiHamburgerMenu size={"24px"}/>
          </span>
        </div>
        {/* this is the hamburger it's either hidden|flex */}
      </NavbarLayout>
      <AnimatePresence>
        {
          menu
          &&
          <NavbarMenu
            active={active}
            handleActive={(label) => setActive(label)}
            closeMenu={() => setMenu(false)} 
          />
        }
      </AnimatePresence>
    </>    
  );
}
 
export default Navbar;
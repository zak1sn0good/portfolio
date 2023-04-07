import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className="z-10 fixed bottom-0 md:bottom-auto md:left-0 right-1/2 md:right-auto md:top-1/2 flex md:flex-col translate-x-1/2 md:translate-x-0 md:-translate-y-1/2">
      <a href="https://www.facebook.com/profile.php?id=100013151741216" className="px-4 py-4 flex items-center justify-between space-x-2 bg-blue-600 text-white md:text-xl hover:cursor-pointer hover:bg-blue-700 hover:scale-110 transition-all duration-200">
        <FaFacebookF/>
      </a>
      <a href="https://www.instagram.com/zakisnogood1/" className="px-4 py-4 flex items-center justify-between space-x-2 bg-pink-700 text-white md:text-xl hover:cursor-pointer hover:bg-pink-800 hover:scale-110 transition-all duration-200">
        <BsInstagram/>
      </a>
      <a href="https://github.com/zak1sn0good" className="px-4 py-4 flex items-center justify-between space-x-2 bg-gray-800 text-white md:text-xl hover:cursor-pointer hover:bg-gray-900 hover:scale-110 transition-all duration-200">
        <AiFillGithub/>
      </a>
      <a href="https://www.linkedin.com/in/zakaria-ancer-b29754236/" className="px-4 py-4 flex items-center justify-between space-x-2 bg-blue-400 text-white md:text-xl hover:cursor-pointer hover:bg-blue-500 hover:scale-110 transition-all duration-200">
        <AiFillLinkedin/>
      </a>
    </div>
  );
}
 
export default SocialLinks;
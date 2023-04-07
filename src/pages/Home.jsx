import HomeLayout from "../layouts/HomeLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import pdfFile from "../assets/Zakaria's Resume.pdf";

const Home = () => {
  return (
    <HomeLayout>
      <p className="my-2 text-pink-700 font-light">Hi, my name is</p>
      <p className="my-2 text-4xl md:text-5xl lg:text-7xl font-bold">ANSER ZAKARIA</p>
      <p className="my-2 text-4xl md:text-5xl lg:text-7xl font-bold text-gray-400">I'm a fullstack developper.</p>
      <p className="my-2 text-lg font-light">
        i'm a fullstack web developper looking to build exceptional digital experiences.
        <br />currenty, i'm focused on building fullstack responsive web applications.
      </p>
      <a
        href={pdfFile}
        download={"ANSER ZAKARIA"} 
        className="w-fit group my-2 px-4 py-2 flex items-center justify-between space-x-2 border-2 border-white rounded-sm hover:border-pink-700">
        <span className="text-xl text-white group-hover:text-pink-700">Download resume</span>
        <span className="group-hover:text-pink-700 transition-colors duration-200">
          <MdOutlineFileDownload size={"18px"}/>
        </span>
      </a>
    </HomeLayout>
  );
}
 
export default Home;
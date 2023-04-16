import HomeLayout from "../layouts/HomeLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import pdfFile from "../assets/Zakaria's Resume.pdf";

const Home = () => {
  return (
    <HomeLayout>
      <p className="my-2 md:text-lg lg:text-xl text-gray-200 font-light">Hi, my name is</p>
      <p className="my-2 text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-800">ANSER ZAKARIA</p>
      <p className="my-2 text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">I'm a fullstack developer.</p>
      <p className="my-2 text-lg font-light">
        i'm a fullstack web developer looking to build exceptional digital experiences.
        <br />currenty, i'm focused on building fullstack responsive web applications.
      </p>
      <a
        href={pdfFile}
        download={"Zakaria's resume"} 
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
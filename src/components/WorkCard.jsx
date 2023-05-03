import { FaEye, FaCode } from "react-icons/fa";

const WorkCard = ({ image, name, repo, demo }) => {

  return (
    <div
      style={{ backgroundImage : `url(${image})` }} 
      className="w-[320px] sm:w-[365px] group shadow-lg shadow-[#040c16] bg-no-repeat bg-cover bg-center h-60 overflow-hidden hover:scale-105 transition-transform duration-200"
    >
        
        <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col px-4 py-4 w-full h-full items-center justify-center bg-blue-500 bg-opacity-60">
          <p className="text-xl text-white font-bold"> {name} </p>
          <div className="w-full flex py-4 flex-col space-y-2 sm:space-y-0 sm:flex-row items-center justify-between">
            <a
              href={demo} 
              className="px-4 py-2 flex items-center justify-between font-medium text-white rounded border-2 border-white hover:bg-pink-700 hover:border-pink-700 hover:shadow-md transition-colors duration-200">
              <FaEye/> <span className="ml-2">Live demo</span>
            </a>
            <a
              href={repo} 
              className="px-4 py-2 flex items-center justify-between font-medium text-white rounded border-2 border-white hover:bg-pink-700 hover:border-pink-700 hover:shadow-md transition-colors duration-200">
              <FaCode/> <span className="ml-2">Source code</span>
            </a>
          </div>
        </div>

    </div>
  );
}
 
export default WorkCard;
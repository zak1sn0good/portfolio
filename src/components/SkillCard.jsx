const SkillCard = ({ image, name }) => {
  return ( 
    <div className="w-fit h-fit bg-[#1b2a3f] shadow-md shadow-[#040c16] py-4 px-10 flex flex-col items-center space-y-3 hover:cursor-pointer hover:scale-110 transition-transform duration-200">
      <img 
        src={image} 
        alt="html logo..."
        className="h-28 w-28" 
      />
      <p className="text-white text-lg">{name}</p>
    </div>
  );
}
 
export default SkillCard;
import AboutLayout from "../layouts/AboutLayout";
import myImg from "../assets/me.jpg";

const About = () => {
  return (
    <AboutLayout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-24">
        <div className="flex flex-col space-y-10 items-start">
          <div className="flex flex-col space-y-2">
            <h2 className="text-white text-3xl font-semibold">About</h2>
            <div className="w-full bg-pink-700 h-[2px]"/>
          </div>
          <p className="text-4xl md:text-4xl font-bold text-white">
            Hi. i'm Zakaria nice to meet you have a nice look around!
          </p>
          <img 
            src={myImg} 
            alt="profile..."
            className="mx-auto w-[275px] h-[350px] rounded lg:hidden" 
          />
          <p className="font-light">
            i am passionate about building excellent software that improves the lives
            of those around me. I specialize in creating software for clients ranging from
            individuals and small-buisinesses all the way to large enterprise corporations.
            What would you do if you had such software expert in the fingertips of your hand ? 
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <img 
            src={myImg} 
            alt="profile..."
            className="w-[350px] h-[450px] rounded hidden lg:block" 
          />
        </div>
      </div>
    </AboutLayout>
  );
}
 
export default About;
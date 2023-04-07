import htmlImg from "../assets/html.png";
import githubImg from "../assets/github.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import mongoImg from "../assets/mongo.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.png";
import twImg from "../assets/tailwind.png";
import fbImg from "../assets/firebase.png";
import tsImage from "../assets/ts-thumbnail.png";
import pythonImg from "../assets/python-logo.png";
import vueImg from "../assets/vue-logo.png";
import flaskImg from "../assets/flask-logo-png-transparent.png";
import SkillCard from "../components/SkillCard";
import SkillsLayout from "../layouts/SkillsLayout";

const Skills = () => {
  return (
    <SkillsLayout>
      <div className="flex flex-col space-y-2">
        <h2 className="text-white text-3xl font-semibold">Skills</h2>
        <div className="w-full bg-pink-700 h-[2px]"/>
      </div>
      <p className="my-2 italic font-light text-lg">these are thechnologies i've worked with!</p>
      <div className="mx-auto min-w-fit mt-6 mb-2 px-2 flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        <SkillCard key={"HTML"} name={"HTML"} image={htmlImg} />
        <SkillCard key={"CSS"} name={"CSS"} image={cssImg} />
        <SkillCard key={"TW"} name={"tailwind CSS"} image={twImg} />
        <SkillCard key={"JS"} name={"JavaScript"} image={jsImg} />
        <SkillCard key={"PY"} name={"Python"} image={pythonImg} />
        <SkillCard key={"TS"} name={"Typescript"} image={tsImage}/>
        <SkillCard key={"RJS"} name={"ReactJs"} image={reactImg} />
        <SkillCard key={"NJS"} name={"NodeJS"} image={nodeImg} />
        <SkillCard key={"M"} name={"mongoDB"} image={mongoImg} />
        <SkillCard key={"F"} name={"firebase"} image={fbImg} />
        <SkillCard key={"G"} name={"Github"} image={githubImg} />
        <SkillCard key={"VUE"} name={"Vue"} image={vueImg}/>
        <SkillCard key={"F"} name={"Flask"} image={flaskImg}/>
      </div>
    </SkillsLayout>
  );
}
 
export default Skills;
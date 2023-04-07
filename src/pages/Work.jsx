import WorkLayout from "../layouts/WorkLayout";
import WorkCard from "../components/WorkCard";
import { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";
import { Grid } from "@agney/react-loading";


const Work = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(false);
    setLoading(true);
    setProjects([]);
    setTimeout(() => {
      fetch('https://portfolio-backend-9gmv.onrender.com/projects', { method : 'GET' })
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
        else {
          throw new Error('failed to fetch data from server!');
        }
      })
      .then((response) => {
        setLoading(false);
        setProjects(response.projects);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
    }, 2000)
  }, []);

  return (
    <WorkLayout>
      <div className="flex flex-col space-y-2">
        <h2 className="text-white text-3xl font-semibold">Work</h2>
        <div className="w-full bg-pink-700 h-[2px]"/>
      </div>
      <p className="my-2 italic font-light text-lg">Check out some of my recent work!</p>
      {
        loading
        &&
        <div className="mx-auto min-w-fit mt-14 mb-14 flex flex-col items-center">
          <Grid width="96px" />
        </div>
      }
      {
        error
        &&
        <div
          className="mx-auto min-w-fit mt-14 mb-14 flex flex-col items-center">
          <div className="flex items-center space-x-4 text-white font-medium bg-red-700 px-8 py-6 rounded shadow-[#040c16]">
            <IoIosWarning size={"24px"} />
            <p>
              {error}
            </p>
          </div>
        </div>
      }
      {
        projects
        &&
        <div className="mx-auto min-w-fit mt-6 mb-14 flex flex-col items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {
            projects.map((project) => (
              <WorkCard 
                key={project._id}
                name={project.name}
                image={project.image}
                repo={project.codeRepo}
                demo={project.liveDemo}
              />
            ))
          }
        </div>
      }
    </WorkLayout>
  );
}
 
export default Work;
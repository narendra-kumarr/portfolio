import React from "react";
import proj from "../../public/image/project1.png";
import project2 from "../../public/image/project2.png";
import project3 from "../../public/image/project3.png";
import projject4 from "../../public/image/project4.png";

function Portfolio() {
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        {/* first project */}
        <div className="flex flex-col md:flex-row">
            <div>
          <img
            className="md:w-[600px] md:h-[300px] ml-11 mt-5"
            src={proj}
            alt=""
          />
          <button className="rounded-md px-4 py-2 bg-green-500 hover:bg-green-400 mt-5 font-bold ml-[300px] ">
            Source Code
          </button>
          </div>

        {/* second project */}
        <div>
        <img
            className="md:w-[600px] md:h-[300px] ml-11 mt-5"
            src={project2}
            alt=""
          />
          <button className="rounded-md px-4 py-2 bg-green-500 hover:bg-green-400 mt-5 font-bold ml-[300px] ">
            Source Code
          </button>
          </div>

        </div>
        {/* third project */}
        <div className="flex flex-col md:flex-row">
            <div>
          <img
            className="md:w-[600px] md:h-[300px] ml-11 mt-5"
            src={project3}
            alt=""
          />
          <button className="rounded-md px-4 py-2 bg-green-500 hover:bg-green-400 mt-5 font-bold ml-[300px] ">
            Source Code
          </button>
          </div>

        {/* Fourthproject */}
        <div>
        <img
            className="md:w-[600px] md:h-[300px] ml-11 mt-5"
            src={projject4}
            alt=""
          />
          <button className="rounded-md px-4 py-2 bg-green-500 hover:bg-green-400 mt-5 font-bold ml-[300px] ">
            Source Code
          </button>
          </div>

        </div>


      </div>
    </div>
  );
}

export default Portfolio;

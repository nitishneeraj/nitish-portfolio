import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescript.png";
import Redux from "../assets/projects/tech/redux.png";
import ciCd from "../assets/CI-CD.png";
import tailwind from "../assets/tailwind.png";
import linux from "../assets/linux.png";
import gitlab from "../assets/gitlab.png";
import postgresql from "../assets/postgreSQL.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.jpg";
import bootstrap from "../assets/bootstrap.png";
import expressjs from "../assets/expressjs.png";
import jquery from "../assets/jquery.png";
import htmlCss from "../assets/html-css.png";

const Skills = () => {
  return (
    <div
      id="skills"
      name="skills"
      className="w-full  md:h-screen xs:pt-20 sm:pt-10 bg-[#030519] text-gray-300"
    >
      {/* Container Box with skills */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Node}
              alt="NODE JS icon"
            />
            <p className="my-4 skills-card-name">NODE JS</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 h-20 mx-auto object-contain"
              src={nextjs}
              alt="Next.js icon"
            />
            <p className="my-4 skills-card-name">Next.js</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4 skills-card-name">JAVASCRIPT</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={ReactImg}
              alt="REACT JS icon"
            />
            <p className="my-4 skills-card-name">REACT</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Typescript}
              className="skills-card-img w-20 mx-auto"
              alt="TYPESCRIPT icon"
            />

            <p className="my-4 skills-card-name">TYPESCRIPT</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Redux}
              alt="REDUX icon"
            />
            <p className="my-4 skills-card-name">REDUX</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 h-20 mx-auto object-contain"
              src={expressjs}
              alt="Express.js icon"
            />
            <p className="my-4 skills-card-name">Express.js</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={GitHub}
              alt="GITHUB icon"
            />
            <p className="my-4 skills-card-name">GITHUB</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={gitlab}
              alt="GitLab icon"
            />
            <p className="my-4 skills-card-name">GitLab</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={ciCd}
              alt="CI/CD icon"
            />
            <p className="my-4 skills-card-name">CI/CD</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={tailwind}
              alt="Tailwind CSS icon"
            />
            <p className="my-4 skills-card-name">Tailwind</p>
          </div>
          {/* <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 h-20 mx-auto object-contain"
              src={jquery}
              alt="jQuery icon"
            />
            <p className="my-4 skills-card-name">jQuery</p>
          </div> */}

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={linux}
              alt="Linux icon"
            />
            <p className="my-4 skills-card-name">Linux</p>
          </div>

          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={postgresql}
              alt="PostgreSQL icon"
            />
            <p className="my-4 skills-card-name">PostgreSQL</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={Mongo}
              alt="MONGO DB icon"
            />
            <p className="my-4 skills-card-name">MONGO DB</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="w-24 h-24 flex items-center justify-center mx-auto">
              <img
                className="max-w-full max-h-full object-contain"
                src={mysql}
                alt="MySQL icon"
              />
            </div>
            <p className="my-4 skills-card-name">MySQL</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4 skills-card-name">HTML</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 mx-auto"
              src={CSS}
              alt="CSS icon"
            />
            <p className="my-4 skills-card-name">CSS</p>
          </div>
          <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 h-20 mx-auto object-contain"
              src={bootstrap}
              alt="Bootstrap icon"
            />
            <p className="my-4 skills-card-name">Bootstrap</p>
          </div>

          {/* <div className="skills-card shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="skills-card-img w-20 h-20 mx-auto object-contain"
              src={htmlCss}
              alt="HTML & CSS icon"
            />
            <p className="my-4 skills-card-name">
              HTML, CSS, Bootstrap & jQuery
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

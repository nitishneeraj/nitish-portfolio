import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experienceData } from "../data/data";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ job }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "17px solid #232631" }}
      iconStyle={{ background: job.iconBg }}
      date={job.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={job.image}
            alt={job.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{job.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {job.company}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {job.work.map((point, index) => (
          <li
            key={index}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="max-w-[1000px] mx-auto p-4 w-full bg-[#030519] text-gray-300"
    >
      <p className="text-4xl font-bold inline border-b-4 border-pink-600">
        Experience
      </p>

      <div className="mt-10">
        <VerticalTimeline>
          {experienceData.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

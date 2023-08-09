import React from 'react';
import SectionBadge from './SectionBadge';
import { IoGridOutline } from 'react-icons/io5';
import { projects } from '../constants';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <div className="pt-[50px] pb-[90px]">
      <SectionBadge title={'Personal Projects'} icon={<IoGridOutline />} />
      <SectionTitle title={'Featured'} decorate={'Projects'} />

      {projects.map((project, index) => (
        <div key={index} data-aos="fade-up" data-aos-duration="1000">
          <div className="relative">
            <img
              src={project.image}
              alt=""
              className="h-[300px] lg:h-[500px] w-full object-cover object-left-top rounded-xl z-0 mt-20"
            />
            <div className="absolute top-2 right-2 flex">
              <span className="bg-gray-900 hover:bg-primary hover:text-black px-5 py-2 mx-1 text-sm font-semibold rounded-full ">
                <a href={project.demo} rel="noreferrer" target="_blank">
                  Live Demo
                </a>
              </span>
              <span className="bg-gray-900 hover:bg-primary hover:text-black px-5 py-2 mx-1 text-sm font-semibold rounded-full ">
                <a href={project.clientRepo} rel="noreferrer" target="_blank">
                  Client
                </a>
              </span>
              <span className="bg-gray-900 hover:bg-primary hover:text-black px-5 py-2 mx-1 text-sm font-semibold rounded-full ">
                <a href={project.serverRepo} rel="noreferrer" target="_blank">
                  Server
                </a>
              </span>
            </div>
            <div className="absolute bottom-3 left-2 ">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-900  hover:bg-gray-200 hover:text-black  px-3 py-1 mx-1 my-0.5 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-2xl font-subtitle text-center hover:underline">{project.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;

import React from 'react';
import SectionBadge from './SectionBadge';
import { LiaBriefcaseSolid } from 'react-icons/lia';
import SectionTitle from './SectionTitle';
import { experiences, projects } from '../constants';

const Experience = () => {
  return (
    <div className="pt-[50px] pb-[90px]">
      <SectionBadge title={'Experiences'} icon={<LiaBriefcaseSolid />} />
      <SectionTitle title={'Education &'} decorated={'Experiences'} />
      <div>
        <ol className="border-l border-secondary">
          {experiences.map((experience) => (
            <li key={experience.id} className="group" data-aos="fade-left" data-aos-duration="1000">
              <div className=" flex">
                <div className="-ml-[6px] h-[12px] w-[12px] rounded-full bg-secondary group-hover:bg-primary"></div>

                <p className="text-secondary mb-3 -mt-1.5 ml-[52px] group-hover:text-primary">{experience.date}</p>
              </div>

              <div className="ml-14 mb-12 mt-2">
                <h4 className="mb-1.5 section-subtitle">{experience.title}</h4>
                <p className="mb-3 text-secondary">{experience.company_name}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;

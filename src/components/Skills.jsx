import React from 'react';
import SectionBadge from './SectionBadge';
import { LiaShapesSolid } from 'react-icons/lia';
import { skills } from '../constants';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <div className="pt-[50px] pb-[90px]">
      <SectionBadge title={'Skills'} icon={<LiaShapesSolid />} />
      <div>
        <SectionTitle title={'My'} decorated={'Advantages'} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center border rounded-full py-10"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src={skill.icon} alt="skill" className="h-[100px] lg:h-[100px] w-auto my-6" />
              <p className="text-primary text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

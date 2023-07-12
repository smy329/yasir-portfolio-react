import React from 'react';
import SectionBadge from './SectionBadge';
import { LiaUserSolid } from 'react-icons/lia';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <div className="pt-[50px] pb-[90px]">
      <SectionBadge title={'About'} icon={<LiaUserSolid />} />
      <div>
        <SectionTitle title="Great coders are not born." decorated="They are compiled." />
        <p
          className="text-secondary leading-[30px] tracking-wide text-lg w-full lg:w-5/6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          After completing my graduation in CSE in 2019, I I started my own business as the CEO of my startup. Despite
          my strong determination and tireless efforts, the venture unfortunately did not meet the desired success.
          However, in this difficult situation, I didn't let this setback discourage me. <br />
          <br /> I made a conscious decision to take a step back and realign my skills. From January 2023 to June 2023,
          I dedicated myself to resharp my coding abilities as a MERN stack developer. Despite the challenges posed by a
          three-year gap from coding, I quickly regained my abilities and became a proficient professional in the field.{' '}
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import SectionBadge from './SectionBadge';
import { PiGraduationCap } from 'react-icons/pi';

const Education = () => {
  return (
    <div className="pt-[90px] pb-[90px]">
      <SectionBadge title={'Education'} icon={<PiGraduationCap />} />
    </div>
  );
};

export default Education;

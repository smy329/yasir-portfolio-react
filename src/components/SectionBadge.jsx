import React from 'react';

const SectionBadge = ({ title, icon }) => {
  console.log(icon);
  return (
    <div className="mb-[53px] w-fit" data-aos="fade-up" data-aos-duration="500">
      <div className="flex items-center px-5 py-2 border rounded-full border-secondary ">
        <div className="text-base mr-3">{icon} </div>
        <div className="uppercase text-xs"> {title}</div>
      </div>
    </div>
  );
};

export default SectionBadge;

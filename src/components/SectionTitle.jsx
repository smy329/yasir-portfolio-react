import React from 'react';

const SectionTitle = ({ title, decorated }) => {
  return (
    <div className="text-[48px] leading-[60px] mb-[43px]" data-aos="fade-up" data-aos-duration="1000">
      {title}&nbsp;<span className="text-primary">{decorated}</span>
    </div>
  );
};

export default SectionTitle;

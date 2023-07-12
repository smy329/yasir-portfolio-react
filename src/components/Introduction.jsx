import { LiaHomeSolid } from 'react-icons/lia';
import SectionBadge from './SectionBadge';

const Introduction = () => {
  return (
    <div className="pt-[50px] pb-[90px]" data-aos="fade-in">
      <SectionBadge title={'Introduce'} icon={<LiaHomeSolid />} />

      <div>
        <div>
          <p className="text-[40px] lg:text-[70px] leading-[60px] lg:leading-[90px] mb-[43px]">
            Say Hi from <span className="text-primary">Yasir</span>, Full Stack Developer (MERN)
          </p>

          <p className="text-secondary tracking-wide text-lg">
            I craft clean codes beautifully and I love what I do. Just simple like that!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

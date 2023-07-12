import { LiaBriefcaseSolid, LiaEnvelopeSolid, LiaHomeSolid, LiaShapesSolid, LiaUserSolid } from 'react-icons/lia';
import { IoGridOutline } from 'react-icons/io5';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
// import { PiGraduationCap } from 'react-icons/pi';

const Navbar = ({
  scrollToIntroduce,
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToExperiences,
  // scrollToEducation,
  scrollToContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:block top-1/2 transform -translate-y-1/2 translate-x-full fixed bg-black">
        <div className="text-xl text-secondary border border-secondary rounded-full space-y-5 px-5 py-8">
          <div id="introduce" className="hover:text-primary cursor-pointer">
            <a onClick={scrollToIntroduce}>
              <LiaHomeSolid />
            </a>
          </div>
          <div id="about" className="hover:text-primary cursor-pointer">
            <a onClick={scrollToAbout}>
              <LiaUserSolid />
            </a>
          </div>
          <div id="skills" className="hover:text-primary cursor-pointer">
            <a onClick={scrollToSkills}>
              <LiaShapesSolid />
            </a>
          </div>
          <div id="projects" className="hover:text-primary cursor-pointer">
            <a onClick={scrollToProjects}>
              <IoGridOutline />
            </a>
          </div>
          <div id="experiences" className="hover:text-primary cursor-pointer">
            <a onClick={scrollToExperiences}>
              <LiaBriefcaseSolid />
            </a>
          </div>
          {/* <div id="education" className="hover:text-primary cursor-pointer">
          <a onClick={scrollToEducation}>
            <PiGraduationCap />
          </a>
        </div> */}
          <div id="contact" className="hover:text-primary cursor-pointer">
            <a onClick={scrollToContact}>
              <LiaEnvelopeSolid />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation  */}
      <div className="md:hidden ">
        <div
          id="nav icon"
          className="text-2xl fixed top-6 right-8"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HiBars3 />
        </div>
        {isOpen && (
          <div className="fixed top-0 right-0 bg-black opacity-90">
            <div>
              <div
                className="absolute top-6 right-8 text-2xl"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <IoCloseCircleSharp />
              </div>
              <ol className="mt-12 pr-16 px-14 py-7 text-primary text-lg leading-[40px] tracking-wide">
                <div id="introduce" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToIntroduce}>Introduce</a>
                </div>
                <div id="about" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToAbout}>About</a>
                </div>
                <div id="skills" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToSkills}>Skills</a>
                </div>
                <div id="projects" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToProjects}>Projects</a>
                </div>
                <div id="experiences" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToExperiences}>Experiences</a>
                </div>
                {/* <div id="education" className="hover:text-primary cursor-pointer">
          <a onClick={scrollToEducation}>
            <PiGraduationCap />
          </a>
        </div> */}
                <div id="contact" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToContact}>Contact</a>
                </div>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

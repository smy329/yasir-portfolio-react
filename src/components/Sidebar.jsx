import { useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';
import { LiaEnvelopeSolid } from 'react-icons/lia';
const Sidebar = () => {
  const animatedText = '- Syed Mohammad Yasir - Full Stack Developer';
  const characters = [...animatedText];
  console.log(characters);
  return (
    <div className="">
      <div className="border border-secondary rounded-2xl flex flex-col w-full lg:w-fit justify-center items-center lg:top-1/2 lg:transform lg:-translate-y-1/2 p-5 lg:p-3 lg:fixed bg-black">
        <div className="circle relative w-[220px] h-[220px] rounded-full flex justify-center items-center mt-5 mb-12">
          <div
            className={`logo absolute w-40 h-40 rounded-full bg-[url('../src/assets/images/yasir.jpeg')] bg-cover bg-center`}
          ></div>
          <div className="circularText absolute w-full h-full ">
            <p>
              {characters.map((char, index) => (
                <span key={index} style={{ transform: `rotate(${index * 8}deg)` }}>
                  {char}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-2xl mb-2 text-center">
            syed.mohammad.yasir329
            <br />
            @gmail.com
          </p>
          <p className="text-2xl mb-7 text-center">Chittagong, Bangladesh</p>
          <p className="text-sm mb-6 text-center text-secondary">© 2022 Yasir. All Rights Reserved</p>
        </div>
        <div className="flex gap-2 mb-7">
          <a href="https://www.linkedin.com/in/syedmohammadyasir/" target="_blank" rel="noreferrer">
            <div className="p-3 border-2 border-secondary hover:border-primary rounded-full text-xl text-secondary hover:text-primary cursor-pointer">
              <FaLinkedin />
            </div>
          </a>

          <a href="https://github.com/smy329" target="_blank" rel="noreferrer">
            <div className="p-3 border-2 border-secondary rounded-full text-xl text-secondary hover:text-primary hover:border-primary cursor-pointer">
              <FaGithub />
            </div>
          </a>
          <a href="https://stackoverflow.com/users/8733282/syed-mohammad-yasir" target="_blank" rel="noreferrer">
            <div className="p-3 border-2 border-secondary rounded-full text-xl text-secondary hover:text-primary hover:border-primary cursor-pointer">
              <FaStackOverflow />
            </div>
          </a>
          <a href="https://www.facebook.com/cyasir" target="_blank" rel="noreferrer">
            <div className="p-3 border-2 border-secondary rounded-full text-xl text-secondary hover:text-primary hover:border-primary cursor-pointer">
              <FaFacebookF />
            </div>
          </a>
        </div>

        <div className="w-full flex justify-center mb-7 ">
          <a
            href="https://drive.google.com/file/d/15p3o56qlNoxjFYkJUsqPCTFR8MvWBV0X/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-center "
          >
            <button className="bg-primary hover:bg-black border border-primary w-5/6 p-3 rounded-full text-black hover:text-primary">
              <div className="flex gap-4 items-center justify-center ">
                <div className="text-3xl">
                  <LiaEnvelopeSolid />
                </div>
                <p className="">HIRE ME !</p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

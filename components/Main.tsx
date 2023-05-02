import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
function Main() {
  return (
    <div id="home" className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[1240px] w-full mx-auto p-2">
        <div className="text-center">
          <p className="uppercase text-sm tracking-wider text-gray-600">
            Let&apos;s create something exceptional together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;am <span className="text-[#2294D6]">Ethamne</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A <span className="text-[#2294D6]"> Creative </span>
            Frontend Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I have experience collaborating with teams and creating solutions
            that meet clients&apos; needs. Whether you&apos;re a client or a
            potential employer, I&apos;d love to chat and see how I can help
            achieve your goals. Let&apos;s connect!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:scale-110 ease-in duration-300">
              <FaLinkedinIn size={24} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub size={24} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={24} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

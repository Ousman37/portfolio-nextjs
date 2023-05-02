import React from 'react';

import Image from 'next/image';
import courseImg from '../public/assets/projects/course.png';
import { RiRadioButtonFill } from 'react-icons/ri';

const course = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[30vh] bg-black bg-opacity-75 z-10">
          <Image
            src={courseImg}
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-[#2294D6]">
            <h2 className="py-2">Cross course project</h2>
            <h3 className="pb-2 text-lg">HTML | CSS | JavaScript</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-80">
          <div className="col-span-4">
            <p className="text-2xl font-bold text-gray-800">Project</p>
            <h1 className="text-4xl font-bold text-gray-800">Overview</h1>

            <p className="pt-4 text-lg text-gray-700">
              During my first year at Noroff Front-End Development course, I
              completed an E-commerce project in multiple stages. The project
              underwent several changes, starting with a basic HTML and CSS
              website and later incorporating additional features, such as a
              shopping cart using JavaScript. In the final stage, I integrated a
              WordPress API, which I called with JavaScript to complete the
              project.
            </p>
            <button
              className="px-8 py-2 mt-4 mr-8"
              onClick={() =>
                openLink(
                  'https://storied-buttercream-0462b1.netlify.app/index.html'
                )
              }
            >
              Demo
            </button>
            <button
              className="px-8 py-2 mt-4"
              onClick={() =>
                openLink('https://github.com/your-github-repo-url')
              }
            >
              Code
            </button>
          </div>

          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Html
                </p>

                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="text-blue-500 underline font-bold font-serif col-span-2 md:col-span-3">
            <span
              className="text-blue-500 underline font-bold font-serif"
              onClick={() => openLink('/#projects')}
            >
              Back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default course;

import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-wide text-[#2294D6]">
            About <span className="text-[#2294D6] font-bold">Me</span>{' '}
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            As a web developer with a background in UI/UX design, I bring a
            unique perspective to the table when it comes to creating visually
            appealing and user-friendly interfaces. With strong skills in HTML5,
            CSS3, and JavaScript, I am a disciplined, hardworking, and motivated
            Front-End Development student at Noroff School of Technology and
            Digital Media.
          </p>
          <p className="py-2 text-gray-600">
            My exceptional organizational, time management, and multitasking
            skills make me a valuable team player who is always eager to learn
            and improve. In addition to my technical abilities, my communication
            skills, supportive attitude, and problem-solving abilities are also
            my strengths. Fluent in English and with intermediate proficiency in
            Norwegian, I am expected to complete my Front-End Developer program
            in September 2023 at Noroff School of Technology and Digital Media.
          </p>
          <p className="py-2 text-gray-600">
            Outside of work, I am passionate about coding, music, yoga, and
            fitness. I am actively seeking opportunities to utilize my skills
            and contribute to the growth of the industry.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects to get a sense of my work.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/projects/ousman2.png"
            alt="Description of the image"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

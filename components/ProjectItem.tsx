import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type ProjectItemProps = {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  description: string;
};

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  description,
}: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl py-4 group hover:bg-gradient-to-r from-[#2294D6] to-[#2294D6] text-center">
      <Image
        className="rounded-xl group-hover:opacity-10 object-fit-cover"
        src={backgroundImg}
        alt={title}
        style={{ width: '300px', height: '300px' }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
        <div className="w-40 mx-auto">
          <Link href={projectUrl}>
            <p className="py-2 px-4 bg-white rounded-lg text-gray-700 font-bold text-lg">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

// import React from 'react';
// import hikingImg from '../public/assets/projects/semester.png';
// import Projectitem from './ProjectItem';
// import blogImg from '../public/assets/projects/blog.png';
// import courseImg from '../public/assets/projects/course.png';
// import miniprojectImg from '../public/assets/projects/project.png';

// const Projects = () => {
//   return (
//     <div id="projects" className="w-full">
//       <div className="max-w-[1240px] mx-auto px-2 py-16">
//         <p className="text-xl tracking-widest uppercase text-[#2294D6]">
//           Projects
//         </p>
//         <h2 className="py-4">What I&apos;ve been building</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <Projectitem
//             title="Semester Project: Adventure Trails Hikes"
//             backgroundImg={hikingImg}
//             projectUrl="/hiking"
//             description="For my first semester project in the Noroff Front-End Development program, I designed and developed a website for Adventure Trails Hikes, a new business that offers extreme hiking experiences in multiple countries. The main objective of the project was to create an informative and engaging website that would attract potential customers and showcase the available hiking options."
//           />
//           <Projectitem
//             title="Exam Blog Website Project"
//             backgroundImg={blogImg}
//             projectUrl="/blog"
//             description="As part of my first year in the Noroff Front-End Development course, I designed and developed a blog website for the project. The objective was to put into practice the skills acquired throughout the year and to have the creative freedom to choose both the design and content of the blog."
//           />
//           <Projectitem
//             title="E-commerce Store"
//             backgroundImg={courseImg}
//             projectUrl="/course"
//             description="During my first year at Noroff Front-End Development course, I completed an E-commerce project in multiple stages. The project underwent several changes, starting with a basic HTML and CSS website and later incorporating additional features, such as a shopping cart using JavaScript. In the final stage, I integrated a WordPress API, which I called with JavaScript to complete the project."
//           />
//           <Projectitem
//             title="My Travel Web Design & Development Mini Project"
//             backgroundImg={miniprojectImg}
//             projectUrl="/mini"
//             description="In my free time, I love to work on mini projects that allow me to hone my design skills. For this project, I created a website for a travel agent, focusing on both the design and development aspects of the site. I'm proud of what I accomplished, and I'm always looking for new challenges to help me grow as a designer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import hikingImg from '../public/assets/projects/semester.png';
import Projectitem from './ProjectItem';
import blogImg from '../public/assets/projects/blog.png';
import courseImg from '../public/assets/projects/course.png';
import miniprojectImg from '../public/assets/projects/project.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#2294D6]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve been building</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Projectitem
            title='Semester Project: Adventure Trails Hikes'
            backgroundImg={hikingImg}
            projectUrl='/hiking'
            description={''}
          />
          <Projectitem
            title='Exam Blog Website Project'
            backgroundImg={blogImg}
            projectUrl='/blog'
            description={''}
          />
          <Projectitem
            title='E-commerce Store'
            backgroundImg={courseImg}
            projectUrl='/course'
            description={''}
          />
          <Projectitem
            title='My Travel Web Design & Development Mini Project'
            backgroundImg={miniprojectImg}
            projectUrl='/mini'
            description={''}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

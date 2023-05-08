import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/hiking' ||
      router.asPath === '/blog' ||
      router.asPath === '/course' ||
      router.asPath === '/mini'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handlerNav = () => {
    setNav(!nav);
  };

  const handlerShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`fixed w-full h-30 ${
        shadow ? 'shadow-xl' : 'no-shadow'
      } z-[100]`}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image src='/navLogo1.png' alt='' width={125} height={10} />
        </Link>

        <div>
          {/* ul list */}
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'> Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'> About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/#contact '>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          {/* mobile menu Open  */}
          <div onClick={handlerNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* mobile menu Close  */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[70%] sm:-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/navLogo1.png' alt='' width={87} height={35} />

              <div
                onClick={handlerNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%]md:w-[90%] py-4'>
                Helping businesses achieve their goals through exceptional
                design.
              </p>
            </div>
          </div>
          {/* ul Links  */}
          <div className='py-4 flex flex-col'>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='ml-10 text-sm uppercase  hover:border-b'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='ml-10 text-sm uppercase  hover:border-b'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='ml-10 text-sm uppercase  hover:border-b'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='ml-10 text-sm uppercase  hover:border-b'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li
                  onClick={() => setNav}
                  className='ml-10 text-sm uppercase  hover:border-b'>
                  Contact
                </li>
              </Link>
            </ul>
            {/** Social media icons   */}
            <div className='pt-40'>
              <p className='uppercase tracking-wider text-[#2294D6]'>
                Get in Touch
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedin size={24} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub size={24} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail size={24} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

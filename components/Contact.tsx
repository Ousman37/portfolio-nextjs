import React from 'react';
import Image from 'next/image';
import courseImg from '../public/assets/contact.jpg';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2294D6]">
          Contact
        </p>
        <h2 className="py-4">Let&apos;s Work Together</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Lets */}
          <div className="col-span-3 lg:col-span-2 w-full h-full p-4 shadow-xl rounded-xl">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={courseImg}
                  alt="Contact Image"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h2 className="py-2">Ethamne</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  Whether you&apos;re a client looking to bring your ideas to
                  life or an employer seeking a dedicated team member, I am
                  available for freelance or full-time positions. Let&apos;s
                  connect and discuss how we can work together to achieve your
                  goals.
                </p>
              </div>
              <div>
                {/* Connect */}
                <p className="uppercase pt-8 text-[#2294D6]">Connect with Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-4 hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn size={24} />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-4 hover:scale-110 ease-in duration-300">
                      <FaGithub size={24} />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-4 hover:scale-110 ease-in duration-300">
                      <AiOutlineMail size={24} />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className="uppercase text-sm py-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      id="name"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    id="name"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    id="name"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="text focus:border-red-500 border-1 rounded-lg p-3 focus:border-transparent"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={10}
                    required
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  {' '}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#2294D6]"
                size={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

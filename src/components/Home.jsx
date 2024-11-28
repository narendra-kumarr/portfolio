import React from "react";
import picture from "../../public/walpaper.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome to my Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>Hello, I'am a </h1>
              {/* <span className='text-red-700 bold'> Developer</span> */}
              <ReactTyped
                className="text-red-700 bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Enthusiastic and self-motivated frontend developer with a strong
              foundation in HTML, CSS, JavaScript, React and others. Passionate
              about creating responsive and user- friendly web applications.
              Proactive learner with hands-on experience in building real- world
              projects. As a college student with a strong foundation in web
              development, I am equipped with diverse technical skills and a
              desire to continuously learn and grow in this dynamic field.
              Strong communication skills, critical thinking, and a
              collaborative mindset make me an excellent team player ready to
              contribute to innovative projects.
            </p>
            <br />

            {/* Social media icons first section */}

            <div className="flex flex-col items-center md:flex-row space-x-1 justify-between  space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on </h1>

                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100026266403809"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* icons second section */}
              <div className="space-y-2 ">
                <h1 className="font-bold">Currently Working on </h1>

                <div className="flex space-x-5">
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <IoLogoJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <SiBootstrap className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-10 order-1">
            <img
              src={picture}
              className="rounded-full md:w-[400px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;

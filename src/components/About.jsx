import React from "react";

function About() {
  return (
    <>
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p className="text-justify">
        Hello, i'am Narendra, a passionate Web Developer with a keen eye for
        React Developer. With a background in BCA and with excels at turning
        creative ideas into functional digital experiences. Dedicated to
        continuous learning and problem-solving, he combines technical skills
        with an eye for design to deliver high-quality web solutions that meet
        client and user needs.
      </p>
      <br />
      <div>
        <h1 className="text-green-500 font-semibold text-xl">Education</h1>

        {/* Table Start */}

        <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Degree</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                School & University
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Passout Year
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">SEE</td>
              <td className="border border-gray-300 px-4 py-2">
                Shree Janta Secondary High School
              </td>
              <td className="border border-gray-300 px-4 py-2">2074</td>
              <td className="border border-gray-300 px-4 py-2">2.20</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">+2</td>
              <td className="border border-gray-300 px-4 py-2">
                Sagarmatha Secondary Boarding School
              </td>
              <td className="border border-gray-300 px-4 py-2">2076</td>
              <td className="border border-gray-300 px-4 py-2">2.24</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                BCA (Bachelor in Computer Application)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Birat Kshitiz College
              </td>
              <td className="border border-gray-300 px-4 py-2">Running</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
            </tr>
          </tbody>
        </table>

        {/* Table End */}
        <br />
      
      {/* Skills section start */}
        <h1 className="text-green-500 font-semibold text-xl">Skills</h1>
        <ul className="list-disc list-inside  space-y-2 text-justify">
            <li>HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It is the backbone of every website.</li>

            <li>CSS (It is a stylesheet language used to define the visual presentation of a website. It controls how HTML elements are displayed, including layout, colors, fonts, and animations.)</li>

            <li>Javascript  (JS) is a dynamic programming language used to make websites interactive. It enables features like form validation, dynamic content updates, animations, and more.</li>

            <li>Wordpress (It is an open-source Content Management System (CMS) used for building and managing websites. It powers over 40% of all websites on the internet.)</li>
        </ul>
        <br />
        {/* Skill section end */}
        
        {/* Framework start */}
        
        <h1 className="text-green-500 font-semibold text-xl">Frameworks & Library</h1>
        <ul className="list-disc list-inside  space-y-2 text-justify">
            <li>React js (It is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable UI components.)</li>

            <li>Bootstrap (It is a popular open-source CSS framework for creating responsive and mobile-first websites quickly and efficiently)</li>

            <li>Tailwind CSS  (It is a utility-first CSS framework that allows developers to style websites directly in the HTML using predefined classes.)</li>
            
        </ul>
        <br />
                {/* Framework end */}

        <h1 className="text-green-500 font-semibold text-xl">Mission</h1>
        <p className="text-justify">My mission is to leverage my skills and creativity to deliver innovative Web development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</p>
      </div>
    </div>
    <hr />
    </>
  );
}

export default About;

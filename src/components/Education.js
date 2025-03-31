import React from 'react';
import "./education.css"
const educationData = [
  {
    title: "10th [SSC]",
    institute: "Sukhdevanand Vidyalya Bhandegaon, Hingoli",
    year: "2019",
    details: ["Scored 93.60%", "Foundation in mathematics and science"],
  },
  {
    title: "12th [HSC]",
    institute: "Sukhdevanand Junior College Bhandegaon, Hingoli",
    year: "2021",
    details: ["Scored 88.17%", "Focused on PCM and programming basics"],
  },
  {
    title: "First Year (Completed 30 Credits)",
    institute: "MITAOE, Pune",
    year: "2022-23",
    details: [
      "Courses: Programming Fundamentals (C/C++), Data Structures, Web Basics",
      "Coding Platforms: CodeChef (000-1100)",
    ],
  },
  {
    title: "Second Year (Completed 30 Credits)",
    institute: "MITAOE, Pune",
    year: "2023-24",
    details: [
      "Courses: Adv. Data Structures, DBMS, DSGT, Full Stack Dev",
      "Coding Platforms: Codeforces (900-1000), LeetCode, GFG, CodeChef (1200-1300)",
    ],
  },
  {
    title: "B.Tech in Computer Science",
    institute: "MIT Academy of Engineering, Pune",
    year: "2022 - Present",
    details: ["Expected Graduation: 2026", "Strong foundation in CS & project development"],
  },
];

function Education() {
  return (
    <section id="education" className="bg-gray-900 text-gray-100 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 animate-fadeInUp">Education</h2>

      <div
          id="edu"
          className="border-l-4 border-red-500 max-w-4xl mx-auto pl-6 animate-fadeIn"
        >
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 relative group">
              <div className="absolute -left-5 top-1.5 w-5 h-5 bg-red-500 rounded-full border-4 border-gray-900 transition-transform group-hover:scale-125"></div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ml-6">
                <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{edu.institute}</p>
                <span className="text-sm text-red-400 font-medium block mb-2">{edu.year}</span>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


      {/* CERTIFICATIONS */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 animate-fadeInUp">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto animate-fadeIn">
        {[
          { img: "./Images/Certificates/nptelcloud.png", caption: "Cloud Computing --> NPTEL [86/100]" },
          { img: "./Images/Certificates/ccnaCollege.png", caption: "Intro to Networks --> Cisco" },
          { img: "./Images/Certificates/python1st.png", caption: "Programming Essentials in Python" },
          { img: "./Images/Certificates/introtogenai.png", caption: "Fundamentals of GenAI --> Microsoft" },
          { img: "./Images/Certificates/merntech.png", caption: "MERN Stack --> Techsaksham" },
          { img: "./Images/Certificates/apibootcamp.png", caption: "API Bootcamp --> Sponsored by Postman" },
          { img: "./Images/Certificates/filpcartgrid06.jpg", caption: "Flipkart Grid 06 Hackathon" },
          { img: "./Images/Certificates/CloudVirtualInternship.png", caption: "AWS Cloud Virtual Internship" },
          { img: "./Images/Certificates/functionalblog.png", caption: "Super30 Project - Functional Blog" },
        ].map((cert, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={cert.img}
              alt={cert.caption}
              className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-gray-400">{cert.caption}</p>
          </div>
        ))}
      </div>

      {/* BADGES */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 animate-fadeInUp">Badges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto animate-fadeIn">
        {[
          { img: "./Images/Badges/awsfoundationbadge.png", caption: "AWS Cloud Foundation Badge" },
          { img: "./Images/Badges/awsarcbadge.png", caption: "AWS Cloud Architecting Badge" },
          { img: "./Images/Badges/Leetcode50days.png", caption: "Leetcode 50 Problems Badge" },
          { img: "./Images/Badges/leetcode100badge.png", caption: "Leetcode 100 Problems Badge" },
          { img: "./Images/Badges/4apr.gif", caption: "Leetcode Streak - April" },
        ].map((badge, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={badge.img}
              alt={badge.caption}
              className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center mt-4 text-gray-400">{badge.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

import React, { useRef, useState, useEffect } from 'react';

// Experience data array
const experiences = [
  {
    image: './Images/Experience/technodium.png',
    alt: 'Technodium 2025',
    title: 'Technodium Winners 🏆🏆 [Team Attention Seekers]',
    description: "We emerged as winners at Technodium 2025 by presenting our project KrishiBandhu, an AI-powered bilingual platform for farmers. The project stood out for its real-world impact, combining machine learning, cloud integration, and full-stack web development to solve key agricultural challenges.This achievement enhanced my skills in technical presentation, innovation under pressure, and building scalable, user-focused solutions."
  },
  {
    image: './Images/Experience/wce.png',
    alt: 'WCE hackathon',
    title: 'Finalists WCE Hackathon  [Team Apex]',
    description:"(Top 11 out of 500+ Teams) Selected as a finalist in the 24-hour WCE Hackathon conducted by Walchand Sangli. We built an AI-powered system for anomaly detection in time-series data, integrating ML models, statistical techniques, and Gen AI for automated insights, reporting, and real-time querying."
  },
  {
    image: './Images/Experience/technovate.png',
    alt: 'WCE hackathon',
    title: "Talrop's Technovate for India Ideathon",
    description: "Finalists (Top 20 out of 200+ Teams). Presented our agritech Idea/Solution, addressing crop diseases and resource access. Collaborated with Talrop’s CEO Mr. Jones Joseph and industry experts, while enhancing my public speaking, research, and teamwork skills through this enriching experience."
  },
  {
    image: './Images/Experience/Hackron.jpg',
    alt: 'Hackron 2025',
    title: "My First 24 Hrs Hackathon at PVG College of Engineering",
    description:"A geospatial AI-driven tool that dynamically optimizes dark store placement based on real-time demand, KPIs, and service efficiency. Features include interactive mapping, performance-based store selection, and secure admin access control."
  },
  {
    image: './Images/Knoweldege Network.jpg',
    alt: 'Knowledge Network',
    title: 'Part of The Knoweldge Network Club',
    description:"I actively contribute to both technical and non-technical activities, including tech workshops, fun events, and cultural programs. While my main role is tech-focused, I also take part in event planning, coordination, and management tasks, gaining hands-on experience in teamwork, leadership, and multi-tasking across diverse areas"
  },
  {
    image: './Images/Experience/mozilla_me1.jpg',
    alt: 'Mozilla Club',
    title: 'Part of Tech Team of Mozilla Club',
    description:"I actively contribute to organizing and conducting workshops and events focused on industry-relevant skills, especially in AI/ML. I help guide juniors, share technical knowledge, and support collaborative learning through hands-on sessions and mentoring, fostering a strong tech community within the club."
  },
  
  // Add more items here in the same format
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br py-4 from-gray-900 gray-800 to-black text-gray-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        My Experience
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] md:w-[45%] bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <img
                src={exp.image}
                alt={exp.alt}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-100 mb-2 text-center">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-300 text-justify">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

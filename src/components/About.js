import React from 'react';

function About() {
  return (
    <section id="aboutme" className="min-h-screen bg-gradient-to-br py-4 from-gray-900 gray-800 to-black py-16 text-gray-100 px-6 sm:px-8 md:px-12 lg:px-24">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">
        About Me
      </h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            className="rounded-full shadow-lg border-4 border-red-500 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            src="./Images/proffmajorme.jpg"
            alt="Shivshankar"
            style={{ width: '260px', height: '260px', objectFit: 'cover' }}
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-lg leading-relaxed mb-4 animate-fadeInUp delay-200">
            I come from a farming background and managed to pursue my education despite financial challenges. After completing my 12th grade, I took the JEE exam and made it to college, but due to financial constraints, I joined a lower-tier college through the TFWS (Tuition Fee Waiver Scheme).
          </p>
          <p className="text-lg leading-relaxed mb-4 animate-fadeInUp delay-300">
            Starting from my first year, I dived into coding and explored various programming languages and tools. My journey in college has been marked by hard work and dedication, and I’ve gained experience in web development, AI/ML, and problem-solving on platforms like LeetCode, CodeChef, and more. I’ve also worked on several projects using Git, GitHub, and other development tools.
          </p>
          <p className="text-lg leading-relaxed animate-fadeInUp delay-400">
            My goal is to continue growing in technology, using my skills to make a difference and improve my community. My journey shows that with determination and hard work, it's possible to overcome obstacles and achieve success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
import React from 'react';
import "./home.css"

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br py-4 from-gray-900 gray-800 to-black text-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-7 animate-fadeIn">
        {/* Intro Text */}
        <div className="intro text-center md:text-left flex-1">
          <p className="text-xl md:text-2xl font-medium text-gray-400 mb-2 tracking-wide animate-slideInLeft">
            Hello Folks..! 👋
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-slideInLeft">
            I am <span className="text-red-500">Shivshankar Ghyar</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl mb-8 animate-slideInLeft">
            Passionate Programmer | AI/ML Enthusiast | Full-Stack Developer
          </p>
          <div className="flex justify-center md:justify-start animate-slideInLeft">
            <a
              href="./resume.pdf"
              download
              className="inline-block bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              🚀 Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="profile-image flex-shrink-0 md:ml-10 animate-slideInRight">
          <img
            src="./Images/meportfolio.png"
            alt="Shivshankar"
            width="300px"
            className="rounded-full shadow-xl border-4 border-red-500 transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

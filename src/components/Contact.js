import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-gray-100 relative">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">
        Contact Me
      </h2>

      {/* Contact Details and Sidebar Container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Social Media Sidebar */}
        <div className="w-full md:w-16 lg:w-24 bg-gray-800 rounded-lg p-4 flex flex-row md:flex-col items-center justify-center space-y-6 md:space-y-8 space-x-6 md:space-x-0">
          <a
            href="https://www.linkedin.com/in/shivshankar-ghyar-870972289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/linkdein1.png"
              alt="LinkedIn"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300 bg-cover"
            />
          </a>
          <a
            href="https://x.com/Shivshanka77956?t=nd72U6Ent4TGTmM39OajQA&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/twitter.png"
              alt="Twitter"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="mailto:shivghyar538@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/mail.png"
              alt="Email"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/shiv_ghyar?utm_source=qr&igsh=MXBmajhjMGZubW9wZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/instagram.png"
              alt="Instagram"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="https://wa.me/qr/RU5S7TBK7NBKA1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Images/whatsapp.png"
              alt="WhatsApp"
              className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Contact Details and Form */}
        <div className="flex-1">
          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Location */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              <img
                src="./Images/Icons/location.png"
                alt="Location"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Alandi, Pune</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              <img
                src="./Images/mail.png"
                alt="Email"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">shivghyar538@gmail.com</p>
            </div>

            {/* Education */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              <img
                src="./Images/Icons/education.png"
                alt="Education"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">MIT Academy of Engineering, Pune</p>
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              <img
                src="./Images/Icons/call.png"
                alt="Phone"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mobile Number</h3>
              <p className="text-gray-400">+91 8007001540</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form
              action="https://formsubmit.co/shivghyar538@gmail.com"
              method="POST"
              className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-100"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-100"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
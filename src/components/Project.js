import React from 'react';

function Projects() {
  const projectData = [
    {
      id: "farm",
      image: "./Images/Projects/webkrishi.png",
      title: "Krishi Bandhu",
      description:
        "Developed a full-stack web app to assist farmers with real-time market updates, weather forecasts, government schemes, and direct product selling. Integrated an AI voice chatbot and used ResNet-50 for crop disease detection. Built using React.js, Node.js, Express.js, MongoDB, and enhanced with machine learning, FastAPI, and web scraping. Strengthened my skills in building intelligent, scalable, real-world solutions.",
      codeLink: "https://front.avishkar.digital/",
      liveLink:"https://github.com/shiv-1540/Pikvardhan"
    },
    {
      id: "civil",
      image: "./Images/Projects/kartz.png",
      title: "KArtz",
      description:
        "Built a full-stack e-commerce website for selling poster frames with secure JWT-based authentication, Razorpay payment integration, and automated emails via SMTP. Designed RESTful APIs and a feature-rich dashboard for both admin and customer management.",
      codeLink: "#",
      liveLink:"https://github.com/shiv-1540/KArtz"
    },
    {
      id: "farm",
      image: "./Images/Projects/litarcpages.png",
      title: "LITARCPAGES",
      description:
        "Developed a full-stack blog website with features like user authentication, post creation, and user interaction, using MySQL for data storage. This was my first major backend project, where I learned routing, database integration, and the foundations of full-stack development. Built as part of my college's Super30 program, it laid the groundwork for my journey into web development.",
      codeLink: "#",
      liveLink:"https://github.com/shiv-1540/LITRACPAGES"
    },
    {
      id: "currency",
      image: "./Images/Projects/currency.png",
      title: "Currency Convertor ",
      description:
        "Developed a Java-based Currency Converter using Swing and AWT, designed to help users manage and convert currencies with ease. The application fetches real-time exchange rates via API, supports user login/signup with session management, and allows users to save favorite currency pairs for quick access. It also provides detailed information about global currencies and ensures secure logout for safe usage.This project strengthened my skills in Java GUI development, API integration, and session handling, while solving a practical problem in global currency management.",
      codeLink: "#",
      liveLink:"https://github.com/shiv-1540/CureencyConvertor.git"
    },
  ];

  const AIMLData = [
    {
      id: "civil",
      image: "./Images/Projects/plantdisease.png",
      title: "Plant Disease Prediction",
      description:
        "Built a deep learning model using CNN and ResNet-50 to classify crop diseases with over 92% accuracy, using the PlantVillage dataset. This project helped me explore various pre-trained models and strengthened my research and development skills in AIML for agriculture.",
      codeLink: "#",
      liveLink:"https://github.com/shiv-1540/CropDiseasePrediction"
    },
    {
      id: "farm",
      image: "./Images/Projects/croprecom.png",
      title:"Crop Recomendation System",
      description:
        "Developed a machine learning-based system to recommend the best crop for a given land using soil parameters, rainfall, and environmental factors. Explored algorithms like Random Forest, SVM, Logistic Regression, Decision Tree, and XGBoost, with Random Forest giving the highest accuracy. Learned dataset balancing and model evaluation techniques through this project.",
      codeLink: "https://crop-recomendation1.streamlit.app",
      liveLink:"https://github.com/shiv-1540/CROPRECOMENDATION"
    },
   
    {
      id: "lifeexpctancy",
      image: "./Images/Projects/life.png",
      title: "Life Expectancy Prediction ",
      description:
        "This project predicts the life expectancy of individuals or populations using Machine Learning. It analyzes socio-economic, health, and lifestyle-related features like healthcare indicators, economic metrics, and demographics.",
      codeLink: "https://lifeexpectancymlproject-7.onrender.com",
      liveLink: "https://github.com/shiv-1540/LifeExpectancyMLProject"
    },
    {
      id: "email_detect",
      image: "./Images/Projects/email_detect.jpg",
      title: "Email Detection",
      description:
        "Built a simple spam detection system using the Naive Bayes algorithm to classify emails as spam or not. This was my first machine learning project, developed during a Datathon in first year, where I learned the basics of Python and ML algorithms.",
      codeLink: "#",
      liveLink: ""
    },
    
  ];
 

  const renderProjectCard = (project) => (
    <div
      key={project.id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className="py-16 bg-gradient-to-br py-4 from-gray-900 gray-800 to-black text-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-white">FULLSTACK</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map(renderProjectCard)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6 text-white">AIML</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {AIMLData.map(renderProjectCard)}
        </div>
      </section>
    </div>
  );
}

export default Projects;



// import React from 'react';

// function Projects() {
  // const projectData = [
  //   {
  //     id: "farm",
  //     image: "./Images/Projects/webkrishi.png",
  //     title: "Krishi Bandhu",
  //     description:
  //       "Developed a full-stack web app to assist farmers with real-time market updates, weather forecasts, government schemes, and direct product selling. Integrated an AI voice chatbot and used ResNet-50 for crop disease detection. Built using React.js, Node.js, Express.js, MongoDB, and enhanced with machine learning, FastAPI, and web scraping. Strengthened my skills in building intelligent, scalable, real-world solutions.",
  //     codeLink: "https://front.avishkar.digital/",
  //     githublink:"https://github.com/shiv-1540/Pikvardhan"
  //   },
  //   {
  //     id: "civil",
  //     image: "./Images/Projects/kartz.png",
  //     title: "KArtz",
  //     description:
  //       "Built a full-stack e-commerce website for selling poster frames with secure JWT-based authentication, Razorpay payment integration, and automated emails via SMTP. Designed RESTful APIs and a feature-rich dashboard for both admin and customer management.",
  //     codeLink: "#",
  //     githublink:"https://github.com/shiv-1540/KArtz"
  //   },
  //   {
  //     id: "farm",
  //     image: "./Images/Projects/litarcpages.png",
  //     title: "LITARCPAGES",
  //     description:
  //       "Developed a full-stack blog website with features like user authentication, post creation, and user interaction, using MySQL for data storage. This was my first major backend project, where I learned routing, database integration, and the foundations of full-stack development. Built as part of my college's Super30 program, it laid the groundwork for my journey into web development.",
  //     codeLink: "#",
  //     githublink:"https://github.com/shiv-1540/LITRACPAGES"
  //   },
  //   {
  //     id: "currency",
  //     image: "./Images/Projects/currency.png",
  //     title: "Currency Convertor ",
  //     description:
  //       "Developed a Java-based Currency Converter using Swing and AWT, designed to help users manage and convert currencies with ease. The application fetches real-time exchange rates via API, supports user login/signup with session management, and allows users to save favorite currency pairs for quick access. It also provides detailed information about global currencies and ensures secure logout for safe usage.This project strengthened my skills in Java GUI development, API integration, and session handling, while solving a practical problem in global currency management.",
  //     codeLink: "#",
  //     githublink:"https://github.com/shiv-1540/CureencyConvertor.git"
  //   },
  // ];

  // const AIMLData = [
  //   {
  //     id: "civil",
  //     image: "./Images/Projects/plantdisease.png",
  //     title: "Plant Disease Prediction",
  //     description:
  //       "Built a deep learning model using CNN and ResNet-50 to classify crop diseases with over 92% accuracy, using the PlantVillage dataset. This project helped me explore various pre-trained models and strengthened my research and development skills in AIML for agriculture.",
  //     codeLink: "#",
  //     githublink:"https://github.com/shiv-1540/CropDiseasePrediction"
  //   },
  //   {
  //     id: "farm",
  //     image: "./Images/Projects/croprecom.png",
  //     title:"Crop Recomendation System",
  //     description:
  //       "Developed a machine learning-based system to recommend the best crop for a given land using soil parameters, rainfall, and environmental factors. Explored algorithms like Random Forest, SVM, Logistic Regression, Decision Tree, and XGBoost, with Random Forest giving the highest accuracy. Learned dataset balancing and model evaluation techniques through this project.",
  //     codeLink: "https://crop-recomendation1.streamlit.app",
  //     githublink:"https://github.com/shiv-1540/CROPRECOMENDATION"
  //   },
   
  //   {
  //     id: "lifeexpctancy",
  //     image: "./Images/Projects/life.png",
  //     title: "Life Expectancy Prediction ",
  //     description:
  //       "This project predicts the life expectancy of individuals or populations using Machine Learning. It analyzes socio-economic, health, and lifestyle-related features like healthcare indicators, economic metrics, and demographics.",
  //     codeLink: "https://lifeexpectancymlproject-7.onrender.com",
  //     githublink: "https://github.com/shiv-1540/LifeExpectancyMLProject"
  //   },
  //   {
  //     id: "email_detect",
  //     image: "./Images/Projects/email_detect.jpg",
  //     title: "Email Detection",
  //     description:
  //       "Built a simple spam detection system using the Naive Bayes algorithm to classify emails as spam or not. This was my first machine learning project, developed during a Datathon in first year, where I learned the basics of Python and ML algorithms.",
  //     codeLink: "#",
  //     githublink: ""
  //   },
    
  // ];

//   return (
//     <div id="projects" className="min-h-screen py-16 bg-gray-900 text-gray-100">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 animate-fadeInUp">
//         Projects
//       </h2>
      
//       <h2 className='text-3xl md-text-2xl font-semibold mb-8 px-12'>FULLSTACK</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        
//         {projectData.map((project) => (
//           <div
//             key={project.id}
//             className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2 text-blue-500">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className='flex gap-9'>

//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg shadow hover:bg-green-800 transition-colors"
//                   >
//                     View code
//                   </a>
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg shadow hover:bg-green-800 transition-colors"
//                   >
//                     View Detail
//                   </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h2 className='text-3xl md-text-2xl font-semibold mb-8 px-12'>AIML</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        
//         {AIMLData.map((project) => (
//           <div
//             key={project.id}
//             className="card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeInUp"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2 text-blue-500">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className='flex gap-9'>

//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg shadow hover:bg-green-800 transition-colors"
//                   >
//                     View code
//                   </a>
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg shadow hover:bg-green-800 transition-colors"
//                   >
//                     View Detail
//                   </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

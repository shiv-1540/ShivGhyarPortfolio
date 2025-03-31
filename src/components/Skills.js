import React from 'react';

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 to-black py-20 text-gray-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">💼 My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {/* Reusable Skill Card */}
        {[
          {
            title: 'Programming Languages',
            color: 'text-red-500',
            skills: [
              { name: 'Java', logo: './Images/Lang/java.png' },
              { name: 'C++', logo: './Images/Lang/cpp.png' },
              { name: 'Python', logo: './Images/Lang/python.png' },
              { name: 'C', logo: './Images/Lang/c.png' }
            ],
          },
          {
            title: 'Full-Stack Development',
            color: 'text-yellow-400',
            skills: [
              { name: 'MERN Stack', logo: './Images/webdev/mernstack.png', isBanner: true }
            ],
          },
          {
            title: 'Problem Solving Platforms',
            color: 'text-blue-400',
            skills: [
              { name: 'LeetCode', logo: './Images/Logos/leetcode.png' },
              { name: 'CodeChef', logo: './Images/Logos/codechef.png' },
              { name: 'Codeforces', logo: './Images/Logos/codeforce.jpg' },
              { name: 'GeeksforGeeks', logo: './Images/Logos/gfg.png' }
            ],
          },
          {
            title: 'Machine Learning',
            color: 'text-green-400',
            skills: [
              { name: 'Python', logo: './Images/Lang/python.png' },
              { name: 'Hugging face', logo: './Images/Logos/hug.png' },
              { name: 'Scikit-Learn', logo: './Images/Logos/sci.png' },
              { name: 'Pandas', logo: './Images/Logos/pandas.png' },
              { name: 'OpenRouter', logo: './Images/Logos/openrouter.png' },
              { name: 'Model Deployment (using FastAPI / Streamlit / Flask)', logo: './Images/Logos/fastapi.png' },
             
            ],
          },
          {
            title: 'Cloud Computing',
            color: 'text-purple-400',
            skills: [
              { name: 'AWS', logo: './Images/cloud/awscloud.png' },
              { name: 'EC2', logo: './Images/cloud/ec2.png' },
              { name: 'IAM', logo: './Images/cloud/iam.png' },
              { name: 'Load Balancing', logo: './Images/cloud/loadbal.png' },
            ],
          },
          {
            title: 'Tools & Platforms/Databases',
            color: 'text-pink-400',
            skills: [
              { name: 'Git', logo: './Images/Tools/git.png' },
              { name: 'GitHub', logo: './Images/Tools/github.png' },
              { name: 'VS Code', logo: './Images/Tools/vscode.png' },
              { name: 'Postman', logo: './Images/Tools/postman.png' },
              { name: 'MySQL', logo: './Images/Tools/mysql.png' },
            ],
          }
        ].map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <h3 className={`text-2xl font-semibold mb-6 border-b pb-2 ${category.color}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-6 justify-start items-center">
              {category.skills.map((skill, index) =>
                skill.isBanner ? (
                  <img
                    key={index}
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full rounded-lg shadow"
                  />
                ) : (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 w-20"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Manvendra Pratap Singh. I am a final year student at the Rajiv Gandhi Institute of technology  with a major in Computer Science. I am passionate about pursuing my major in  Computer Science. My goal is to get a job in the software development  field after graduating. I am currently doing my internship with Indoskill .

I enjoy solving technical problems, researching and developing new technologies, designing software applications for different platforms. I enjoy meeting people and working with them in a team environment. I also enjoy interacting with clients and customers. My strong customer service skills allow me to do this well. I am a quick learner with a fun, outgoing personality. In addition, I excel in my ability to work under pressure and handle stressful situations very well.

These skills that I have will be a benefit for any software company.
        </p>

        <br />

        <p className="text-xl">
        I have build some of the software applications based on the web.
            Currently, I love to work on software application using technologies like
            React, Tailwind, Next JS and Javascript.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
//motion

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//services
const services = [
  {
    name: "Web Development",
    description:
      "I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and more.",
    link: "Learn More",
  },
  {
    name: "Data Structures & Algorithms",
    description:
      "I have a good grasp over fundamental concepts of DSA and have solved 400+ problems on Leetcode.",
    link: "Learn More",
  },
  {
    name: "Competitive Programming",
    description:
      "I have participated in many coding contests and pupil on Codeforces.",
    link: "Learn More",
  },
  {
    name: "App Development",
    description:
      "I have experience building apps using dart and flutter. I have built a few apps for android and ios.",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
            mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-teal-300">Services</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a mern stack and flutter developer. I can build websites and
            </h3>
            <button className="btn btn-sm text-black">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
          className="flex-1"
          variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            >
            {/* services list */}
            {services.map((service, index) => {
              // destructuring service
              const { name, description, link } = service;

              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4
                      className="h4 text-[20px] tracking-wider font-primary
                  font-semibold mb-6"
                    >
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center text-black"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;

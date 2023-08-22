import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
//motion

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//services
const services = [
  {
    name: "Wapventure",
    role: "--     SDE",
    time: "1yr+",
    description:
      "Contributed to end-to-end Flutter app design, development, and maintenance, enriched by collaborative code reviews and proactive suggestions. Nurtured technical acumen spanning Node.js, Express, Dart, MongoDB, and SQL, under the guidance of experienced mentors",
    link: "Learn More",
  },
  {
    name: "CHEGG",
    role: "--     Subject Matter Expert",
    time: "1yr+",
    description:
      "Delivered remote support to global students, providing accurate answers to Computer Science queries, conducting quality assessments on external solutions, offering content feedback, and tutoring online. Successfully addressed 150+ student doubts worldwide",
    link: "https://drive.google.com/file/d/1EWP5Ff5zMdssFEnYbGX6jcifUsvarhga/view",
  },
  {
    name: "Problem Solving",
    role: "",
    time: "1yr+",
    description:
      "I have experience solving problems on various platforms like Leetcode, Codeforces, GeeksforGeeks Hackerrank, etc. I have 12k+ (max) rating and pupil on Codeforces. I have 16k+ (max)solved 400+ problems on Leetcode.",
    link: "Learn More",
  },
  {
    name: "Flutter App Development",
    role: "",
    time: "1yr+",
    description:
      "My journey encompasses crafting dynamic applications using Dart and Flutter. I've adeptly developed apps for both Android and iOS platforms, channeling my creativity into seamless user experiences.",
    link: "Learn More",
  },
];

const Services = () => {
  const seeWork=()=>{
    window.open('https://www.linkedin.com/in/imguptaharsh/', '_blank');
  };
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
            <h1 className="h1" style={{ color: "#51f8ec" }}>
              Experience
            </h1>
            <h3 className="h3 max-w-[435px] mb-16">
              Crafting reality from intricate code—an ode to turning imagination
              into experience.
            </h3>
            <button className="btn btn-sm text-black" onClick={seeWork}>See my work</button>
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
              const { name, role,time, description, link } = service;

              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[48px] flex"
                  key={index}
                >
                  <div className="max-w-[586px]">
                    <div>
                      <div className="flex">
                        <h4
                          className="h4 text-[20px] tracking-wider font-primary font-semibold mb-3"
                          style={{ color: "#51f8ec" }}
                        >
                          {name}   
                        </h4>
                        <h4
                          className="h4 text-[20px] tracking-wider font-primary font-semibold mb-3 ml-4"
                          // style={{ color: "#51f8ec" }}
                        >
                              {role}
                        </h4>
                        
                      </div>
                    </div>
                    
                    <p className="text-[18px] font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href={link}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center text-black"
                      target="_blank"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {/* {link} */}
                      {/* see credentials */}
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

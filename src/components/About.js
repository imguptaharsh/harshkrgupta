import React from "react";
// countup
import CountUp from "react-countup";
// / intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    // triggerOnce: true,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          {/* img */}
          <motion.div
            className="flex-1 bg-about bg-contain
           bg-no-repeat h-[640px] mix-blend-lighten bg-top"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* img */}
          </motion.div>
          {/* text */}
          <motion.div className="flex-1"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 " style={{ color: "#51f8ec" }}>
              About me
            </h2>
            <h3 className="h3 mb-4">
              I'm a <span>Software Engineer</span> from India
            </h3>
            <p>
              I am a 3rd year student pursuing B.Tech in Computer Science and
              Engineering from{" "}
              <span>Indian Institute of Information Technology, Dharwad</span>.
              I am a <span>Web Developer</span> and a{" "}
              <span>Flutter Developer</span>. I am also a{" "}
              <span>Competitive Programmer</span> and a{" "}
              <span>Machine Learning Enthusiast</span>. I am a{" "}
              <span>Quick Learner</span> and a <span>Team Player</span>. I am
              always ready to learn new things and I am always ready to take up
              new challenges.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2 ">
                  {/* {inView ? <CountUp start={0} end={13} duration={3} /> : null} */}
                  {/* <CountUp start={0} end={15} duration={3} />  */}
                  {/* <div className="line-height-[2.2]"> */}
                  <CountUp start={0} end={1} duration={4} />

                  {/* </div> */}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Year of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {/* {
                  inView ?
                   <CountUp starts={0} end={13} duration={3}/>:null} */}
                  <CountUp start={0} end={9} duration={3} /> +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[25px] font-tertiary text-gradient mb-4">
                  {/* {inView ? <CountUp start={0} end={13} duration={3} /> : null} */}
                  <CountUp start={0} end={1111} duration={3} /> K+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Rating <br /> Codeforces
                </div>
              </div>
              <div>
                <div className="text-[30px] font-tertiary text-gradient mb-2">
                  {/* {inView ? <CountUp start={0} end={13} duration={3} /> : null} */}
                  <CountUp start={0} end={400} duration={10} /> +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  DSA Problems <br /> Solved (LC)
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg text-black">Download CV</button>
              <a href="#" className="text-gradient btn-link mt-4 lg:mt-0">
                My Portfolio
              </a>
            </div>
          </motion.div>
          {/* <div>
              <button className="btn btn-lg">Download CV</button>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

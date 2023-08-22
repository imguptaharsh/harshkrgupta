import React from "react";
// imgage
import image from "../assets/hkg.png";
// icons
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn, FaCode, FaFlag} from "react-icons/fa";
// import { FaLeetCode, FaCodeforces } from "react-icons/io"; // 
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const Banner = () => {

  return (
    // className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center " id="home">
      
      <div className="container mx-auto">
        
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.2)} initial="hidden"
            whileInView={'show'} viewport={{once:false,amount:0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[90px] text-white">
              Hello, I'm
              <span  style={{ color: "#51f8ec" }}> Harsh</span>
              {/* <TypeAnimation
                className="text-blue-300"
                sequence={[" Harsh", 2000]} 
                speed={20}
                wrapper="span"
                // repeat={Infinity}
              /> */}
            </motion.h1>
             <div className="h-[10px]"></div>
            <motion.div
            variants={fadeIn('up', 0.4)} initial="hidden"
            whileInView={'show'} viewport={{once:false,amount:0.7}}
              className="mb-6 test-[36px] lg:text-[60px]  font-secondary
            font-semibold leading-[1]"
            >
              <span className=" text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer ",
                  2000,
                  "Programmer ",
                  2000,
                  "Flutter Developer ",
                  2000,
                  // "Machine Learning Enthusiast",
                  2000,
                ]}
                speed={20}
                // className="text-teal-300"
                style={{ color: "#51f8ec" }}
                wrapper="span"
                repeat={Infinity}
                
              />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.4)} initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a web developer based in India. I have a passion for web
              design and love to create for web and mobile devices.
            </motion.p>
            {/* social links */}
            <motion.div
  variants={fadeIn('up', 0.6)} initial="hidden"
  whileInView={'show'} viewport={{once:false,amount:0.7}}
  className="flex flex-col items-center lg:flex-row lg:items-center max-w-max gap-x-6 mb-12 mx-auto lg:mx-0"
>
<button
          className="btn btn-lg text-black items-center"
          
        >
          <Link
            to="contact"
            activeclass= 'active'
            smooth={true}
            spy={true}
            // className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            {/* <BsChatSquare /> */}
            Contact me
          </Link>
          {/* <div> Contact me</div> */}
        </button>
        
  <a href="#" className="text-gradient btn-link mt-4 lg:mt-0">
    My Portfolio
  </a>
</motion.div>


            <motion.div
             variants={fadeIn('up', 0.6)} initial="hidden"
             whileInView={'show'}
             viewport={{once:false,amount:0.7}}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto 
              lg:mx-0"
            >
              <a href="https://github.com/imguptaharsh" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/imguptaharsh" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="https://www.leetcode.com/imguptaharsh/" target="_blank">
                <FaCode />
              </a>
              <a href="https://twitter.com/harshkrguptaa" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/btwitzhrsh/" target="_blank">
                <FaInstagram />
              </a>
              
              {/* <a href="https://www.leetcode.com/imguptaharsh/" target="_blank">
                <FaFlag />
              </a> */}
            </motion.div>
          </div>
          {/* image */}
          <motion.div
          variants={fadeIn('down', 0.3)} initial="hidden"
          whileInView={'show'}
          // viewport={{once:false,amount:0.7}}
          className="hidden lg:flex flex-1 max-w-[320px] 
          lg:max-w-[482px]">
          <img src={image} alt="avatar" />

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

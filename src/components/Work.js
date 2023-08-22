import React from 'react';

// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  const seeWork=()=>{
    window.open('https://github.com/imguptaharsh?tab=repositories', '_blank');
  };
  return (
    <section className='section' id='work'>
      <div className='Container mx-auto px-8 lg:px-40'>
        <div className='flex flex-col lg:flex-row gap-x-10'>

          {/* Left Column */}
          <motion.div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          >

            {/* text */}
            <div className='flext-1 mb-20'>
              <h1 className='h1 leading-tight mb-6' style={{ color: "#51f8ec" }}>
                My Latest <br />Work
              </h1>
              <h4 className='w-85 mb-12 text-[20px]'>
              In my latest endeavor, I proudly wear the hats of a versatile MERN stack and Flutter developer, fueled by a passion for machine learning innovation.
              </h4>
              {/* <button className='btn btn-sm text-black'>View all projects</button> */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button className='btn btn-sm text-black' onClick={seeWork}>View all projects</button>
    </div>
            </div>

            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              {/* <div className='aspect-w-3 aspect-h-2'> */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img1}
                  alt=''
                />
              {/* </div> */}

              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Flutter Development</span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project title</span>
              </div>
            </div>
          </motion.div>



          {/* Right Column */}
         <motion.div className='flex-1 flex flex-col gap-y-10'
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}>
  {/* image2 */}
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* overlay */}
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

    {/* img */}
    <div className='aspect-w-3 aspect-h-2 max-w-[100%]'>
      <img
        className='group-hover:scale-125 transition-all duration-500 objec-cover'
        src={Img2}
        alt=''
      />
    </div>

    {/* pretitle */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
      <span className='text-gradient'>Flutter Development</span>
    </div>

    {/* title */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
      <span className='text-3xl text-white'>Project title</span>
    </div>
  </div>

  {/* {imgage3} */}
  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
    {/* overlay */}
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

    {/* img */}
    <div className='aspect-w-3 aspect-h-2 max-w-[100%]'>
      <img
        className='group-hover:scale-125 transition-all duration-500 '
        src={Img3}
        alt=''
      />
    </div>

    {/* pretitle */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
      <span className='text-gradient'>Flutter Development</span>
    </div>

    {/* title */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
      <span className='text-3xl text-white'>Project title</span>
    </div>
  </div>
  
  </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;

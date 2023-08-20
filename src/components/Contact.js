import React from 'react';

// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
     <div className='flex flex-col lg:flex-row'>
      {/* text */}
     <motion.div className='flex-1 flex justify-start items-center'
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      >
     <div>
        <h4 className='text-xl uppercase font-medium mb-2 tracking-wide text-teal-300'>Get in touch</h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>
        Let's work together to build something <br/> great!!!
        </h2>
        {/* <button className='btn btn-sm text-black'>See my work</button> */}
      </div>
     </motion.div>
     {/* form */}
    <motion.form className='flex-1 border rounded-2xl flex flex-col
    gap-y-6 pb-24 p-6 items-start'
    variants={fadeIn("left", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    >
      <input className='bg-transparent border-b py-12 outline-none w-full
      placeholder:text-white text-teal-300 transition-all'
      type='text'
      placeholder='Your name'></input> 
      
      <input className='bg-transparent border-b py-12 outline-none w-full
      placeholder:text-white text-teal-300 transition-all'
      type='text'
      placeholder='Your email'></input> 
      
      <textarea className='bg-transparent border-b py-12 outline-none w-full
      placeholder:text-white text-teal-300 transition-all
      resize-none mb-12'
      type='text'
      placeholder='Send message'></textarea> 
      <button className='btn btn-sm text-black'>Send</button>
    </motion.form>
     </div>
      </div>
  </section>;
};

export default Contact;

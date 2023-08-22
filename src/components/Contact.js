import React, {  useRef, useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import { useNavigate } from 'react-router-dom'; // Import useHistory
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fmusqk",
        "template_468l8y6",
        form.current,
        "JH7ryCo-mS1Fe6rxi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setDone(true); // Set done to true after a delay
            setTimeout(() => {
              setDone(false); // Reset done back to false after another delay
            }, 3000); // 3000 milliseconds (3 seconds)
          }, 1000); //
          // form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            className='flex-1 flex justify-start items-center'
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h4 className="text-xl uppercase text-[31px] font-medium mb-2 tracking-wide text-center" style={{ color: "#51f8ec" }}>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>
                Let's work together to build something <br /> great!!!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center'
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            style={{ borderColor: "#51f8ec" }}
            // onSubmit={sendEmail} 
            ref={form} onSubmit={sendEmail}// Call the sendEmail function on form submit
          >
            <input
              className='bg-transparent border-b py-8 outline-none w-full text-[26px] placeholder:text-white text-teal-300 transition-all'
              type='name'
              placeholder='Your name.......'
              // value={name}
              name="name"
              required
            />

            <input
              className='bg-transparent border-b py-8 outline-none w-full text-[26px] placeholder:text-white text-teal-300 transition-all'
              type='email'
              placeholder='Enter your email.......'
              // value="email"
              name="email"
              style={{ borderColor: "#51f8ec" }}
              required
            />

            <textarea
              className='bg-transparent border-b py-10 outline-none w-full text-[20px] placeholder:text-white text-teal-300 transition-all resize-none mb-12'
              type='message'
              placeholder='Drop a message.......'
              // value="message"
              name="message"
              required
             />


<div className="centered-container">
      <button type="submit" className="btn btn-sm text-black mx-w-sm" onClick={sendEmail}>
        Send
      </button>
    </div>
          <span>{done && "Thanks for Contacting me"}</span>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useRef, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
// Importing the emailjs library
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Creating a state variable to store the loading status
  const [loading, setLoading] = useState(false);

  const form = useRef();

  // Creating a function to handle form submission
  const handleSubmit = (e) => {
    // Preventing the default behavior of the form
    e.preventDefault();

    // Getting the values of the inputs
    const nameInput = e.target.user_name.value;
    const emailInput = e.target.user_email.value;
    const messageInput = e.target.message.value;

    // Validating the email input using a regular expression
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!nameInput || !emailRegex.test(emailInput) || !messageInput) {
      // If any of the inputs is invalid, alert the user and return
      alert('Please fill in all the fields with valid values.');
      return;
    }
    // const emailInput = e.target.email.value;
    // if (!emailRegex.test(emailInput)) {
    //   // If the email is not valid, alert the user and return
    //   alert('Please enter a valid email address');
    //   return;
    // }

    // Setting the loading state to true
    setLoading(true);

    // Sending the email using emailjs service
    emailjs.sendForm('service_x1cmd3f', 'template_zurmq1r', form.current, 'bRZDm6GQm-rniaIRz')
      .then((result) => {
        // If the email is sent successfully, alert the user and reset the form
        alert('Your message has been sent! Thank you.');
        e.target.reset();
      }, (error) => {
        // If there is an error, alert the user
        alert('Something went wrong. Sending message failed, please try again later.');
      })
      .finally(() => {
        // Setting the loading state to false in any case
        setLoading(false);
      });
  };

  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[1000px] w-full' ref={form} onSubmit={handleSubmit}>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-[#0f1729]'>Contact</p>
          <p className='py-4 text-text-small-gray'>Want to inform or discuss something? Shoot me an email, submit the form below.</p>
        </div>
        <input className='p-2 bg-bg-slate-200' type="text" placeholder='Your name' name='user_name' />
        <input className='my-4 p-2 bg-bg-slate-200' type="email" placeholder='Your email' name='user_email' />
        <textarea className='p-2 bg-bg-slate-200' name="message" id="" rows="10" placeholder='Say something interesting...'></textarea>
        <button className='bg-[#0f1729] text-[#f9fafc] px-4 py-3 my-8 flex items-center w-28 hover:bg-[#fff] duration-200 hover:text-[#0F1729]'>Submit
          <span>
            <HiArrowNarrowRight className='group-hover:translate-x-2 duration-200 ml-4' />
          </span>
        </button>
        {/* Adding a loading div using tailwind css */}
        {loading && (
          <div className='fixed inset-0 bg-text-medium-gray bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-4 rounded shadow-lg'>
              <p className='text-lg font-semibold'>Sending your message...</p>
              <div className='flex space-x-2'>
                <div className='w-3 h-3 bg-[#0f1729] rounded-full animate-bounce'></div>
                <div className='w-3 h-3 bg-[#0f1729] rounded-full animate-bounce delay-100'></div>
                <div className='w-3 h-3 bg-[#0f1729] rounded-full animate-bounce delay-200'></div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default Contact
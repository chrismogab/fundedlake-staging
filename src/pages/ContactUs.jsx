import { Helmet } from "react-helmet";
import backgroundImg from "../assets/contact-main-bg.webp";
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {

  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ogcgjob', 'template_42oavva', form.current, {
        publicKey: 'XTZEmyTvzR90k0-qM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage("Your message has been sent successfully!");
          form.current.reset();  // Clear the form fields
          setTimeout(() => {
            setMessage("");  // Clear the message after 5 seconds
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage("Failed to send message. Please try again.");
          setTimeout(() => {
            setMessage("");  // Clear the message after 5 seconds
          }, 5000);
        },
      );
  };


  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Contact Us - FundedLake</title>
        <meta
          name="description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <link rel="canonical" href="https://fundedlake.com/contact-us/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact Us - FundedLake" />
        <meta
          property="og:description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <meta property="og:url" content="https://fundedlake.com/contact-us/" />
        <meta property="og:site_name" content="FundedLake" />
        <meta
          property="article:modified_time"
          content="2025-04-11T07:56:30+00:00"
        />
        <meta
          property="og:image"
          content="https://fundedlake.com/wp-content/uploads/2025/04/favicon.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div
        className="font-lexend relative bg-cover bg-center bg-no-repeat text-white md:h-[60vh] h-[40vh]  flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000065] to-[#000000] opacity-100"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-bold uppercase leading-tight">
            CONTACT <span className="text-blue-500">US</span>
          </h1>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#000] to-[#000c15] mx-auto font-lexend md:px-0 px-4 md:pb-16 pb-6">
        <div className="md:max-w-4xl mx-auto text-white">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-mail md:flex items-center justify-between gap-5">
              <div className="user-name md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3 md:my-3"
                >
                  <span className="required text-lg">Name*</span>
                </label>
                <input
                  className="w-full placeholder:text-black md:mt-2 text-black px-2 py-3 rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name" required
                />
              </div>
              <div className="mail md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium  my-3"
                >
                  <span className="required text-lg">Email*</span>
                </label>
                <input
                  className="w-full placeholder:text-black md:mt-2 text-black px-2 py-3 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com" required
                />
              </div>
            </div>
            <div className="contact-number w-full mt-4">
              <label htmlFor="name" className="block text-sm font-medium my-3">
                <span className="required text-lg">Contact Number*</span>
              </label>
              <input
                className="w-full placeholder:text-black md:mt-2 text-black px-2 py-3 rounded-md"
                type="tel"
                id="number"
                name="number"
                placeholder="Your Contact Number" required
              />
            </div>
            <div className="subject w-full mt-4">
              <label htmlFor="name" className="block text-sm font-medium my-3">
                <span className="required text-lg">Subject*</span>
              </label>
              <input
                className="w-full placeholder:text-black md:mt-2 text-black px-2 py-3 rounded-md"
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Message Subject" required
              />
            </div>
            <div className="your-message w-full mt-4">
              <label htmlFor="name" className="block text-sm font-medium my-3">
                <span className="required text-lg">Your Message*</span>
              </label>
              <textarea
                className="placeholder:text-black w-full md:mt-2 text-black px-2 py-3 rounded-md h-[140px]"
                type="text"
                id="message"
                name="message"
                placeholder="Your Message Here" required
              />
            </div>
            <button
              className="px-4 py-2 bg-secondory rounded-md text-black my-6 hover:scale-[0.8] duration-300 hover:bg-white"
              type="submit" value="Send"
            >
              Send Message
            </button>
              {message && (
              <p className="w-full text-center p-2 text-2xl font-semibold text-[#ffff]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

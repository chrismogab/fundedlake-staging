import backgroundImg from "../assets/contact-main-bg.webp"; // replace with your correct image path

const ContactUs = () => {
  return (
    <>
      <div className="font-lexend relative bg-cover bg-center bg-no-repeat text-white md:h-[60vh] h-[40vh]  flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000065] to-[#000000] opacity-100"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-bold uppercase leading-tight">
            CONTACT <span className="text-blue-500">US</span>
          </h1>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#000] to-[#000c15] mx-auto font-lexend md:px-0 px-4">
        <div className="md:max-w-4xl mx-auto text-white">
          <form action="">
            <div className="name-mail md:flex items-center justify-between gap-5">
              <div className="user-name md:w-1/2">
                <label htmlFor="name" className="block text-sm font-medium">
                  <span className="required text-lg">Name*</span>
                </label>
                <input
                  className="w-full placeholder:text-black mt-2 px-2 py-3 rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mail md:w-1/2">
                <label htmlFor="name" className="block text-sm font-medium">
                  <span className="required text-lg">Email*</span>
                </label>
                <input
                  className="w-full placeholder:text-black mt-2 px-2 py-3 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="contact-number w-full mt-4">
              <label htmlFor="name" className="block text-sm font-medium">
                <span className="required text-lg">Contact Number*</span>
              </label>
              <input
                className="w-full placeholder:text-black mt-2 px-2 py-3 rounded-md"
                type="tel"
                id="number"
                name="number"
                placeholder="Your Contact Number"
              />
            </div>
            <div className="subject w-full mt-4">
              <label htmlFor="name" className="block text-sm font-medium">
                <span className="required text-lg">Subject*</span>
              </label>
              <input
                className="w-full placeholder:text-black mt-2 px-2 py-3 rounded-md"
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Message Subject"
              />
            </div>
            <div className="your-message w-full mt-4">
              <label htmlFor="name" className="block text-sm font-medium">
                <span className="required text-lg">Your Message*</span>
              </label>
              <textarea
                className="placeholder:text-black w-full mt-2 px-2 py-3 rounded-md h-[140px]"
                type="text"
                id="message"
                name="message"
                placeholder="Your Message Here"
              />
            </div>
            <button className="px-4 py-2 bg-secondory rounded-md text-black my-6 hover:scale-[0.8] duration-300 hover:bg-white" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser';

function BecomePartnerForm({ partnerBtn }) {
    const [isOpen, setIsOpen] = useState(false);

    const form = useRef();
      const [message, setMessage] = useState("");
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2vorqnj', 'template_q888smc', form.current, {
            publicKey: 'iSAUlRGczFV4MCVV6',
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
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-yellow-500 text-black ${partnerBtn} font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition`}
      >
        Become a Partner
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-xl shadow-lg p-6 md:p-8 w-[95%] max-w-3xl relative md:h-auto max-h-[90vh] overflow-y-auto lg:mt-16">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-600 rounded-full p-1 absolute top-4 right-3 text-white text-2xl hover:text-dark"
            >
              <IoClose />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              PARTNER WITH FUNDEDLAKE
            </h2>
            <p className="text-gray-300 text-sm md:text-base text-center mb-6">
              At FundedLake, we believe in building strong partnerships with traders and entrepreneurs who share our vision for growth, transparency, and innovation. Fill out the form below to share more about yourself.
            </p>
            <form ref={form}
              onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter Your Name"
                className="p-3 rounded bg-gray-800 text-white w-full"
              />
              <input
                type="date"
                name="user_date"
                required
                className="p-3 rounded bg-gray-800 text-white w-full"
              />
              <input
                type="number"
                name="user_mobile"
                required
                placeholder="Phone Number"
                className="p-3 rounded bg-gray-800 text-white w-full"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address"
                className="p-3 rounded bg-gray-800 text-white w-full"
              />
              <input
                type="text"
                name="user_trading_instruments"
                required
                placeholder="Trading Instrument(s)"
                className="p-3 rounded bg-gray-800 text-white w-full"
              />
              <input
                type="text"
                name="user_trading_exp"
                required
                placeholder="Trading Experience (in years)"
                className="p-3 rounded bg-gray-800 text-white w-full"
              />
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="user_address"
                  required
                  placeholder="Country / Address"
                  className="p-3 rounded bg-gray-800 text-white w-full"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  placeholder="Why do you want to partner with FundedLake? (short answer)"
                  name="user_short_ans"
                  className="p-3 rounded bg-gray-800 text-white w-full h-24"
                />
              </div>
              <div className="mr-auto">
                <button
                  type="submit" value="Send"
                  className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition">
                  Send Message
                </button>
              </div>
                  {message && (
              <p className="w-full text-center p-2 text-2xl font-semibold text-[#ffff]">
                {message}
              </p>
            )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default BecomePartnerForm
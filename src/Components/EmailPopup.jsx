import { useEffect, useRef, useState } from "react";
import { X, Mail } from "lucide-react";
import popupImg from "../assets/popupImg.png";
import emailjs from "@emailjs/browser";

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2vorqnj", // Replace with your EmailJS service ID
        "template_q888smc", // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: "iSAUlRGczFV4MCVV6", // Replace with your EmailJS public key
        }
      )
      .then(
        () => {
          setMessage("✅ Email submitted successfully!");
          form.current.reset();
          setTimeout(() => setMessage(""), 4000);
        },
        (error) => {
          setMessage("❌ Failed to submit. Please try again.");
          setTimeout(() => setMessage(""), 4000);
        }
      );
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div className="relative bg-[#1c1c1c] text-white w-[100%] overflow-y-auto lg:max-w-4xl px-4 py-6 lg:py-8 md:px-6 rounded-lg shadow-lg text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 overscroll-contain touch-auto">
        <button
          className="absolute top-3 right-3 text-white text-4xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-primary rounded-full p-1 md:size-7 size-6" />
        </button>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <img className="border-2 md:w-full w-[60%] md-mx-0 mx-auto" src={popupImg} alt="" />
          <div className="popupContent text-start flex-col flex justify-around">
            <h3 className="font-semibold md:text-[24px] text-[20px] text-center md:text-left">
              ⚡WIN A FREE 200k 2-STEP CHALLENGE GIVEAWAY ⚡
            </h3>
            <p className="md:text-2xl text-xl mt-4 text-center md:text-left">
              As a welcome, get a chance to enter a 200k welcome 2-step
              challenge giveaway.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2 items-start my-8"
            >
              <span className="emailInput flex items-center border w-full py-1 pl-4 pr-1 rounded-full bg-white">
                <Mail className="text-black" />
                <input
                  className="md:py-3 md:px-1 py-3 px-2 rounded-full w-full focus:none outline-none text-dark bg-[transparent]"
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email.."
                />
                <button
                  type="submit"
                  className="bg-primary md:px-2 md:py-3 py-3 px-4 w-1/3 rounded-full font-bold md:text-lg text-sm"
                >
                  Submit
                </button>
              </span>

              {message && (
                <p className="text-sm font-semibold mt-2">{message}</p>
              )}
            </form>
            <hr className="border-t-1 w-[95%] mx-auto border-[#b4b4b4]" />
            <div className="contact-btns flex md:gap-5 gap-2 my-6">
              <a
                className="md:px-4 md:py-3 px-4 pt-3 m-0 font-semibold rounded-full text-[14px] md:text-[16px] bg-primary"
                href="https://discord.gg/vDSnjmxndy"
              >
                JOIN OUR DISCORD
              </a>
              <a
                className="md:px-4 md:py-3 px-4 py-3 font-semibold rounded-full text-[14px] md:text-[16px] bg-secondory text-dark"
                href="https://fundedlakedashboard.propaccount.com/en/sign-up"
              >
                SIGN UP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;
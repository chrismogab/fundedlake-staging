import { useEffect, useState } from "react";
import { X } from "lucide-react";

const GiveawayPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after slight delay
    const timer = setTimeout(() => setShow(true), 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Disable background scroll when popup is open
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div
        className="relative bg-[#1c1c1c] text-white w-[90%] lg:max-w-4xl max-h-[90vh] overflow-y-auto 
  p-6 lg:py-12 rounded-lg shadow-lg text-center 
  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-8 
  overscroll-contain touch-auto"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-primary rounded-full p-1" />
        </button>

        <h2 className="lg:text-[40px] text-xl font-bold mb-4">
          2 STEP CHALLENGE GIVEAWAY
        </h2>

        <p className="md:text-[25px] text-lg my-5 font-[400]">
          🚨 15x 2-Step Challenge Giveaway! 🚨
        </p>
        <p className="mb-2 md:text-[25px] text-lg font-[400] px-16 leading-[1.4em]">
          We’re giving away{" "}
          <span className="font-semibold">
            $400,000 worth of challenge accounts
          </span>{" "}
          to 5 lucky traders! 💸
        </p>
        <ul className="text-center lg:text-[24px] text-[16px] mb-4 space-y-2 pl-4">
          <li>🏆 1st Place: $100K</li>
          <li>🥈 2nd Place: $100K</li>
          <li>🥉 3rd – 5th Place: $50K each</li>
        </ul>

        <h3 className="font-semibold text-2xl my-4">🔥 How to Enter:</h3>
        <ul className="text-center lg:text-[24px] text-[16px] mb-4 space-y-2 pl-4">
          <li>1️⃣ Sign up on our website</li>
          <li>2️⃣ Join our Discord</li>
          <li>3️⃣ Follow us on Instagram</li>
        </ul>

        <p className="mb-4 lg:text-[25px] text-[20px]">
          🎯{" "}
          <strong>
            Winners will be announced in Discord Wednesday June 4.
          </strong>
        </p>
        <p className="mb-6 lg:text-[25px] text-[14px]">
          Let’s build, grow, and get funded together 💼
        </p>

        <div className="button-box flex flex-row justify-center items-center gap-6 flex-wrap">
          <a
            href="https://discord.gg/W8hmTwRwk4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00aef0] lg:text-[20px] text-[14px] text-white px-6 py-3 rounded font-bold"
          >
            JOIN OUR DISCORD
          </a>
          <a
            href="https://fundedlakedashboard.propaccount.com/en/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 lg:text-[22px] text-[20px] text-black px-4 py-2 font-bold rounded"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default GiveawayPopup;

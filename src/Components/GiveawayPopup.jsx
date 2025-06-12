import { useEffect, useState } from "react";
import { CircleX  } from 'lucide-react';

const GiveawayPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after component mounts
    setTimeout(() => setShow(true), 500); // small delay
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] font-lexend">
      <div className="relative bg-[#1c1c1c] text-white lg:max-w-4xl w-[90%] p-6 lg:py-12 rounded-lg shadow-lg text-center">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl font-bold"
          onClick={() => setShow(false)}
        >
          <CircleX />
        </button>

        <h2 className="lg:text-[40px] text-xl font-bold mb-4">2 STEP CHALLENGE GIVEAWAY</h2>

        <p className="md:text-[25px] text-lg my-5">
          🚨 <strong>15x 2-Step Challenge Giveaway!</strong> 🚨
        </p>
        <p className="mb-4 md:text-[25px] text-lg">
          We’re giving away <strong>15 FundedLake 2-Step Challenge Accounts</strong> 💸
        </p>
        <ul className="text-center lg:text-[24px] text-[16px] mb-4 space-y-2 pl-4">
          <li>🏆 1st Place: $100K</li>
          <li>🥈 2nd Place: $100K</li>
          <li>🥉 3rd – 5th Place: $50K each</li>
        </ul>

        <h3 className="font-semibold text-2xl my-4">🔥 How to Enter:</h3>
        <ul className="text-center lg:text-[24px] text-[16px] mb-4 space-y-2 pl-4">
          <li>1️⃣ Sign up on our website</li>
          <li> 2️⃣ Join our Discord</li>
          <li> 3️⃣ Follow us on Instagram</li>
        </ul>

        <p className="mb-4 lg:text-[25px] text-[20px]">
          🎯 <strong>Winners will be announced in Discord Wednesday June 4.</strong>
        </p>
        <p className="mb-6 lg:text-[25px] text-[14px]">Let’s build, grow, and get funded together 💼</p>

        <div className="button-box flex flex-row justify-center items-center gap-6">
          <a
          href="https://discord.gg/W8hmTwRwk4"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00aef0] lg:text-[20px] text-[14px] text-white px-6 py-3 rounded font-bold">JOIN OUR DISCORD
        </a>
        <a
          href="https://fundedlakedashboard.propaccount.com/en/sign-in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondory lg:text-[22px] text-[20px] text-black px-4 py-2 font-bold rounded"
        >JOIN OUR DISCORD </a>
        </div>
        
      </div>
    </div>
  );
};

export default GiveawayPopup;
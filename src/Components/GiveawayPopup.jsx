import { useEffect, useState } from "react";
import { X } from "lucide-react";
import popupData from "../data/popup.json"; // 👈 import data

const GiveawayPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div className="relative bg-[#1c1c1c] text-white w-[100%] lg:max-w-3xl max-h-[90vh] overflow-y-auto 
          px-4 py-6 lg:py-12 md:px-6 rounded-lg shadow-lg text-center 
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-4 
          overscroll-contain touch-auto"
      >
        <button
          className="absolute top-3 right-3 text-white text-4xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-primary rounded-full p-1 md:size-7 size-6" />
        </button>

        <p className="md:text-[25px] text-[20px] my-8 font-[700]">
          {popupData.message}
        </p>
        <p className="text-2xl">Get 10% off any Challenge or Instant Funding account !</p>
        <div className="px-6 pb-4 pt-2 flex flex-col gap-2">
        <h3 className="font-semibold text-[24px]">⚡ First payout is instant </h3>
        <h4 className="font-semibold text-[24px]">⏱ No minimum trading days — get funded in as little as 3 days  </h4>
        <h4 className="font-semibold text-[24px]">👥 Join our Discord for weekly calls, market insights, and exclusive giveaways</h4>
        </div>
        <div className="button-box flex flex-col justify-center items-center md:gap-6 gap-3 flex-wrap">
          {popupData.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.url}
              target="_blank"
              rel="noopener"
              style={{
                backgroundColor: btn.bg,
                color: btn.color
              }}
              className="lg:text-[20px] text-[18px] font-semibold rounded-[6px] text-decoration-none leading-[20px] pt-[21px] pr-[32px] pl-[32px] pb-[21px] inline-block"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiveawayPopup;

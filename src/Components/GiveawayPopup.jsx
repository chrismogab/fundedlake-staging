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

        <ul className="text-center lg:text-[24px] text-[20px] mb-4 space-y-2 pl-4">
          {popupData.offers.map((offer, index) => (
            <li key={index}>
             Use code {offer.emoji} <strong>{offer.text}</strong> at checkout to get <strong>{offer.code}</strong> all Challenges and Instant Funding accounts!
            </li>
          ))}
        </ul>

        <h2 className="lg:text-[24px] text-2xl font-Semibold mb-4">
          {popupData.headline}
        </h2>

        <div className="button-box flex flex-col pt-6 justify-center items-center md:gap-6 gap-3 flex-wrap">
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

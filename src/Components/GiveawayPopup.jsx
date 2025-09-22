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
          {/* {popupData.message} */}
          🚀 LIMITED TIME ONLY 🚀
        </p>
        <h3 className="text-2xl">Claim 50% OFF your first challenge</h3>
        <div className="text-xl">CODE: Copy<button className="border px-4 py-1 bg-primary ml-2"
            onClick={() => navigator.clipboard.writeText("NEW50") }>Copy NEW50 </button></div>
            <p className="text-2xl font-[700]">OR</p>
        
        <div className="text-xl">
           <h3 className="text-2xl mb-6">30% OFF any challeng</h3>
          CODE:<button
  className="border px-4 py-1 bg-primary ml-2"
  onClick={() => navigator.clipboard.writeText("FALL30")}
> Copy FALL30 </button></div>
            <h3 className="font-semibold text-[24px]">⚡ Don’t miss out! </h3>
        {/* <div className="button-box flex flex-col justify-center items-center md:gap-6 gap-3 flex-wrap">
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
              className="lg:text-[20px] text-[18px] font-semibold rounded-[6px] text-decoration-none leading-[20px] py-[18px] pr-[32px] pl-[32px]  inline-block"
            >
              {btn.label}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default GiveawayPopup;

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const GiveawayPopup = () => {
  const [show, setShow] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  // ✅ Fetch popup data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://x8ki-letl-twmt.n7.xano.io/api:X66_Qz2l/pop_up/5"
        );
        const data = await res.json();
        console.log("Popup Data:", data);
        setPopupData(data);
      } catch (err) {
        console.error("Error loading popup data:", err);
      }
    };

    fetchData();
  }, []);

  if (!show || !popupData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center font-lexend">
      <div className="relative bg-[#1c1c1c] text-white w-[100%] lg:max-w-3xl max-h-[90vh] overflow-y-auto px-4 py-6 lg:py-12 md:px-6 rounded-lg shadow-lg text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-4">
        <button
          className="absolute top-3 right-3 text-white text-4xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-primary rounded-full p-1 md:size-7 size-6" />
        </button>

        {/* ✅ Show dynamic message */}
        <p className="md:text-[25px] text-[20px] my-8 font-[400]">
          {popupData.Message}
        </p>

        <ul className="text-center lg:text-[24px] text-[20px] mb-4 space-y-2 pl-4">
          {popupData.Offer?.map((offer, index) => (
            <li key={index}>
              {offer.emoji} <strong>{offer.text}</strong> – Use code:{" "}
              <strong>{offer.code}</strong>
            </li>
          ))}
        </ul>

        <h2 className="lg:text-[30px] text-2xl font-bold mb-4">
          {popupData.Headline}
        </h2>

        <div className="button-box flex flex-col justify-center items-center md:gap-6 gap-3 flex-wrap">
          {popupData.button?.map((btn, index) => (
            <a
              key={index}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] font-semibold text-decoration-none leading-[20px] pt-[21px] pr-[32px] pl-[32px] pb-[21px] inline-block"
              style={{
                backgroundColor: btn.bg,
                color: btn.color,
                fontSize: "18px",
              }}
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

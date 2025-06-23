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
        className="relative bg-[#1c1c1c] text-white w-[100%] lg:max-w-3xl max-h-[90vh] overflow-y-auto 
        px-4 py-6 lg:py-12 md:px-6 rounded-lg shadow-lg text-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-4 
        overscroll-contain touch-auto"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-4xl font-bold"
          onClick={() => setShow(false)}
        >
          <X className="bg-primary rounded-full p-1 md:size-7 size-6" />
        </button>

        <p className="md:text-[25px] text-[20px] my-8 font-[400]">
          ⏰ It's 20:30! And time is running out. <br />
          Unlock your next trading level before the clock hits zero.
        </p>
        <ul className="text-center lg:text-[24px] text-[20px] mb-4 space-y-2 pl-4">
          <li>
            🔹 <strong>20% OFF Instant Funding</strong> – Use code:{" "}
            <strong>INSTAFUND20</strong>
          </li>
          <li>
            🔸 <strong>30% OFF All Other Challenges</strong> – Use code:{" "}
            <strong>MIDYEAR</strong>
          </li>
        </ul>
        <h2 className="lg:text-[30px] text-2xl font-bold mb-4">
          📈 Take the deal. Make the move
        </h2>
        <div className="button-box flex flex-col justify-center items-center md:gap-6 gap-3 flex-wrap">
          <a
            href="https://discord.gg/W8hmTwRwk4"
            target="_blank"
            rel="noopener"
            className="bg-[#00aef0] lg:text-[20px] text-[18px] text-white   rounded-[6px] font-semibold text-decoration-none leading-[20px] pt-[21px] pr-[32px] pl-[32px] pb-[21px] inline-block mt-6"
          >
            JOIN OUR DISCORD
          </a>
          <a
            href="https://fundedlakedashboard.propaccount.com/en/sign-in"
            target="_blank"
            rel="noopener"
            className="bg-yellow-400 lg:text-[20px] text-[18px] text-black font-semibold rounded-[6px] text-decoration-none leading-[20px] pt-[21px] pr-[32px] pl-[32px] pb-[21px] inline-block"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default GiveawayPopup;

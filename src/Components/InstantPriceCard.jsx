import { useState } from "react";
import { Info } from "lucide-react";

function InstantPriceCard() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (idx) => {
    setActiveTooltip((prev) => (prev === idx ? null : idx));
  };

  const evaluationSteps = [
    { label: "Profit Target", value: "-", description: "Funded account has no profit limit" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based, based on prior day balance (Hard Breach)" },
    { label: "Max Drawdown", value: "8%", description: "Equity-based, trailing account balance high water mark, locks in at starting account balance (Hard Breach). Account locks at starting balance at payout." },
    { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50" }, // no description
    { label: "Max Time", value: "-", description: "No Max Time requirements" },
    { label: "Flat for Weekend", value: "-", description: "All positions closed on Friday 3:45pm unless Weekend Hold add-on is purchased" },
    { label: "Payout Ratio", value: "-", description: "Can increase to 90% with purchase of add-on" },
  ];

  return (
    <div>
      <div className="mt-12 w-[100%] mx-auto">
        <div className="evalution-phase flex flex-col justify-start items-start bg-primary group md:px-8 md:py-12 px-6 py-10">
          <h3 className="lg:text-4xl font-extrabold mb-4 uppercase text-white">
            INSTANT Phase
          </h3>
          <hr className="bg-white border border-white h-[1px] w-full my-8" />
          <ul className="flex w-full flex-col gap-6">
            {evaluationSteps.map((step, idx) => {
              const hasDescription = !!step.description;
              return (
                <li key={idx} className="relative flex items-start justify-between gap-10">
                  <div className="labels flex items-center justify-between w-[45%] text-sm gap-2 text-white">
                    {step.label}
                    {hasDescription ? (
                      <button onClick={() => handleTooltipToggle(idx)} className="relative group focus:outline-none">
                        <Info className="size-5 text-gray-300 cursor-pointer" />
                        {activeTooltip === idx && (
                          <div className="absolute z-50 -top-[80px] -left-[60px] bg-white text-black text-xs rounded p-3 w-60 shadow">
                            {step.description}
                          </div>
                        )}
                      </button>
                    ) : (
                      <Info className="size-5 text-gray-600 opacity-30 cursor-not-allowed" />
                    )}
                  </div>
                  <div className="values text-sm text-white">{step.value}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstantPriceCard;

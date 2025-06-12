import { useState } from "react";
import { Info } from "lucide-react";

function OneStepPriceCard() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (idx) => {
    setActiveTooltip((prev) => (prev === idx ? null : idx));
  };

  const evaluationSteps = [
    { label: "Profit Target", value: "10%", description: "10% Target of initial balance" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based, based on prior day balance (Hard Breach)" },
    { label: "Max Drawdown", value: "6%", description: "Equity-based, does not trail (Hard Breach)" },
    { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50" }, // no description
    { label: "Max Time", value: "-", description: "No Max Time requirements" },
  ];

  const fundedSteps = [
    { label: "Profit Target", value: "-", description: "Funded account has no profit limit" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based, based on prior day balance (Hard Breach)" },
    { label: "Max Drawdown", value: "6%", description: "Equity-based, does not trail (Hard Breach)" },
    { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50" }, // no description
    { label: "Max Time", value: "-", description: "No Max Time requirements" },
  ];

  const renderStepList = (steps, offset = 0) =>
    steps.map((step, idx) => {
      const index = idx + offset;
      const hasDescription = !!step.description;

      return (
        <li key={index} className="relative flex items-start justify-between gap-10">
          <div className="labels flex items-center justify-between w-[45%] text-sm gap-2 text-white">
            {step.label}
            {hasDescription ? (
              <button onClick={() => handleTooltipToggle(index)} className="relative group focus:outline-none">
                <Info className="size-5 text-gray-300 cursor-pointer" />
                {activeTooltip === index && (
                  <div className="absolute z-50 -top-[50px] -left-[60px] bg-white font-normal w-56 px-3 text-black text-xs rounded p-2 shadow">
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
    });

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12 lg:w-[80%] mx-auto">
        {/* Evaluation */}
        <div className="evalution-phase flex flex-col justify-start items-start bg-dark md:px-8 md:py-12 px-6 py-10">
          <h3 className="lg:text-[27px] font-extrabold mb-4 uppercase">
            <span className="text-[#00AEEF]">Evaluation</span> Phase
          </h3>
          <hr className="bg-blue-900 border border-primary h-[1px] w-full my-8" />
          <ul className="flex w-full flex-col gap-6">
            {renderStepList(evaluationSteps, 0)}
          </ul>
        </div>

        {/* Funded */}
        <div className="funded flex flex-col justify-start items-start bg-primary md:px-8 md:py-12 px-6 py-10">
          <h3 className="lg:text-[27px] font-extrabold mb-4 uppercase">
            <span className="text-white">FUNDED</span>
          </h3>
          <hr className="bg-white border border-white h-[1px] w-full my-8" />
          <ul className="flex w-full flex-col gap-6">
            {renderStepList(fundedSteps, evaluationSteps.length)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OneStepPriceCard;

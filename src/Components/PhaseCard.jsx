import { useState } from "react";
import { Info } from "lucide-react";

const PhaseCard = ({ title, highlight, steps, bg = "bg-dark", titleColor = "text-white", borderColor = "border-white" }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTooltipToggle = (idx) => {
    setActiveTooltip(prev => (prev === idx ? null : idx));
  };

  return (
    <div className={`flex flex-col justify-start items-start ${bg} group md:px-8 md:py-12 px-6 py-10`}>
      <h3 className={`text-[27px] font-extrabold mb-4 uppercase ${titleColor}`}>
        <span className={`${highlight}`}>{title}</span>
      </h3>
      <hr className={`border h-[1px] w-full my-8 ${borderColor}`} />

      <ul className="flex flex-col gap-6 w-full text-white">
        {steps.map((step, idx) => (
          <li key={idx} className="relative flex items-start justify-between gap-6 text-sm">
            <div className="flex items-center justify-between w-[55%] gap-2">
              {step.label}
              {step.description ? (
                <button onClick={() => handleTooltipToggle(idx)} className="relative">
                  <Info className="size:5 text-gray-300 cursor-pointer" />
                  {activeTooltip === idx && (
                    <div className="absolute z-50 -top-[50px] -left-[60px] bg-white font-normal w-56 px-3 text-black text-xs rounded p-2 shadow">
                      {step.description}
                    </div>
                  )}
                </button>
              ) : (
                <Info className="size:5 text-gray-600 opacity-30 cursor-default" />
              )}
            </div>
            <div>{step.value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhaseCard;

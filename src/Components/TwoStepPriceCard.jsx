import PhaseCard from "./PhaseCard";

function TwoStepPriceCard() {
  const onephase = [
    { label: "Profit Target", value: "8%", description: "8% target of initial balance"},
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based, based on prior day balance (Hard Breach)" },
    { label: "Max Drawdown", value: "8%", description: "Equity-based, does not trail (Hard Breach)"},
    { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)"},
    { label: "Leverage", value: "1:50"},
    { label: "Max Time", value: "-", description: "No Max Time requirements"},
  ];

  const secondphase = [
    { label: "Profit Target", value: "5%", description: "5% target of initial balance" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based, based on prior day balance (Hard Breach)" },
    { label: "Max Drawdown", value: "8%", description: "Equity-based, does not trail (Hard Breach)"},
    { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50"},
    { label: "Max Time", value: "-", description: "Max Time requirements" },
  ];

  const fundedSteps = [
    { label: "Profit Target", value: "5%", description: "Funded account has no profit limit" },
    { label: "Daily Loss Limit", value: "5%", description: "Equity-based, based on prior day balance (Hard Breach)" },
    { label: "Max Drawdown", value: "8%", description: "Equity-based, does not trail (Hard Breach)"},
    { label: "Inactivity Period", value: "30 Days", description: "Must place trade (Hard Breach)" },
    { label: "Leverage", value: "1:50"},
    { label: "Max Time", value: "-", description: "Max Time requirements" },
  ];

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-12 lg:w-[100%] mx-auto">
      <PhaseCard title="PHASE ONE" highlight="text-[#00AEEF]" steps={onephase} />
      <PhaseCard title="PHASE TWO" highlight="text-[#00AEEF]" steps={secondphase} />
      <PhaseCard title="FUNDED" highlight="text-white" steps={fundedSteps} bg="bg-primary" titleColor="text-white" borderColor="border-white" />
    </div>
  );
}

export default TwoStepPriceCard;

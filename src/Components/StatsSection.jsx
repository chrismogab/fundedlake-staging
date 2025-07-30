import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircleDollarSign, Gift, ChartNoAxesCombined } from 'lucide-react';

const stats = [
  {
    icon: <CircleDollarSign className="size-12" />, // replace with your icon or image
    label: "Active Traders",
    value: 100,
    suffix: "+",
  },
  {
    icon: <Gift className="size-12" />,
    label: "Funded Traders",
    value: 20,
    suffix: "+",
  },
  {
    icon: <ChartNoAxesCombined className="size-12" />,
    label: "Payout Processed",
    value: 15,
    suffix: "K+",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-dark py-12 px-4 md:px-8">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-4 text-primary">{stat.icon}</div>
            <div className="text-5xl font-bold text-primary">
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                />
              )}
            </div>
            <p className="text-2xl mt-4 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

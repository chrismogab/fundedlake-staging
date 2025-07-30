import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function InvestOptions() {
  return (
    <section className="bg-black text-white lg:py-24 md:py-10 py-4 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        INVEST IN ANY <span className="text-cyan-500">MANNER</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Forex */}
        <motion.div
          className="bg-dark p-6 rounded-xl shadow hover:shadow-lg transition"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          <div className="text-4xl mb-4">🌍</div>
          <p className="text-lg font-medium">Forex</p>
        </motion.div>

        {/* Metal */}
        <motion.div
          className="bg-dark p-6 rounded-xl shadow hover:shadow-lg transition"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.15}
        >
          <div className="text-4xl mb-4">🪙</div>
          <p className="text-lg font-medium">Metal</p>
        </motion.div>

        {/* Crypto */}
        <motion.div
          className="bg-dark p-6 rounded-xl shadow hover:shadow-lg transition"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.3}
        >
          <div className="text-4xl mb-4">💰</div>
          <p className="text-lg font-medium">Crypto</p>
        </motion.div>

        {/* Indices */}
        <motion.div
          className="bg-dark p-6 rounded-xl shadow hover:shadow-lg transition"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.45}
        >
          <div className="text-4xl mb-4">📈</div>
          <p className="text-lg font-medium capitalize">Indices</p>
        </motion.div>

        {/* Commodities */}
        <motion.div
          className="bg-dark p-6 rounded-xl shadow hover:shadow-lg transition"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.6}
        >
          <div className="text-4xl mb-4">🚛</div>
          <p className="text-lg font-medium">Commodities</p>
        </motion.div>

      </div>
    </section>
  );
}

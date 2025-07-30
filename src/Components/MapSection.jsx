import { motion } from "framer-motion";
import globeImg from "../assets/globe.png"; // use the globe image you have



const MapSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center font-lexend">
      {/* Left Side */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full md:max-w-[600px] mx-auto"
      >
        <img src={globeImg} alt="Globe" className="w-full" />

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          FUNDING TRADERS <br /> ALL OVER THE WORLD
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          At FundedLake, we are proud to say that we empower traders over 20+ countries and COUNTING.
          Our growing international presence proves that great trading opportunities know no borders.
        </p>
        <a
          href="#about"
          className="text-blue-400 underline font-medium hover:text-blue-600 transition"
        >
          Find out more about us.
        </a>
      </motion.div>
    </section>
  );
};

export default MapSection;

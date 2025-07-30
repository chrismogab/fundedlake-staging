import { motion } from "framer-motion";
import globeImg from "../assets/globe2.png"; // use the globe image you have

const locations = [
  { country: "Canada", flag: "🇨🇦", x: "top-[8%]", y: "left-[14%]" },
  { country: "USA", flag: "🇺🇸", x: "top-[40%]", y: "left-[10%]" },
  { country: "UK", flag: "🇺🇸", x: "top-[14%]", y: "left-[54%]" },
  { country: "Kuwait", flag: "🇰🇼", x: "top-[32%]", y: "left-[73%]" },
  { country: "UAE", flag: "🇦🇪", x: "top-[52%]", y: "left-[63%]" },
  { country: "Ghana", flag: "🇬🇭", x: "top-[72%]", y: "left-[20%]" },
  { country: "India", flag: "🇮🇳", x: "top-[75%]", y: "left-[70%]" },
];

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

        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className={`absolute ${loc.x} ${loc.y} bg-transparent text-white text-sm px-2 py-1 rounded-tl-lg rounded-tr-md rounded-br-md whitespace-nowrap`}
          >
            <span className="mr-1">{loc.flag}</span> {loc.country}
          </motion.div>
        ))}
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

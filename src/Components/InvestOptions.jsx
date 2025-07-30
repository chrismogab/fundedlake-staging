import { motion } from "framer-motion";
import forexIcon from "../assets/icons/globe-icon.png";
import metalIcon from "../assets/icons/metal-icon.png";
import cryptoIcon from "../assets/icons/crypto-icon.png";
import indicesIcon from "../assets/icons/indices-icon.png";
import commoditiesIcon from "../assets/icons/commodities.png";
import styled from "styled-components";

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
      <h2 class="text-center mb-16 lg:text-6xl md:text-4xl text-3xl font-bold">
        TRADE ANY MARKET, <span className="text-primary"> YOUR WAY </span>
      </h2>

      <div className="row flex md:flex-row flex-col justify-between items-center md:max-w-5xl mx-auto gap-5">
        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="bg" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={forexIcon} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Forex</h3>
            </div>
          </motion.div>
        </StyledWrapper>

        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.15}
          >
            <div className="bg" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={metalIcon} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Metal</h3>
            </div>
          </motion.div>
        </StyledWrapper>
        <StyledWrapper className="w-full">
          <motion.div className="card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}>
            <div className="bg" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={cryptoIcon} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Crypto</h3>
            </div>
          </motion.div>
        </StyledWrapper>
      </div>
      <div className="row mt-7 flex md:flex-row flex-col justify-between items-center md:max-w-5xl mx-auto gap-5">
        <div className="w-[30%]"></div>

        <StyledWrapper className="w-full">
          <motion.div
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.45}
          >
            <div className="bg" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={indicesIcon} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">Indices</h3>
            </div>
          </motion.div>
        </StyledWrapper>
        <StyledWrapper className="w-full">
          <motion.div className="card"
          variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.6}
          >
            <div className="bg" />
            <div className="blob" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <img src={commoditiesIcon} alt="" />
              <h3 className="text-white text-2xl font-bold mt-6">
                Commodities
              </h3>
            </div>
          </motion.div>
        </StyledWrapper>

        <div className="w-[30%]"></div>
      </div>
    </section>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    z-index: 111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 97%;
    height: 240px;
    z-index: 2;
    background: #181818;
    backdrop-filter: blur(24px);
    border-radius: 20px;
    overflow: hidden;
    outline: 4px solid #022150;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 150px;
    border-radius: 50%;
    background-color: #fcaf17;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

import heroVideo from "../assets/hero-background-video1.mp4";
import Features from "../Components/Features";
import CertificateMarqueeSlider from "../Components/CertificateMarqueeSlider";
import PriceTab from "../Components/PriceTab";
import logo from "../assets/logo.webp";
import blueArrow from "../assets/icons/blue-arrow-icon.png";
import TrustPilotMarquee from "../Components/TrustPilotMarquee";
import WorkSteps from "../Components/workSteps";

function Home() {
  return (
    <>
      <div className="Main-wrapper">
        {/* Hero Section */}

        <div className="hero-section relative w-full h-[80vh] md:h-[60vh] lg:h-auto lg:py-20 overflow-hidden flex items-center justify-center">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#181818] to-transparent z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 py-10">
            <h2 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight">
              WHERE{" "}
              <span className="text-primary">
                TRADERS
              </span>
              <br />
              EMPOWER{" "}
              <span className="text-primary">
                WORLD
              </span>
            </h2>

            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mt-6 font-medium">
              “Lightning-fast payouts, instant funding, no hidden rules or
              consistency requirements - take on challenges with up to $400,000
              in capital!”
            </p>

            {/* Logo */}
            <img
              src={logo}
              alt="Logo"
              className="w-[50%] sm:w-[30%] lg:w-[20%] mt-6"
            />

            {/* Button with Arrow */}
            <div className="relative mt-10">
              <img
                src={blueArrow}
                alt="arrow"
                className="absolute w-20 right-[-8rem] top-[-3rem] hidden lg:block"
              />
              <a
                href="https://fundedlakedashboard.propaccount.com/en/affiliates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-b from-[#006BCB] to-[#0F425E] hover:scale-105 duration-300 border border-white rounded-md px-6 py-4">
                  JOIN OUR DISCORD COMMUNITY
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Section */}

        <div class="feature-section font-lexend bg-blackish">
          <Features />
        </div>

        {/* Steps Section */}

        <div className="bg-blackish lg:py-10 md:py-6 py-6 font-lexend">
          <h2 className="text-white lg:text-5xl md:4xl text-3xl font-bold uppercase text-center leading-[1.2em] -mt-5">
            how it works
          </h2>
          <WorkSteps />
        </div>

        {/* Price Tab Section */}

        <div class="price-table-section font-lexend bg-blackish">
          <PriceTab />
        </div>

        {/* Certificate of withdrawl Section */}

        <div className="certificate-section">
          <CertificateMarqueeSlider />
        </div>

        {/* Trade World Section */}

        <div class="trade-world-section font-lexend bg-blackish text-white">
          <div class="container w-full max-w-6xl h-100 mx-auto px-4 py-4 lg:px-0 lg:py-16">
            <div class="flex flex-wrap w-full lg:mb-20 mb-10 flex-col items-center text-center">
              <h2 class="sm:text-[50px] leading-[1.1em] text-3xl font-bold title-font mb-2 text-white">
                ENABLING
                <span className="text-gredient text-primary"> TRADERS
                </span>
                <br /> AROUND THE
                <span className="text-gredient text-primary"> WORLD
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-[872px] mx-auto">
              <div className="col1 flex items-center justify-start flex-col lg:px-8 lg:py-20 px-4 py-10  rounded-md lg:gap-7 gap-6 bg-dark">
                <a
                  href="https://discord.gg/W8hmTwRwk4"
                  className="col1-icon lg:size-[100px] w-16"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-discord"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full hover:fill-primary duration-200"
                    fill="#fff"
                  >
                    <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                  </svg>
                </a>
                <h3 className="text-[18px] mt-4 font-bold text-primary">
                  JOIN OUR SERVER
                </h3>
                <hr className="bg-white h-[1px] w-full"></hr>
                <h4 className="text-[21px] font-bold text-center">
                  Discord Community
                </h4>
                <p className="text-center lg:w-[80%] text-[12px]">
                  Join the fastest growing Trading Community Discord server to
                  get the latest updates, news and more. Join our discord for
                  live support and chat with a live customer support agent!
                </p>
              </div>
              <div className="col2 flex items-center justify-start flex-col lg:px-8 lg:py-20 px-4 py-10  rounded-md lg:gap-7 gap-6 bg-dark">
                <a href="#" className="col2-icon lg:size-[100px] w-16">
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-headset"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full hover:fill-primary duration-200"
                    fill="#fff"
                  >
                    <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                  </svg>
                </a>
                <h3 className="text-[18px] mt-4 font-bold text-primary">
                  GET ASSISTANCE
                </h3>
                <hr className="bg-white h-[1px] w-full"></hr>
                <h4 className="text-[21px] font-bold text-center">
                  Round the Clock Support
                </h4>
                <p className="text-center lg:w-[80%] text-[12px]">
                  Email us and benefit from our 24/7 multi-lingual customer
                  support for our traders around the world. To chat with our
                  live agent join our discord channel!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Pilot Section */}

        <div className="trustpilot-section">
          <TrustPilotMarquee />
        </div>
      </div>
    </>
  );
}

export default Home;

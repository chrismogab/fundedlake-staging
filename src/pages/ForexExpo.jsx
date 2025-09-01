import { Helmet } from "react-helmet";
import CountDownSection from "../Components/CountDownSection";
import BecomePartnerForm from "../Components/BecomePartnerForm";
import BecomePartnerSlider from "../Components/BecomePartnerSlider";
import partnerIcon1 from "../assets/icons/partnerIcon1.png"
import partnerIcon2 from "../assets/icons/partnerIcon2.png"
import partnerIcon3 from "../assets/icons/partnerIcon3.png"
import heroVideo from "../assets/hero-background-video1.mp4";



const ForexExpo = () => {

  const items = [
    {
      icon: partnerIcon1,
      title: "LARGEST TRADING EXPO IN THE REGION",
      description:
        "Forex Expo Dubai is the Middle East’s most anticipated B2B & B2C forex event, uniting traders, brokers, IBs, fintech innovators, and investors under one roof.",
    },
    {
      icon: partnerIcon2,
      title: "MASSIVE GLOBAL REACH",
      description:
        "The 2025 edition expects to draw 20,000+ attendees from 50+ countries, over 200 exhibitors, and more than 100 expert speakers across finance, fintech, and trading tracks.",
    },
    {
      icon: partnerIcon3,
      title: "UNMATCHED OPPORTUNITY FOR EXPOSURE & CONNECTIONS",
      description:
        "Whether you're looking to gain visibility, grow partnerships, or connect with high-intent traders, this expo is where the industry converges.",
    },
  ];

  return (
    <div className="forexExpo-wrapper font-lexend">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Forex-expo - FundedLake</title>
        <meta
          name="description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <link rel="canonical" href="https://fundedlake.com/who-we-are/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Who We Are - FundedLake" />
        <meta
          property="og:description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <meta property="og:url" content="https://fundedlake.com/who-we-are/" />
        <meta property="og:site_name" content="FundedLake" />
        <meta
          property="article:modified_time"
          content="2025-04-11T06:43:34+00:00"
        />
        <meta
          property="og:image"
          content="https://fundedlake.com/wp-content/uploads/2025/04/favicon.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />
      </Helmet>

      <div
        className="relative bg-cover bg-center bg-no-repeat font-lexend text-white lg:min-h-[80vh]  flex items-center justify-center text-center px-4"  
      >
        {/* Background Video */}
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
        <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="w-full max-w-6xl mx-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-[40px] z-10">
            <div className="text-left flex flex-col items-start justify-center gap-[10px]">
              <h2 className="lg:text-6xl md:text-5xl text-[3.4rem] font-bold">FUNDEDLAKE</h2>
              <h3 className="lg:text-[3.2rem] md:text-5xl md:mt-0 -mt-5 text-[2.6rem] font-bold">AT FOREX EXPO</h3>
              <span className="bg-secondory lg:text-6xl text-5xl p-2 text-dark font-bold">DUBAI 2025</span>
              <p className="my-5 lg:w-[85%]">FundedLake is proud to be exhibiting at the 8th edition of Forex Expo Dubai, taking place on October 6–7 at the Dubai World Trade Centre. This premier event brings together over 250 leading forex and fintech brands and welcomes more than 30,000 traders, investors, fund managers, IBs, and affiliates from around the globe</p>
              <BecomePartnerForm partnerBtn="lg:texl-4xl md:text-2xl" />
            </div>
            <div className="w-full">
              <BecomePartnerSlider />
            </div>
              </div>
      </div>

     {/* ----Matter Section-------  */}

     <section className="bg-black text-white md:py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          WHY THIS MATTERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#171818] to-[#020d16] rounded-xl p-6 shadow-lg text-left"
            >
              <img className="w-[80px] my-6" src={item.icon} alt="" />
              <h3 className="text-lg font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ------ counter section ------ */}

    <section className="bg-black text-white pb-16 pt-2 px-6 text-center">
      {/* Countdown Timer */}
      <div className="bg-gray-900 border-[#00124b] border-2 md:w-[620px] rounded-xl p-6 inline-block">
        <CountDownSection />
      </div>

      {/* Booth Info */}
      <h2 className="text-2xl md:text-5xl font-bold mt-8">
        VISIT US AT <span className="text-blue-500">BOOTH 262</span>
      </h2>

      {/* Button */}
      {/* <button className="bg-yellow-500 text-black font-semibold mt-6 px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
        BECOME A PARTNER
      </button> */}
      <BecomePartnerForm partnerBtn="lg:text-4xl md:text-3xl mt-6" />

    </section>


    </div>
  );
};

export default ForexExpo;

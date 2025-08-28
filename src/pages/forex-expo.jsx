import backgroundImg from "../assets/who-we-are-main-bg.webp"; // replace with your correct image path
import { Helmet } from "react-helmet";

const WhoWeAre = () => {
  return (
    <div className="weAre-wrapper font-lexend">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Who We Are - FundedLake</title>
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
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[80vh]  flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-bold uppercase leading-tight">
            WHO <span className="text-blue-500">WE ARE</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed">
            At FundedLake, we believe in empowering traders by providing the
            capital they need to succeed. <br />
            Whether you’re an experienced trader or just starting out, our
            mission is to give you the financial backing and flexibility to
            trade with confidence.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            FundedLake is not just a funding partner — we’re seasoned traders
            who’ve built successful prop firms ourselves. <br />
            Our team knows the ins and outs of trading, and we’re committed to
            empowering traders like you to reach your full potential.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-dark -mt-14 text-white text-center py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold uppercase">
            FUNDEDLAKE <br />
            <span className="text-sky-500">MISSION</span>
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed">
            We’re here to revolutionize prop trading by offering traders a fair,
            transparent, <br className="hidden md:block" />
            and profitable opportunity to scale their skills.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Unlike traditional funding firms, we prioritize fast payouts, no
            restrictive rules, and instant funding
            <br className="hidden md:block" />
            so you can focus on what truly matters—growing your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default forex-expo;

// Modified Faq.jsx to include search functionality
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import backgroundImg from "../assets/faq-main-bg.webp";
import StepOneFaq from "../Components/StepOneFaq";
import StepTwoFaq from "../Components/SteptwoFaq";
import InstantFundingFaq from "../Components/InstantFundingFaq";
import GeneralQuestionFaq from "../Components/GeneralQuestionFaq";
import { Helmet } from "react-helmet";

function Faq() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="Faq-wrapper font-lexend">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="pingback" href="https://fundedlake.com/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>FAQs - FundedLake</title>
        <meta
          name="description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <link rel="canonical" href="https://fundedlake.com/faqs/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FAQs - FundedLake" />
        <meta
          property="og:description"
          content="FundedLake is a prop trading firm offering instant funding up to $400K, fast payouts, and flexible rules for traders of all levels."
        />
        <meta property="og:url" content="https://fundedlake.com/faqs/" />
        <meta property="og:site_name" content="FundedLake" />
        <meta
          property="article:modified_time"
          content="2025-05-31T17:13:31+00:00"
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
        <meta name="twitter:data1" content="42 minutes" />
      </Helmet>

      <div
        className="searchBox relative bg-cover bg-center bg-no-repeat text-white md:h-auto h-auto lg:pt-52 lg:pb-6  pt-24 md:py-16 py-2 flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold uppercase leading-tight">
            FREQUENTLY ASKED <span className="text-blue-500">QUESTIONS</span>
          </h1>
          <input
            className="w-full py-4 md:my-16 my-8 rounded-md px-2 text-black"
            type="search"
            name="search"
            id="search"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-dark text-white text-center pt-16 pb-6 px-4 md:px-8">
        <div className="faq-tabs max-w-4xl mx-auto">
          <Tabs>
            <TabList className="text-start justify-start flex md:flex-row flex-col lg:gap-5 md:gap-4 gap-0 text-black">
              <Tab
                className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-[20px] font-bold text-xl"
                selectedClassName="bg-primary text-white"
              >
                One Step
              </Tab>
              <Tab
                className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-[20px] font-bold text-lg"
                selectedClassName="bg-primary text-white"
              >
                Two Step
              </Tab>
              <Tab
                className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-[20px] font-bold text-lg"
                selectedClassName="bg-primary text-white"
              >
                instant funding
              </Tab>
              <Tab
                className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-[20px] font-bold text-lg"
                selectedClassName="bg-primary text-white"
              >
                general questions
              </Tab>
            </TabList>

            <TabPanel className="one-step text-start mt-10">
              <h3 className="md:text-3xl text-2xl font-bold">
                <span className="text-primary ">ONE</span> STEP QUESTIONS
              </h3>
              <StepOneFaq searchTerm={searchTerm} />
            </TabPanel>

            <TabPanel className="two-step text-start mt-10">
              <h3 className="md:text-3xl text-2xl font-bold">
                <span className="text-primary ">TWO</span> STEP QUESTIONS
              </h3>
              <StepTwoFaq searchTerm={searchTerm} />
            </TabPanel>

            <TabPanel className="instant-funding text-start mt-10">
              <h3 className="md:text-3xl text-2xl font-bold">
                <span className="text-primary ">INSTANT FUNDING</span> STEP
                QUESTIONS
              </h3>
              <InstantFundingFaq searchTerm={searchTerm} />
            </TabPanel>

            <TabPanel className="general-ques text-start md:mt-10 mt-5">
              <h3 className="md:text-3xl text-2xl font-bold">
                <span className="text-primary ">GENERAL</span> STEP QUESTIONS
              </h3>
              <GeneralQuestionFaq searchTerm={searchTerm} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Faq;

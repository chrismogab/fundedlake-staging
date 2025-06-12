import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import backgroundImg from "../assets/faq-main-bg.webp"; // replace with your correct image path
import StepOneFaq from '../Components/StepOneFaq';
import StepTwoFaq from '../Components/SteptwoFaq';
import InstantFundingFaq from '../Components/InstantFundingFaq';
import GeneralQuestionFaq from '../Components/GeneralQuestionFaq';

function Faq() {
  return (
    <div className="Faq-wrapper font-lexend">
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
            className="w-full py-4 md:my-16 my-8 rounded-md px-2"
            type="search"
            name="search"
            id="search"
            placeholder="Search FAQs..."
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-dark -mt-14 text-white text-center py-10 px-4 md:px-8">
        <div className="faq-tabs max-w-4xl mx-auto">
          <Tabs>
            <TabList className='text-start justify-start flex md:flex-row flex-col gap-1 text-black'>
              <Tab className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-2xl text-xl border" selectedClassName="bg-primary text-white">One Step</Tab>
              <Tab className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-2xl text-xl border" selectedClassName="bg-primary text-white">Two Step</Tab>
              <Tab className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-2xl text-xl border" selectedClassName="bg-primary text-white">instant funding</Tab>
              <Tab className="p-4 md:w-[25%] md:h-36 h-24 uppercase text-center cursor-pointer hover:bg-primary bg-dark text-white flex items-center justify-center md:text-2xl text-xl border" selectedClassName="bg-primary text-white">general questions</Tab>
            </TabList>
            <TabPanel className="one-step text-start md:mt-10 mt-5">
              <h3 className='md:text-3xl text-2xl font-bold'><span className='text-primary '>ONE</span> STEP QUESTIONS</h3>         
              <StepOneFaq />   
            </TabPanel>
            <TabPanel className="two-step text-start md:mt-10 mt-5">
              <h3 className='md:text-3xl text-2xl font-bold'><span className='text-primary '>TWO</span> STEP QUESTIONS</h3>
              <StepTwoFaq />
            </TabPanel>
            <TabPanel className="instant-funding text-start md:mt-10 mt-5">
              <h3 className='md:text-3xl text-2xl font-bold'><span className='text-primary '>INSTANT FUNDING</span> STEP QUESTIONS</h3>
              <InstantFundingFaq />
            </TabPanel>
            <TabPanel className="general-ques text-start md:mt-10 mt-5">
              <h3 className='md:text-3xl text-2xl font-bold'><span className='text-primary '>GENERAL</span> STEP QUESTIONS</h3>
              <GeneralQuestionFaq />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Faq;

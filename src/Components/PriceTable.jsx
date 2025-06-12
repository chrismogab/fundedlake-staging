import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OneStepPriceCard from "./OneStepPriceCard";
import TwoStepPriceCard from "./TwoStepPriceCard";
import InstantPriceCard from "./InstantPriceCard";

export default () => (
  <Tabs className="priceTab md:text-[14px] font-bold text-sm text-white">
    <TabList className="priceTabUl">
      <Tab className="cursor-pointer md:p-6 p-4 bg-dark hover:bg-white duration-200 hover:text-dark rounded-none">
        ONE STEP
      </Tab>
      <Tab className="cursor-pointer md:p-6 p-4 bg-dark hover:bg-white duration-200 hover:text-dark rounded-none">
        TWO STEP
      </Tab>
      <Tab className="cursor-pointer md:p-6 p-4 bg-dark hover:bg-white duration-200 hover:text-dark rounded-none">
        INSTANT
      </Tab>
    </TabList>

    <TabPanel className="one-step InnerPriceTab mt-10 lg:text-lg">
      <Tabs>
        <TabList>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$10K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$25K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$50K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer leading-6">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-secondory">
              {" "}
              MOST POPULAR{" "}
            </span>
          </Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$250K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$400K</Tab>
        </TabList>
        <TabPanel className="10K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$75</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$190</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$375</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$750</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$3,600</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="two-step InnerPriceTab mt-10 lg:text-lg">
      <Tabs>
        <TabList>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$10K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$25K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$50K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer leading-6">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-secondory">
              MOST POPULAR
            </span>
          </Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$250K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$400K</Tab>
        </TabList>
        <TabPanel className="10K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$50</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$125</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=161" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$225</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=162" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$450</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=164" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$3,600</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=165" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="instant InnerPriceTab mt-10 lg:text-lg md:w-[471px] mx-auto">
      <Tabs>
        <TabList>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$5K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$10K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$25K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer">$50K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark cursor-pointer leading-6">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-secondory">
              MOST POPULAR
            </span>
          </Tab>
        </TabList>
        <TabPanel className="5K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$200</span> for
              <span className="text-primary"> 5K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=180" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="10K">
          <InstantPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$400</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=181" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$1,125</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=182" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2,500</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=183" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$5,000</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=184" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$3,600</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" target="_blank"
              className="bg-sky-500 hover:bg-white hover:text-black duration:300 text-white px-4 py-2 font-bold rounded text-[15px]"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
);

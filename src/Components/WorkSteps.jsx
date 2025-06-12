import graphImg from "../assets/steps-graph-new.png";
import dollarImg from "../assets/steps-dollar-icon.png";
import rightArrow from "../assets/icons/right-arrow.svg";

function WorkSteps() {
  return (
    <div className="bg-black  py-12 text-white flex flex-col md:flex-row justify-center items-stretch gap-6 md:px-4">
      <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-6 gap-4 lg:max-w-6xl md:w-full w-[95%] mx-auto">
        <div className="col relative lg:py-10 bg-gradient-to-b from-dark to-[#000c15] md:p-4 w-[100%] flex flex-col items-start md:gap-5 gap-3 justify-between rounded-md md:mt-0 mt-6">
          <div className="flex flex-col md:gap-6 gap-4 items-start">
            <span className="stepNum text-primary w-fit text-1xl py-1 px-4 rounded-lg border border-2-primary">
              STEP 1
            </span>
            <h3 className="text-primary text-2xl font-bold mt-4">
              EVALUATION PHASE
            </h3>
            <p className="lg:text-3xl md:text-2xl text-2xl font-bold">Choose Your Program</p>
            <ul className="text-[24px] list-disc list-inside">
              <li>Reach Profit Target</li>
              <li>Do Not Violate Max And Daily Drawdown</li>
            </ul>
          </div>
          <span className="text-primary font-medium text-3xl uppercase">
            Evalution phase
          </span>
          <img
            className="rightArrow w-[70px] absolute md:-right-5 lg:top-2/3 md:top-1/3 right-24 -bottom-24 z-50 md:rotate-0 rotate-90"
            src={rightArrow}
            alt=""
          />
        </div>
        <div className="col relative lg:py-10 bg-gradient-to-b from-dark to-[#000c15] md:p-4 w-[100%] flex flex-col items-start md:gap-5 gap-3 justify-between rounded-md md:mt-0 mt-6">
          <div className="flex flex-col md:gap-6 gap-4 items-start">
            <span className="stepNum text-primary w-fit text-1xl py-1 px-4 rounded-lg border border-2-primary">
              STEP 2
            </span>
            <h3 className="text-primary text-2xl font-bold mt-4">
              FUNDED PHASE
            </h3>
            <p className="lg:text-3xl md:text-2xl text-2xl font-bold">Earn as a Funded Trader</p>
            <span className="amount text-[36px] text-white">$109.200</span>
            <img className="md:w-[80px] w-[100px]" src={graphImg} alt="" />
          </div>
          <span className="text-primary font-medium text-3xl uppercase">
            Funded
          </span>
          <img
            className="rightArrow w-[70px] absolute md:-right-5 lg:top-2/3 md:top-1/3 right-24 -bottom-24 z-50 md:rotate-0 rotate-90"
            src={rightArrow}
            alt=""
          />
        </div>
        <div className="col relative lg:py-10 bg-gradient-to-b from-dark to-[#000c15] md:p-4 w-[100%] flex flex-col items-start md:gap-5 gap-3 justify-between rounded-md md:mt-0 mt-6">
          <div className="flex flex-col md:gap-6 gap-4 items-start">
            <span className="stepNum text-primary w-fit text-1xl py-1 px-4 rounded-lg border border-2-primary">
            STEP 3
          </span>
          <p className="lg:text-3xl md:text-2xl text-2xl font-bold mt-4">Recieve Your Payout</p>
          <img className="w-[100px]" src={dollarImg} alt="" />
          <ul className="text-[24px]">
            <li>Withdraw as soon as you get funded</li>
            <li>First payout is instant</li>
          </ul>
          </div>
          <span className="text-primary font-medium text-3xl uppercase">
            Payout
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkSteps;

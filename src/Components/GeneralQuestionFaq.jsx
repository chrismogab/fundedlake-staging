import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any icon
import clsx from "clsx"; // optional for conditional class

function GeneralQuestionFaq() {
  const faqs = [
    {
      question: "What is 1 lot equal to on the Trading Platform?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <ul className="list-disc list-inside">
            <li>Forex: 1 lot = $100k notional</li>
            <li>
              Index: 1 lot = 1 Contract
              <p>Exceptions: SPX500: 1 lot = 10 contracts JPN225: 1 lot = 500 contracts</p>
            </li>
            <li>Cryptos: 1 lot = 1 coin</li>
            <li>Silver: 1 lot = 5000 ounces</li>
            <li>Gold: 1 lot = 100 ounces</li>
            <li>Oil: 1 lot = 100 barrels</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is the policy on Prohibited Trading Activity?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            You are also prohibited from using any trading strategy that is
            expressly prohibited by the Company or the Liquidity Providers it
            uses. Such prohibited trading (“Prohibited Trading”) shall include,
            but not be limited to:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Exploiting errors or latency in the pricing and/or platform(s)
              provided by the Liquidity Provider
            </li>
            <li>Utilizing non-public and/or insider information</li>
            <li>Front-running of trades placed elsewhere</li>
            <li>
              Trading in any way that jeopardizes the relationship that the
              Company has with a Liquidity Provider or may result in the
              canceling of trades
            </li>
            <li>
              Trading in any way that creates regulatory issues for the
              Liquidity Provider
            </li>
            <li>
              Utilizing any third-party strategy, off-the-shelf strategy or one
              marketed to pass challenge accounts
            </li>
            <li>
              Utilizing one strategy to pass an assessment and then utilizing a
              different strategy in a funded account, as determined by the
              Company at their discretion.
            </li>
            <li>
              Attempting to arbitrage an assessment account with another account
              with the Company or any third-party company, as determined by the
              Company in its sole and absolute discretion.
            </li>
            <li>
              If the Company detects that your trading constitutes Prohibited
              Trading, your participation in the program will be terminated and
              may include forfeiture of any fees paid to the Company.
              Additionally, and before any Trader shall receive a funded
              account, the trading activity of the Trader under these Terms and
              Conditions shall be reviewed by both the Company and the Liquidity
              Provider to determine whether such trading activity constitutes
              Prohibited Trading. In the case of Prohibited Trading, the Trader
              shall not receive a funded account.
            </li>
            <li>
              Additionally, the Company reserves the right to disallow or block
              any Trader from participating in the program for any reason, in
              the Company’s sole and absolute discretion. To view all Prohibited
              Uses, please review our Terms and Conditions here,{" "}
              <a className="text-red-600" href="https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396">
                https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396
              </a>
            </li>
          </ul>
        </div>
      ),
    },

    {
      question:
        "Do we manipulate the pricing or executions you receive in your Funded Account?",
      answer:
        "No. We do not have any control over pricing from the liquidity provider or on the executions on your trades.",
    },

    {
      question: "Who is the counterparty to my trades?",
      answer:
        "For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by arm’s length third parties. This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.",
    },
    {
      question:
        "Do I have to use one of your accounts for the Assessment or can I use my own?",
      answer:
        "We have risk management software that is synced with the accounts we create. This allows us to analyze your performance in real time for achievements or rule violations. As such, you must use an account that we provide to you.",
    },
    {
      question: "What Countries are accepted?",
      answer:
        "Subject to compliance with applicable laws and regulations, traders from all countries, excluding OFAC listed countries, can take part in our program, unless otherwise limited at the Company’s discretion.",
    },
    {
      question: "What is the minimum age I must be to be part of your program?",
      answer:
        "You must be at least 18 years of age, or the applicable minimum legal age in your country, to purchase an assessment.",
    },
    {
      question: "Where do I track the progress of my account?",
      answer:
        "Upon purchasing an Assessment, you will receive access to a trader dashboard where you can monitor your Assessment and Funded Accounts. The dashboard is updated every time we calculate metrics, which occurs roughly every 60 seconds. It is your responsibility to monitor your breach levels.",
    },
    {
      question: "What Platform can I trade on?",
      answer:
        "Our technology is currently integrated with DXtrade, MatchTrader & cTrader platforms via GooeyTrade",
    },
    {
      question: "What products can I trade?",
      answer:
        "You can trade any products streamed by the Liquidity Provider into the available platforms, as such products may change from time to time. This includes FX pairs and CFD Indices, Commodities, Metals.",
    },

    {
      question: "What is the leverage?",
      answer:
        "We offer up to 50:1 leverage on Forex and Metals, up to 10:1 leverage on Indices, up to 5:1 leverage on Oil.",
    },
    {
      question: "What are the trading hours?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            Trading hours are generally set by the Liquidity Provider, unless
            set by our rules. We do not have any control over the trading hours.
            You can see the trading hours for each product by using the
            following methods:
          </p>
          <p>
            Trading hours are generally set by the Liquidity Provider, unless
            set by our rules. We do not have any control over the trading hours.
            You can see the trading hours for each product by using the
            following methods:
          </p>
        </div>
      ),
    },

    {
      question: "Do your accounts charge commissions?",
      answer:
        "Funded accounts receive the same pricing and commissions as charged by our Liquidity Provider to other, self-funded, retail trading accounts.",
    },
    {
      question: "Can I use an Automated Strategies?",
      answer:
        "Subject to our policy on Prohibited Trading as described below, you can trade using an automated strategy.",
    },
    {
      question: "Can I trade during News Events?",
      answer:
        "Trading within 3 minutes before or after a News Event is prohibited. If the Company determines that trading has, in fact, occurred during the News Event. Any traders identified as having trading during a News Event during the challenge phase are subject to having those trades removed, having the leverage on their account reduced or having their account breached altogether. The Company has sole and absolute discretion in determining what constitutes a News Event.",
    },
    {
      question: "How will I see the charge on my Statement?",
      answer: "Charges come across in the name of dashboardanalytix.com.",
    },
    {
      question: "How are taxes handled?",
      answer:
        "When trading a Funded Account for our firm, you are treated as an independent contractor. As a result, you are responsible for any and all taxes on your gains.",
    },
    {
      question: "How are affiliates credited?",
      answer:
        "Affiliates are credited for referrals when a user creates an account using a link or discount code provided by the Affiliate.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg bg-[#181818] text-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <ChevronDown
                className={clsx("w-5 h-5 transition-transform duration-300", {
                  "rotate-180": openIndex === index,
                })}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-[16px] whitespace-pre-line text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralQuestionFaq;

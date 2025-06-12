import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any icon
import clsx from "clsx"; // optional for conditional class

function InstantFundingFaq() {
  const faqs = [
    {
      question:
        "What is the difference between a Hard Breach and Soft Breach rule?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <ul className="list-disc list-inside">
            <li>
              Soft breach means that we will close all trades that have violated
              the rule. However, you can continue trading in your Instant Funded
              Account.
            </li>
            <li>
              Hard breach means that you violated the Daily Loss Limit or Max
              Drawdown rule, or Inactivity rule. These rules constitute a hard
              breach. In the event you have a hard breach, you will have your
              Funded Account taken away.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "How do you calculate the Daily Loss Limit?",
      answer:
        "The Daily Loss Limit is the maximum amount your account can lose on any given day. The Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. The Daily Loss Limit compounds with the increase in your account. Example: if your prior day’s end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new- day (5pm EST) daily loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000.",
    },
    {
      question: "How do you calculate the Maximum Trailing Drawdown?",
      answer:
        "The Maximum Trailing Drawdown is initially set at 8% and trails (using CLOSED BALANCE – NOT equity) your account until you have achieved a 8% return in your account. Once you have achieved an 8% return, the Maximum Trailing Drawdown no longer trails and is permanently locked in at your starting balance. Example: If your starting balance is $100,000, you can drawdown to $92,000 before you would violate the Maximum Trailing Drawdown rule. Then for example let’s say you take your account to $102,000 in CLOSED BALANCE. This is your new high-water mark, which would mean your new Maximum Trailing Drawdown would be $94,000. Next, let’s say you take your account to $108,000 in CLOSED BALANCE, which would be your new high-water mark. At this point your Maximum Trailing Drawdown would be locked in at your starting balance of $100,000. So, regardless of how high your account goes, you would only breach this rule if your account drew back down to $100,000 (note, you could still violate the daily drawdown). For example, if you take your account to $170,000, as long as you do not drawdown more than 5% in any given day, you would only breach if your account equity reaches $100,000.",
    },
    {
      question: "Can I hold positions over the weekend?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <ul className="list-disc list-inside">
            <li>
              We require all trades to be closed by 3:45 PM EST on the last
              trading day of the week, typically Friday. However, in cases where
              markets close early or are not open on a Friday, it is the
              trader’s responsibility to ensure all trades are closed before the
              weekend based on the adjusted market schedule. Any trades left
              open after this time will be automatically closed. Note, this is
              considered a soft breach, and you will be able to continue trading
              once the markets reopen.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "How do I withdraw the gains in my Funded Account?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            Traders can request a withdrawal of the profits in their funded
            account through their trader dashboard at any time. However,
            withdrawals are limited to one request every 30 days.{" "}
            <span className="underline">
              The minimum withdrawal amount is the greater of $100 or 1% of the
              account’s starting balance.
            </span>{" "}
            When a withdrawal is approved, we will also withdraw our share of
            the gains, and your max trailing drawdown will lock in at your
            starting balance. The trailing drawdown does not reset when you
            request a withdrawal. Example: You have taken an account from
            $100,000 to $120,000. You then request a withdrawal of $16,000. In
            this scenario, you will receive $12,800 and we would retain $3200.
            This would also take the balance of the account down to $104,000,
            and your Maximum Trailing Drawdown is locked in at $100,000. So, you
            would have $4,000 maximum you could lose on the account before it
            would violate the Maximum Trailing Drawdown rule. If you take a full
            withdrawal of the gains in your Funded Account, the Maximum Trailing
            Drawdown will lock in at the starting balance and trigger the
            Maximum Trailing Drawdown breach rule, resulting in the forfeiture
            of your Funded Account.
          </p>
        </div>
      ),
    },
    {
      question: "Is there a breach for inactivity?",
      answer:
        "Yes. If you do not place a trade at least once every 30 days on your account, we will consider you inactive and your account will be breached.",
    },
    {
      question: "What is the Instant Funding Plan?",
      answer:
        "The Instant Funding Plan allows traders to start with a fully funded account without needing to complete an assessment phase.",
    },
    {
      question: "How Long does it take to receive my Instant Funded Account?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <ul className="list-inside">
            <li>
              Upon completion of payment, we provide you with an Instant Funding
              account, backed by our capital. You will receive an email with
              instructions on how to access this account on the platform you
              chose at checkout.
            </li>
            <li>
              The capital in your Funded Account is notional and may not match
              the amount of capital on deposit with the Broker. A Funded Account
              is notionally funded when actual funds in the account (i.e., the
              equity in a Funded Account represented by the amount of capital)
              differs from the nominal account size (i.e., the size of the
              Funded Account that establishes the initial account value and
              level of trading). Notional funds are the difference between
              nominal account size and actual capital in a Funded Account.
            </li>
            <li>
              Use of notional funding does not change the trading level or that
              the account may trade in any manner differently than if notional
              funds were not used. In particular, the same conditions and rules
              applicable to a soft breach, hard breach, Daily Loss Limit, Max
              Trailing Drawdown and position limits apply.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "Do I need to complete KYC or sign a trader contract to start trading in an Instant Funding Plan?",
      answer:
        "A Trading contract and KYC are both required, however, to start trading using our Instant Funding Plan, these steps won’t need to be completed until you request a withdrawal.",
    },
    {
      question: "What happens if I do not pass KYC?",
      answer:
        "If you do not pass the KYC process when requesting a withdrawal, the withdrawal will be rejected, and your account will be closed. We encourage you to ensure you can meet KYC requirements before opting for the Instant Funding Plan. ",
    },
    {
      question:
        "Do we manipulate the pricing or executions you receive in your Instant Funded Account?",
      answer:
        "No. We operate at an arm’s length with the Broker. All market pricing and trade executions are provided by the Broker and are not changed or modified by us. Additionally, we do not markup transaction costs established by the Broker through adjusting bid-offer spreads, markups/markdowns, commission charges or swaps.",
    },
    {
      question: "Am I subject to any position limits?",
      answer:
        "The maximum position that you may open is determined by your available margin. We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.",
    },
    {
      question:
        "If I have a hard breach in my Funded Account and there are gains in the account, do I forfeit those gains?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            If you have gains in your Funded Account at the time of a hard
            breach, you will still receive your portion of those gains.
          </p>
          <p>
            For example, if you have a $100,000 account and you grow that
            account to $110,000. Should you then have a hard breach we would
            close the account. Of the $10,000 in gains in your Funded Account,
            you would be paid your portion thereof.
          </p>
        </div>
      ),
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

export default InstantFundingFaq;

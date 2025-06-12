import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any icon
import clsx from "clsx"; // optional for conditional class

function StepOneFaq() {

  const faqs = [
    {
      question:
        "What is the difference between a Hard Breach and Soft Breach rule?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <ul className="list-disc list-inside">
            <li>
              Soft breach means that we will close all trades that have violated
              the rule. However, you can continue trading in your Assessment or
              Funded Account.
            </li>
            <li>
              Hard breach means that you violated either the Daily Loss Limit or
              Max Drawdown rule. Both rules constitute a hard breach. In the
              event you have a hard breach, you will fail the Assessment or have
              your Funded Account taken away.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "How do you calculate the Daily Loss Limit?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            The Daily Loss Limit is the maximum your account can lose in any
            given day. Daily Loss Limit is calculated using the previous day
            balance which resets at 5 PM EST. Daily Stop compounds with the
            increase in your account.
          </p>
          <p>
            <span className="font-bold text-orange-500">Example:</span> if your
            prior day’s end of day balance (5pm EST) was $100,000, your account
            would violate the daily stop loss limit if your equity reached
            $95,000 during the day. If your floating equity is +$6,000 on a
            $100,000 account, your new- day (5pm EST) max loss is based on your
            balance from the previous day ($100,000). So, your daily loss limit
            would still be $95,000.
          </p>
        </div>
      ),
    },
    {
      question: "How do you calculate the Max Drawdown?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            Maximum drawdown is the maximum your account can drawdown before you
            would hard breach your account. When you open the account, your
            Maximum Drawdown is set at 8% of your starting balance. This 8% is
            static and does not trail.
          </p>
        </div>
      ),
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
      question: "Is there a breach for inactivity?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            Yes. We will consider you inactive and your account will be breached
            if you do not have any trading activity on your account for 30
            consecutive days.
          </p>
        </div>
      ),
    },
    {
      question:
        "Once I pass the Assessment am I provided with a demo or funded account?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            Once you pass the Assessment, we provide you with a funded account,
            backed by our capital. The capital in your funded Account is
            notional and may not match the amount of capital on deposit with the
            Liquidity Provider. A Funded Account is notionally funded when
            actual funds in the account (i.e., the equity in a Funded Account
            represented by the amount of capital) differs from the nominal
            account size (i.e., the size of the Funded Account that establishes
            the initial account value and level of trading). Notional funds are
            the difference between nominal account size and actual capital in a
            funded account.
            <br />
            Use of notional funding does not impact your trading conditions in
            any way.
          </p>
        </div>
      ),
    },
    {
      question: "Am I subject to any position limits?",
      answer:
        "The maximum position that you may open is determined by your available margin. We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the funded account will be halted. We or the Liquidity Provider reserve the right to refuse to accept any order.",
    },
    {
      question: "What are the rules for the funded account?",
      answer:
        "The rules for the funded account are exactly the same as your Assessment account. However, with a funded account, there is no profit target.",
    },
    {
      question:
        "If I have a hard breach in my funded account and there are gains in the account, do I forfeit those gains?",
      answer: (
        <div className="space-y-4 text-white text-[16px] leading-relaxed">
          <p>
            If you have gains in your funded account at the time of a hard
            breach, you will still receive your portion of those gains. 
            <br />
            For example, if you have a $100,000 account and you grow that account to
            $110,000. Should you then have a hard breach we would close the
            account. Of the $10,000 in gains in your funded account, you would
            be paid your portion thereof.
          </p>
        </div>
      ),
    },
    {
      question: "When can I withdraw the gains in my funded account and how does that affect my Maximum Drawdown?",
      answer:
        "Your first withdrawal can be requested at any time, subject to an 80/20 profit split. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal. Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000. In this scenario, you will receive $12,800 and we would retain $3,200. This would also take the balance of the account down to $104,000, and your Maximum Drawdown will remain$92,000. So, you would have $12,000 maximum you could lose on the account before it would violate the Maximum Drawdown rule. If you take a full withdrawal of the gains in your Funded Account, the Maximum Drawdown will still remain at $92,000.",
    },
    {
      question: "How do I withdraw the gains in my funded account?",
      answer:
        "Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal. When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.",
    },
    {
      question: "How Long does it take to receive my funded account?",
      answer:
        "Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your “Know Your Customer” verification and your “Trader Agreement”. Once both are completed and supporting documentation is provided, your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.",
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

export default StepOneFaq;

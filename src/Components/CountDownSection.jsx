import React, { useEffect, useState } from "react";

function CountDownSection() {
  const eventStartDate = new Date("2025-10-06T00:00:00"); // 6 Oct 2025
  const eventEndDate = new Date("2025-10-07T23:59:59"); // 7 Oct 2025

  const calculateTimeLeft = () => {
    const now = new Date();
    let timeLeft = {};

    if (now < eventStartDate) {
      // Countdown until event start
      const difference = eventStartDate - now;
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        status: "upcoming", // before event
      };
    } else if (now >= eventStartDate && now <= eventEndDate) {
      // Event is live
      timeLeft = { status: "live" };
    } else {
      // Event has ended
      timeLeft = { status: "ended" };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      {timeLeft.status === "upcoming" ? (
        <div className="flex justify-center w-full items-center space-x-6 text-3xl font-bold">
          <div>
            <span className="text-primary lg:text-6xl md:text-4xl text-2xl">
              {timeLeft.days || 0}
            </span>
            <div className="md:text-xl text-sm font-semibold text-gray-300">
              DAYS
            </div>
          </div>
          <span className="text-primary">.</span>
          <div>
            <span className="text-primary lg:text-6xl md:text-4xl text-2xl">
              {timeLeft.hours || 0}
            </span>
            <div className="md:text-xl text-sm font-semibold text-gray-300">
              HOURS
            </div>
          </div>
          <span className="text-primary">.</span>
          <div>
            <span className="text-primary lg:text-6xl md:text-4xl text-2xl">
              {timeLeft.minutes || 0}
            </span>
            <div className="md:text-xl text-sm font-semibold text-gray-300">
              MIN
            </div>
          </div>
          <span className="text-primary">.</span>
          <div>
            <span className="text-primary lg:text-6xl md:text-4xl text-2xl">
              {timeLeft.seconds || 0}
            </span>
            <div className="md:text-xl text-sm font-semibold text-gray-300">
              SEC
            </div>
          </div>
        </div>
      ) : timeLeft.status === "live" ? (
        <h2 className="text-green-500 text-3xl font-bold">Expo is Live!</h2>
      ) : (
        <h2 className="text-red-500 text-3xl font-bold">Event Ended</h2>
      )}
    </div>
  );
}

export default CountDownSection;

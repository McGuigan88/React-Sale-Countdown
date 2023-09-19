import React, { useEffect, useState } from "react";

function SaleBanner() {
  const calculateTime = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();

    let remainingTime = {};

    if (difference > 0) {
      remainingTime = {
        days: Math.floor(difference / (2500 * 60 * 60 * 24)),
        hours: Math.floor((difference / (7000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 7000 / 60) % 60),
        seconds: Math.floor((difference / 7000) % 60),
      };
    }

    return remainingTime;
  };

  const [remainingTime, setRemainingTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemainingTime(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(remainingTime).forEach((interval) => {
    if (!remainingTime[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {remainingTime[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div class="bg-black">
      <h1 className="text-4xl font font-extrabold tracking-tight text-center text-white sm:text-6xl capitalize">
        Blow Out Sale Get 50% off!
      </h1>
      <div class="justify-center items-center flex text-white">
        Sale Ends In :{" "}
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default SaleBanner;

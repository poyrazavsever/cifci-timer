import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date('2025-09-01T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-4 md:gap-8 p-4 md:p-8">

      <div className="flex flex-col items-center">
        <div className="w-16 md:w-24 h-16 md:h-24 rounded-full border-2 border-green-50 flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-light text-green-50">{timeLeft.days}</span>
        </div>
        <span className="text-sm md:text-base mt-2 text-green-50">GÜN</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 md:w-24 h-16 md:h-24 rounded-full border-2 border-green-50 flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-light text-green-50">{timeLeft.hours}</span>
        </div>
        <span className="text-sm md:text-base mt-2 text-green-50">SAAT</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 md:w-24 h-16 md:h-24 rounded-full border-2 border-green-50 flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-light text-green-50">{timeLeft.minutes}</span>
        </div>
        <span className="text-sm md:text-base mt-2 text-green-50">DAKİKA</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 md:w-24 h-16 md:h-24 rounded-full border-2 border-green-50 flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-light text-green-50">{timeLeft.seconds}</span>
        </div>
        <span className="text-sm md:text-base mt-2 text-green-50">SANİYE</span>
      </div>

    </div>
  );
};

export default CountdownTimer;

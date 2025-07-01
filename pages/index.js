import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-300 flex flex-col items-center justify-center p-4">

        <div className="mb-8">
          <Image src="/logo.png" alt="Logo" width={150} height={150} className="rounded-lg" />
        </div>

        <div className="text-center">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 p-16 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-gray-700">{timeLeft.days}</div>
              <div className="text-gray-600">Gün</div>
            </div>
            <div className="bg-green-50 p-16 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-gray-700">{timeLeft.hours}</div>
              <div className="text-gray-600">Saat</div>
            </div>
            <div className="bg-green-50 p-16 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-gray-700">{timeLeft.minutes}</div>
              <div className="text-gray-600">Dakika</div>
            </div>
            <div className="bg-green-50 p-16 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-gray-700">{timeLeft.seconds}</div>
              <div className="text-gray-600">Saniye</div>
            </div>
          </div>
        </div>

    </div>
  );
}

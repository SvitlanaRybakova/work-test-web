'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';

const MobileOnboarding = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('munchies_onboarding_seen');
    if (!hasSeenOnboarding) {
      setIsVisible(true);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem('munchies_onboarding_seen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-green-800 z-[9999] flex flex-col justify-between p-8 text-white select-none md:hidden animate-fadeIn">
      <Navbar variant="white" />

      <div className="flex flex-col mb-16">
        {/* TODO: implement Sanity CMS */}
        <h1 className="text-5xl font-extrabold mb-4">
          Treat <br /> yourself.
        </h1>
        {/* TODO: implement Sanity CMS */}
        <p className="text-sm font-normal text-white max-w-[280px] leading-relaxed tracking-wide">
          Find the best restaurants in your city and get it delivered to your
          place!
        </p>
      </div>

      <div className="mb-4">
        {/* TODO: implement Sanity CMS */}
        <button
          onClick={handleContinue}
          className="w-full py-3.5 bg-transparent border border-white rounded-xl text-base font-bold text-white hover:bg-white/10 active:bg-white/20 transition duration-150 cursor-pointer text-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MobileOnboarding;

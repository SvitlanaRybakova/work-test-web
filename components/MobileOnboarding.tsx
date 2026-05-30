'use client';

import { useEffect, useState } from 'react';
import reactStringReplace from 'react-string-replace';

import { useAppContent } from '@/app/hooks/useAppContent';
import Navbar from './Navbar';

const MobileOnboarding = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { data, isLoading } = useAppContent();

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('munchies_onboarding_seen');
    if (!hasSeenOnboarding) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible || isLoading || !data?.onboarding) return null;
  const { onboarding } = data;

  const handleContinue = () => {
    localStorage.setItem('munchies_onboarding_seen', 'true');
    setIsVisible(false);
  };

  return (
    <div className="fixed inset-0 bg-green-800 z-[9999] flex flex-col justify-between p-8 text-white select-none md:hidden animate-fadeIn">
      <Navbar variant="white" />

      <div className="flex flex-col mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          {reactStringReplace(onboarding.title, '{{br}}', (match, i) => (
            <br key={i} />
          ))}
        </h1>

        <p className="text-sm font-normal text-white max-w-[280px] leading-relaxed tracking-wide">
          {reactStringReplace(onboarding.description, '{{br}}', (match, i) => (
            <br key={i} />
          ))}
        </p>
      </div>

      <div className="mb-4">
        <button
          onClick={handleContinue}
          className="w-full py-3.5 bg-transparent border border-white rounded-xl text-base font-bold text-white hover:bg-white/10 active:bg-white/20 transition duration-150 cursor-pointer text-center"
        >
          {onboarding.buttonText}
        </button>
      </div>
    </div>
  );
};

export default MobileOnboarding;

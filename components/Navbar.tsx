'use client';
import clsx from 'clsx';
import { useAppContent } from '@/app/hooks/useAppContent';

interface NavbarProps {
  variant?: 'black' | 'white';
}

const Navbar = ({ variant = 'black' }: NavbarProps) => {
  const { data } = useAppContent();
  const isWhite = variant === 'white';
  const logoUrl = isWhite
    ? data?.settings?.logoWhiteUrl
    : data?.settings?.logoBlackUrl;

  return (
    <nav
      className={clsx(
        'w-full flex items-center',
        'mt-10 md:mt-14 mb-5',
        isWhite ? 'p-0' : 'p-6 md:px-0',
        'bg-transparent',
      )}
    >
      <a
        href="#"
        className={clsx('block', 'transition-transform duration-200')}
      >
        <img
          src={
            logoUrl ||
            (isWhite
              ? '/images/logo/logo-white.svg'
              : '/images/logo/logo-black.svg')
          }
          alt="Munchies Logo"
          className="h-6 md:h-10 w-auto object-contain"
        />
      </a>
    </nav>
  );
};

export default Navbar;

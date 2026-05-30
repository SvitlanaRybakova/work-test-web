'use client';

import clsx from 'clsx';
import { getImageUrl } from '@/library/api';

interface RestaurantItem {
  id: string;
  name: string;
  image_url: string;
  isOpen: boolean;
  delivery_time_minutes: number | string;
  opensAt?: string;
}

interface RestaurantCardProps {
  item: RestaurantItem;
  isLoading?: boolean;
}

const CardBadges = ({
  isClosed,
  deliveryTime,
}: {
  isClosed: boolean;
  deliveryTime: number | string;
}) => (
  <div className="flex gap-2 z-30">
    <div
      className={clsx(
        'flex items-center gap-1.5',
        'px-3 py-1.5',
        'border border-thin border-black/10 rounded-full',
        'text-sm font-normal text-black ',
      )}
    >
      <span
        className={clsx('w-2 h-2 rounded-full', {
          'bg-[#006633]': !isClosed,
          'bg-black': isClosed,
        })}
      />
      {isClosed ? 'Closed' : 'Open'}
    </div>

    {!isClosed && (
      <div
        className={clsx(
          'px-3 py-1.5',
          'border border-thin border-black/10 rounded-full',
          'text-sm font-normal text-black',
        )}
      >
        {deliveryTime} min
      </div>
    )}
  </div>
);

const ArrowButton = ({
  isClosed,
  onClick,
}: {
  isClosed: boolean;
  onClick: () => void;
}) => (
  <button
    disabled={isClosed}
    onClick={onClick}
    className={clsx(
      'flex items-center justify-center',
      'w-10 h-10 rounded-full  text-white  bg-green-800',
      'transition-colors duration-150',
      isClosed ? 'cursor-default' : 'cursor-pointer',
    )}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
      />
    </svg>
  </button>
);

const ClosedOverlay = ({ opensAt }: { opensAt?: string }) => (
  <div className="absolute inset-0 bg-white/80 z-20 flex items-center justify-center pointer-events-none">
    <div className="px-2 py-1 bg-[#F5F5F5] border border-thin border-black/5 rounded-sm text-sm font-normal text-black shadow-sm">
      Opens {opensAt || 'tomorrow at 12 pm'}
    </div>
  </div>
);

const RestaurantCard = ({ item, isLoading = false }: RestaurantCardProps) => {
  if (isLoading) {
    return (
      <div
        className={clsx(
          'w-[327px] h-[240px] bg-gray-100',
          'rounded-lg border border-thin border-black/10',
          'animate-pulse',
        )}
      />
    );
  }

  const isClosed = !item.isOpen;

  const handleNavigate = () => {
    throw new Error('Navigation not implemented yet');
  };

  return (
    <div
      className={clsx(
        'relative flex flex-col justify-between',
        'p-6 w-[327px] h-[240px] bg-white',
        'rounded-lg border border-thin border-black/10',
        'select-none overflow-hidden transition-shadow duration-200',
        { 'hover:shadow-md': !isClosed },
      )}
    >
      <CardBadges
        isClosed={isClosed}
        deliveryTime={item.delivery_time_minutes}
      />

      <img
        src={getImageUrl(item.image_url)}
        alt={item.name}
        className="absolute -right-8 -top-8 w-[160px] h-[160px] object-contain z-0"
      />

      <div className="flex items-center justify-between mt-auto w-full z-10">
        <h3
          className={clsx(
            'max-w-[70%]',
            'text-xl font-normal text-black tracking-tight leading-none',
            'overflow-hidden text-ellipsis whitespace-nowrap',
          )}
        >
          {item.name}
        </h3>

        <ArrowButton isClosed={isClosed} onClick={handleNavigate} />
      </div>

      {isClosed && <ClosedOverlay opensAt={item.opensAt} />}
    </div>
  );
};

export default RestaurantCard;

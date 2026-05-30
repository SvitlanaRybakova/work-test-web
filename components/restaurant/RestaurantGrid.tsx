'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRestaurants } from '@/app/hooks/useRestaurants';
import { useAppContent } from '@/app/hooks/useAppContent';

import ErrorState from '../ErrorState';
import RestaurantCard from './RestaurantCard';

const RestaurantGrid = () => {
  const searchParams = useSearchParams();
  const { data: sanity } = useAppContent();

  const activeCategories = useMemo(
    () => searchParams.get('categories')?.split(',').filter(Boolean) || [],
    [searchParams],
  );
  const activeDeliveries = useMemo(
    () => searchParams.get('delivery')?.split(',').filter(Boolean) || [],
    [searchParams],
  );
  const activePrices = useMemo(
    () => searchParams.get('price')?.split(',').filter(Boolean) || [],
    [searchParams],
  );

  const filters = useMemo(
    () => ({
      categories: activeCategories,
      deliveryRanges: activeDeliveries,
      priceRanges: activePrices,
    }),
    [activeCategories, activeDeliveries, activePrices],
  );

  const {
    data: restaurants,
    isLoading,
    isError,
    refetch,
  } = useRestaurants(filters);

  if (isError) {
    return <ErrorState title="Unable to load restaurants" onRetry={refetch} />;
  }

  return (
    <>
      <h1 className="text-xl md:text-4xl font-normal text-black tracking-tight mb-5 md:mb-8">
        {sanity?.settings?.mainH1 || 'Restaurants'}
      </h1>
      <div className="flex flex-wrap gap-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <RestaurantCard key={i} isLoading={true} item={{} as any} />
            ))
          : restaurants?.map((item) => (
              <RestaurantCard key={item.id} item={item} />
            ))}
      </div>

      {!isLoading && restaurants?.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          No restaurants found
        </div>
      )}
    </>
  );
};

export default RestaurantGrid;

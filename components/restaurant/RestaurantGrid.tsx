'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRestaurants } from '@/app/hooks/useRestaurants';

const RestaurantGrid = () => {
  const searchParams = useSearchParams();

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
    return <div>Unable to load restaurants</div>;
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <div>loading...</div>)
          : restaurants?.map((restaurant: any) => (
              <div key={restaurant.id}>
                restaurant: {restaurant.name} -{' '}
                {restaurant.isOpen ? 'Open' : 'Closed'} - Price:{' '}
                {restaurant.priceRange}
              </div>
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

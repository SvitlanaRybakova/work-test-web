'use client';

import { useQuery } from '@tanstack/react-query';
import { Restaurant, OpenStatus, PriceRange } from '@/types';
import { fetcher } from '@/library/api';

interface FilterParams {
  categories: string[];
  deliveryRanges: string[];
  priceRanges: string[];
}

export function useRestaurants(filters: FilterParams) {
  return useQuery({
    queryKey: ['restaurants', filters],
    queryFn: async () => {
      const data = await fetcher<{ restaurants: Restaurant[] }>('/restaurants');

      const rawRestaurants = data.restaurants;

      const enrichedRestaurants = await Promise.all(
        rawRestaurants.map(async (res) => {
          try {
            const [openData, priceData] = await Promise.all([
              fetcher<OpenStatus>(`/open/${res.id}`),

              fetcher<PriceRange>(`/price-range/${res.price_range_id ?? ''}`),
            ]);

            return {
              ...res,
              isOpen: openData.is_open,
              priceRange: priceData.range,
            };
          } catch (error) {
            console.error(`Error hydrating restaurant ${res.id}`, error);

            return {
              ...res,
              isOpen: false,
              priceRange: undefined,
            };
          }
        }),
      );

      return enrichedRestaurants.filter((restaurant) => {
        const matchesCategory =
          filters.categories.length === 0 ||
          restaurant.filter_ids.some((id) => filters.categories.includes(id));

        const matchesDelivery =
          filters.deliveryRanges.length === 0 ||
          filters.deliveryRanges.some((range) => {
            const mins = restaurant.delivery_time_minutes;

            if (range === '0-10') return mins <= 10;
            if (range === '10-30') return mins > 10 && mins <= 30;
            if (range === '30-60') return mins > 30 && mins <= 60;
            if (range === '1hour+') return mins > 60;

            return false;
          });

        const matchesPrice =
          filters.priceRanges.length === 0 ||
          filters.priceRanges.includes(restaurant.priceRange ?? '');

        return matchesCategory && matchesDelivery && matchesPrice;
      });
    },
  });
}

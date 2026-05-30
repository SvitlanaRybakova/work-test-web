'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export const useFilterParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = useCallback(
    (key: 'categories' | 'delivery' | 'price', value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.get(key)?.split(',').filter(Boolean) || [];

      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      if (updated.length) {
        params.set(key, updated.join(','));
      } else {
        params.delete(key);
      }

      router.replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router],
  );

  return {
    handleToggle,
    activeCategories:
      searchParams.get('categories')?.split(',').filter(Boolean) || [],
    activeDeliveries:
      searchParams.get('delivery')?.split(',').filter(Boolean) || [],
    activePrices: searchParams.get('price')?.split(',').filter(Boolean) || [],
  };
};

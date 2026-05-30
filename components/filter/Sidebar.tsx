'use client';

import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { Filter } from '@/types';
import { fetcher } from '@/library/api';
import { useFilterParams } from '@/app/hooks/useFilterParams';
import { DELIVERY_OPTIONS, PRICE_OPTIONS } from '@/library/constants';

import FilterCard from './FilterCard';
import FilterSkeleton from "../categorySlider/Skeleton"

const Sidebar = () => {
  const { activeCategories, activeDeliveries, activePrices, handleToggle } =
    useFilterParams();

  const { data: filtersData, isLoading: isFiltersLoading } = useQuery({
    queryKey: ['filters'],
    queryFn: async () => {
      const data = await fetcher<{ filters: Filter[] }>('/filter');
      return data.filters;
    },
  });

  const categoryItems =
    filtersData?.map((f) => ({ id: f.id, label: f.name })) || [];

  return (
    <aside
      className={clsx(
        'flex-shrink-0 hidden md:block select-none',
        'p-6 w-[270px] bg-white h-fit',
        'rounded-lg border border-thin border-black/10',
      )}
    >
      <h2 className="font-normal text-2xl mb-8">Filter</h2>

      {isFiltersLoading ? (
        <div className="mb-8">
          {/* TODO: implement the SanityCMS */}
          <h3 className="mb-3 font-semibold text-xs text-gray-400 uppercase tracking-wider">
            Food Category
          </h3>
           <div className="flex flex-col gap-2 items-start w-full">
            <FilterSkeleton count={7} variant="list" />
          </div>
        </div>
      ) : (
        <FilterCard
          title="Food Category"
          items={categoryItems}
          activeValues={activeCategories}
          onToggle={(val) => handleToggle('categories', val)}
          variant="list"
        />
      )}
      {/* TODO: implement the SanityCMS */}
      <FilterCard
        title="Delivery Time"
        items={DELIVERY_OPTIONS}
        activeValues={activeDeliveries}
        onToggle={(val) => handleToggle('delivery', val)}
        variant="wrap"
      />

      {/* TODO: implement the SanityCMS */}
      <FilterCard
        title="Price Range"
        items={PRICE_OPTIONS}
        activeValues={activePrices}
        onToggle={(val) => handleToggle('price', val)}
        variant="wrap"
      />
    </aside>
  );
};

export default Sidebar;

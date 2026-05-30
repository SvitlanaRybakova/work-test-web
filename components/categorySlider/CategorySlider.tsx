'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/library/api';
import { Filter } from '@/types';
import { useFilterParams } from '@/app/hooks/useFilterParams';
import CategoryCard from './CategoryCard';
import CategorySkeleton from './Skeleton';

const CategorySlider = () => {
  const { activeCategories, handleToggle } = useFilterParams();

  const { data: filtersData, isLoading: isFiltersLoading } = useQuery({
    queryKey: ['filters'],
    queryFn: async () => {
      const data = await fetcher<{ filters: Filter[] }>('/filter');
      return data.filters;
    },
  });

  return (
    <section className="w-full overflow-x-auto pb-4 mb-6 flex gap-3 scrollbar-none snap-x snap-mandatory select-none">
      {isFiltersLoading ? (
        <CategorySkeleton count={6} variant="slider" />
      ) : (
        filtersData?.map((filter) => {
          const isSelected = activeCategories.includes(filter.id);

          return (
            <div key={filter.id} className="snap-start flex-shrink-0">
              <CategoryCard
                filter={filter}
                isSelected={isSelected}
                onClick={() => handleToggle('categories', filter.id)}
              />
            </div>
          );
        })
      )}
    </section>
  );
};

export default CategorySlider;

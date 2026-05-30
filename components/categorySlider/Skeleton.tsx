import clsx from 'clsx';

interface CategorySkeletonProps {
  count?: number;
  variant?: 'slider' | 'list';
}

const CategorySkeleton = ({
  count = 6,
  variant = 'slider',
}: CategorySkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            'bg-gray-100 rounded-lg border border-thin border-black/5 animate-pulse flex-shrink-0',
            {
              'min-w-[160px] h-[80px]': variant === 'slider',
              'h-[38px]': variant === 'list',
              'w-3/4': variant === 'list' && i % 3 === 0,
              'w-1/2': variant === 'list' && i % 3 === 1,
              'w-2/3': variant === 'list' && i % 3 === 2,
            },
          )}
        />
      ))}
    </>
  );
};

export default CategorySkeleton;

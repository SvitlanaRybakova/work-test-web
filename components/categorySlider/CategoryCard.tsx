import { Filter } from '@/types';
import { getImageUrl } from '@/library/api';
import clsx from 'clsx';

interface CategoryCardProps {
  filter: Filter;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryCard = ({ filter, isSelected, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-between',
        'min-w-[160px] h-[80px] text-left cursor-pointer p-4',
        'transition-all duration-150 select-none',
        'border rounded-lg border-thin',
        {
          'bg-black text-white border-black': isSelected,
          'bg-white border-black/10 text-black hover:border-black/20':
            !isSelected,
        },
      )}
    >
      <span className="font-normal text-sm self-start max-w-[60%]">
        {filter.name}
      </span>

      <img
        src={getImageUrl(filter.image_url)}
        alt={filter.name}
        className="w-16 h-16 object-contain flex-shrink-0"
      />
    </button>
  );
};

export default CategoryCard;

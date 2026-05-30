import clsx from 'clsx';

interface FilterItem {
  id: string;
  label: string;
}

interface FilterCardProps {
  title: string;
  items: FilterItem[];
  activeValues: string[];
  onToggle: (value: string) => void;
  variant?: 'list' | 'wrap';
  className?: string;
}

const FilterCard = ({
  title,
  items,
  activeValues,
  onToggle,
  variant = 'list',
  className = '',
}: FilterCardProps) => {
  const layoutClasses = {
    list: 'flex flex-col gap-2 items-start',
    wrap: 'flex flex-wrap gap-2',
  }[variant];

  return (
    <div className={clsx(' mb-8 last:mb-0', className)}>
      <h3
        className={clsx(
          'mb-3',
          'font-semibold text-xs text-gray-400 uppercase',
        )}
      >
        {title}
      </h3>

      <div className={layoutClasses}>
        {items.map((item) => {
          const isSelected = activeValues.includes(item.id);

          return (
            <button
              key={item.id}
              onClick={() => onToggle(item.id)}
              className={clsx(
                'cursor-pointer px-3 py-2',
                'text-sm font-medium',
                'border rounded-lg border-thin',
                'transition-all duration-150  select-none',
                {
                  'bg-black text-white border-black': isSelected,
                  'bg-white border-black/10 text-black hover:border-black/20':
                    !isSelected,
                },
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCard;

'use client';

import { useFilterParams } from '@/app/hooks/useFilterParams';
import { DELIVERY_OPTIONS } from '@/library/constants';
import FilterCard from './FilterCard';

const MobileFilter = () => {
  const { activeDeliveries, handleToggle } = useFilterParams();

  return (
    <FilterCard
      title="Delivery Time"
      items={DELIVERY_OPTIONS}
      activeValues={activeDeliveries}
      onToggle={(val) => handleToggle('delivery', val)}
      variant="wrap"
      className="md:hidden  pb-4"
    />
  );
};

export default MobileFilter;

'use client';

import { useFilterParams } from '@/app/hooks/useFilterParams';
import { DELIVERY_OPTIONS } from '@/library/constants';
import { useAppContent } from '@/app/hooks/useAppContent';
import FilterCard from './FilterCard';

const MobileFilter = () => {
  const { activeDeliveries, handleToggle } = useFilterParams();
  const { data: sanity } = useAppContent();

  return (
    <FilterCard
      title={sanity?.settings?.deliveryTimeTitle || 'Delivery Time'}
      items={sanity?.settings?.deliveryOptions || DELIVERY_OPTIONS}
      activeValues={activeDeliveries}
      onToggle={(val) => handleToggle('delivery', val)}
      variant="wrap"
      className="md:hidden  pb-4"
    />
  );
};

export default MobileFilter;

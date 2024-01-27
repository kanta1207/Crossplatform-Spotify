'use client';

import { Item } from '@/types';
import { getCurrentBreakpoint } from '@/utils';

import { ItemCard } from './ItemCard';

interface ItemCardListProps {
  items: Item[];
}

export const ItemCardList: React.FC<ItemCardListProps> = ({ items }) => {
  const currentBreakPoint = getCurrentBreakpoint();
  const gridColumns = {
    xs: 2,
    sm: 3,
    md: 3,
    lg: 4,
    xl: 5,
    '2xl': 8,
  };
  const trimmedItems = items.slice(0, gridColumns[currentBreakPoint]);
  return (
    <div
      className="
        w-full
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4
      "
    >
      {trimmedItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

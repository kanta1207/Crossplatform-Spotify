'use client';

import { Card, StyledImage } from '@/components/ui';
// import { useLoadItemImage } from '@/features/streaming/hooks';
import { Item } from '@/types';

import { PlayButton } from '../../PlayButton';

interface ItemCardProps {
  item: Item;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const imagePath = '/images/sample.jpeg';
  const onClickPlay = () => {
    alert(`play ${item.title}`);
  };

  return (
    <Card
      color="card"
      className="relative group flex flex-col items-center justify-center gap-x-4 cursor-pointer"
    >
      <StyledImage src={imagePath} alt={item.title} />
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full text-white">{item.title}</p>
        <p className="text-secondary text-sm pb-4 w-full truncate">By {item.author}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton onClick={onClickPlay} />
      </div>
    </Card>
  );
};

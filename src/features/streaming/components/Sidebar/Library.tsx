'use client';

import { Card } from '@/components/ui';
import { Item } from '@/types';

import { ListMusic, Plus } from 'lucide-react';

// import MediaItem from './MediaItem';

interface LibraryProps {
  items: Item[];
}

export const Library: React.FC<LibraryProps> = ({ items }) => {
  return (
    <Card asChild color="black">
      <div className="overflow-y-auto h-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-x-2">
              <ListMusic className="text-neutral-400" size={26} />
              <p className="text-neutral-400 font-medium text-md">Your Library</p>
            </div>
            <Plus
              size={20}
              className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition
          "
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-4 px-3">
            {/* {items.map((item) => (
          <MediaItem onClick={(id: string) => onPlay(id)} key={item.id} data={item} />
        ))} */}
          </div>
        </div>
      </div>
    </Card>
  );
};

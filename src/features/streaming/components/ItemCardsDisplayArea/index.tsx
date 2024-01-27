import { Item } from '@/types';

import React from 'react';

import { ItemCardList } from './ItemCardList';

export const ItemCardsDisplayArea = () => {
  // Dummy items for a Spotify clone
  const songs: Item[] = Array.from({ length: 10 }, (_, index) => ({
    id: `song_${index + 1}`,
    user_id: `user_${index + 1}`,
    author: `Artist ${index + 1}`,
    title: `Song ${index + 1}`,
    song_path: `path/to/song_${index + 1}.mp3`,
    image_path: `path/to/image_${index + 1}.jpg`,
  }));

  const podcasts: Item[] = Array.from({ length: 10 }, (_, index) => ({
    id: `podcast_${index + 1}`,
    user_id: `user_${index + 1}`,
    author: `Podcast Host ${index + 1}`,
    title: `Podcast Episode ${index + 1}`,
    song_path: `path/to/podcast_${index + 1}.mp3`,
    image_path: `path/to/image_${index + 1}.jpg`,
  }));
  return (
    <>
      <div className="flex flex-col gap-4">
        <ItemCardList items={songs} />
        <ItemCardList items={podcasts} />;
      </div>
    </>
  );
};

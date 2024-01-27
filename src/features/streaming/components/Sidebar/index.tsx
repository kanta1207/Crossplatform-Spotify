'use client';

import { Song } from '@/types';

import { Library } from './Library';
import { SidebarItemList } from './SidebarItemLIst';

interface SidebarProps {
  songs: Song[];
}

export const Sidebar = ({ songs }: SidebarProps) => {
  return (
    <div className="h-full min-w-52 max-w-80 hidden md:flex flex-col gap-y-2 p-2">
      <SidebarItemList />
      <Library songs={songs} />
    </div>
  );
};

'use client';

import { Item } from '@/types';

import { Library } from './Library';
import { SidebarItemList } from './SidebarItemLIst';

interface SidebarProps {
  items: Item[];
}

export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <div className="h-full min-w-80 hidden md:flex flex-col gap-y-2">
      <SidebarItemList />
      <Library items={items} />
    </div>
  );
};

'use client';

import { Card } from '@/components/ui';

import { Home, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

import { SidebarItem } from './SidebarItem';

export const SidebarItemList = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: Home,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: Search,
        label: 'Search',
        href: '/search',
        active: pathname === '/search',
      },
    ],
    [pathname],
  );
  return (
    <Card asChild color="black">
      <div className="flex flex-col gap-y-4 px-5 py-4">
        {routes.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </Card>
  );
};

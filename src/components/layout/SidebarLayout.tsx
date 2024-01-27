import { Sidebar } from '@/features/streaming/components';

import React, { FC, ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-x-4 h-full p-2">
      <Sidebar items={[]} />
      <main className="h-full w-full overflow-y-auto">{children}</main>
    </div>
  );
};

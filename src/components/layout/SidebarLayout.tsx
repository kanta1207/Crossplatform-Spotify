import { Sidebar } from '@/features/streaming/components';

import React, { FC, ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      <Sidebar songs={[]} />
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

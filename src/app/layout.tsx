import '@/styles/globals.css';

import { SidebarLayout } from '@/components';
import { font } from '@/const/fonts';
import { cn } from '@/lib/tailwind/utils';

import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Tunify',
  description:
    'Tunify is a music streaming service that allows you to listen to any song, anywhere, anytime.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn(font.className, 'min-h-screen w-full antialiased')}>
          <SidebarLayout>{children}</SidebarLayout>
        </body>
      </html>
    </>
  );
}

import { cn } from '@/lib/tailwind/utils';

import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import React, { FC } from 'react';

const imageVariants = cva('aspect-square relative overflow-hidden', {
  variants: {
    variant: {
      square: 'rounded',
      circle: 'rounded-full',
    },
    size: {
      2: 'w-2 h-2',
      2.5: 'w-2.5 h-2.5',
      3: 'w-3 h-3',
      3.5: 'w-3.5 h-3.5',
      4: 'w-4 h-4',
      4.5: 'w-4.5 h-4.5',
      5: 'w-5 h-5',
      6: 'w-6 h-6',
      7: 'w-7 h-7',
      8: 'w-8 h-8',
      9: 'w-9 h-9',
      10: 'w-10 h-10',
      11: 'w-11 h-11',
      12: 'w-12 h-12',
      13: 'w-13 h-13',
      14: 'w-14 h-14',
      15: 'w-15 h-15',
      16: 'w-16 h-16',
      'fit-parent': 'w-full h-full',
    },
  },
  defaultVariants: {
    variant: 'square',
    size: 'fit-parent',
  },
});

interface StyledImageProps extends VariantProps<typeof imageVariants> {
  src: string;
  alt: string;
  className?: string;
}

export const StyledImage: FC<StyledImageProps> = ({ variant, size, src, alt, className }) => {
  return (
    <div className={cn(imageVariants({ variant, size, className }))}>
      <Image className="object-cover" src={src} fill alt={alt} />
    </div>
  );
};

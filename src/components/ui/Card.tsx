import { cn } from '@/lib/tailwind/utils';

import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

const cardVariants = cva('rounded p-4', {
  variants: {
    color: {
      none: '',
      card: 'bg-card text-white',
      black: 'bg-black text-white',
    },
  },
  defaultVariants: {
    color: 'none',
  },
});

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp className={cn(cardVariants({ color, className }))} ref={ref} {...props} />;
  },
);
Card.displayName = 'Card';
export { Card };

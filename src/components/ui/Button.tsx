import { cn } from '@/lib/tailwind/utils';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva('text-base min-w-8 inline-flex items-center justify-center gap-2.5', {
  variants: {
    variant: {
      none: 'min-w-0',
      primary: 'bg-primary text-black',
      white: 'bg-white text-black',
      outline: 'bg-transparent text-white outline-white',
      error: 'bg-destructive text-white',
      cancel: 'bg-transparent text-secondary hover:text-white',
      ghost: 'bg-transparent',
    },
    size: {
      none: '',
      sm: 'h-8 px-7',
      md: 'h-10 px-12',
      lg: 'h-12 px-12',
      icon: 'h-12 w-12 min-w-0',
    },
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'none',
    size: 'none',
    rounded: 'none',
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, type ButtonProps, buttonVariants };

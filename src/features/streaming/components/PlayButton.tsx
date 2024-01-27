import { Button, buttonVariants } from '@/components/ui';
import { cn } from '@/lib/tailwind/utils';

import { VariantProps } from 'class-variance-authority';
import { Play } from 'lucide-react';
import { FC } from 'react';

interface PlayButtonProps {
  onClick?: () => void;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  iconStyle?: string;
}

export const PlayButton: FC<PlayButtonProps> = ({ onClick, iconStyle, variant = 'primary' }) => {
  return (
    <Button
      className="w-10 h-10 opacity-0 group-hover:opacity-100  hover:scale-110"
      rounded="full"
      variant={variant}
      onClick={onClick}
    >
      <Play className={cn('w-6 h-6 fill-black', iconStyle)} />
    </Button>
  );
};

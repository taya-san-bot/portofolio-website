import { Slot, Slottable } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

import { Spinner } from '../spinner';

import { buttonVariants } from './button-variants';

export type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
  };

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  isLoading,
  icon,
  ref,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      {!isLoading && icon && <span className="mr-2">{icon}</span>}
      {asChild ? (
        <Slottable>{children}</Slottable>
      ) : (
        <span className="mx-2">{children}</span>
      )}
    </Comp>
  );
};

Button.displayName = 'Button';

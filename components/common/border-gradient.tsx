import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';
import clsx from 'clsx';

const BorderGradient = ({
  children,
  className,
  type = 'linear',
  borderClassName,
  commonClassName,
  bgClassName,
}: BaseComponent & {
  type?: 'contain' | 'linear';
  borderClassName?: string;
  bgClassName?: string;
  commonClassName?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        commonClassName,
        'p-[0.5px] w-full  box-border border-none ',
        borderClassName || 'bg-gradient-to-b to-pink-950/50 from-gray-600',
        {
          'flex items-center justify-center': type === 'contain',
        }
      )}
    >
      <div
        className={clsx(
          'w-full m-[1px] ',
          commonClassName,
          bgClassName || 'bg-neutral-950'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BorderGradient;

import clsx from 'clsx';
import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';

const ChevronLeft = ({
  className,
  strokeWidth,
}: BaseComponent & { strokeWidth?: number | string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={strokeWidth || '1.5'}
      stroke='currentColor'
      className={clsx('w-6 h-6', className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  );
};

export default ChevronLeft;

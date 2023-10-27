import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';
import clsx from 'clsx';

const ChevronRight = ({
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
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  );
};

export default ChevronRight;

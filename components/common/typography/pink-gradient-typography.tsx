import React from 'react';
import { BaseComponent } from '../../../utils/types/clientTypes';
import clsx from 'clsx';

const PinkGradientTypography = ({ children, className }: BaseComponent) => {
  return (
    <span
      className={clsx(className, 'inline-block')}
      style={{
        background: 'linear-gradient(#f6a5c1, #873652)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  );
};

export default PinkGradientTypography;

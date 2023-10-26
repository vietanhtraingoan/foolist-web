import React from 'react';
import { BaseComponent } from '../../../utils/types/clientTypes';
import clsx from 'clsx';

const GrayGradientTypography = ({
  children,
  className,
  ...props
}: BaseComponent) => {
  return (
    <span
      className={clsx(className, 'inline-block')}
      style={{
        background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,.7) 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default GrayGradientTypography;

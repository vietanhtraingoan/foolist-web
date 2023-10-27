import clsx from 'clsx';
import React from 'react';
import { BaseComponent } from '../../../utils/types/clientTypes';

const ParagraphResponsive = ({ className, children }: BaseComponent) => {
  return (
    <p className={clsx('text-base md:text-lg lg:text-xl', className)}>
      {children}
    </p>
  );
};

export default ParagraphResponsive;

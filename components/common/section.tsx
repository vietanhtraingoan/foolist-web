import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';
import clsx from 'clsx';

const Section = ({
  className,
  children,
  id,
  fluid = false,
}: BaseComponent & { fluid?: boolean; containerClassName?: string }) => {
  return (
    <section className={className} id={id}>
      <div
        className={clsx(
          !fluid && 'container',
          className,
          'md:py-24 lg:py-32 py-12'
        )}
      >
        {children}
      </div>
    </section>
  );
};

Section.Title = ({ children, className }: BaseComponent) => {
  return (
    <h2
      className={clsx(
        className,
        'mb-10 text-4xl font-medium tracking-tight text-white font-heading xs:text-5xl sm:text-6xl md:text-7xl'
      )}
    >
      {children}
    </h2>
  );
};

export default Section;

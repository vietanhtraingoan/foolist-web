import React from 'react';
import { BaseComponent } from '../../utils/types/clientTypes';
import clsx from 'clsx';
interface DividerProps extends BaseComponent {
  direction?: 'left' | 'right' | 'center';
}

const Divider = ({ direction = 'right', className }: DividerProps) => {
  const dividerVariants = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
  };

  const dividerBackgroundVariants = {
    left: '[background:linear-gradient(-90deg,#f7f7f7,transparent)]',
    right: ' [background:linear-gradient(90deg,#f7f7f7,transparent)]',
    center:
      '[background:linear-gradient(-90deg,transparent,#f7f7f7,transparent)]',
  };

  return (
    <div
      className={clsx(
        className,
        'content-[""] min-w-[100px] flex flex-row  w-full h-[2px] mt-6 md:mt-[50px] transition ease-in-out',
        dividerVariants[direction]
      )}
    >
      <div
        className={clsx(
          'content-[""] min-w-[200px] w-[calc(100vw-770px)] h-[2px]',
          dividerBackgroundVariants[direction]
        )}
      ></div>
    </div>
  );
};

export default Divider;

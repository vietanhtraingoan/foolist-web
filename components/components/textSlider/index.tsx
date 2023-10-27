import clsx from 'clsx';
import React from 'react';
import Marquee from 'react-fast-marquee';

interface ITextSliderProps {
  text?: string;
  id?: string;
}

const classNamePrefix = 'text-slider';

const TextSlider: React.FC<ITextSliderProps> = (props) => {
  const { text } = props;

  return (
    <div id={props?.id} className={clsx(classNamePrefix, 'flex items-center')}>
      <Marquee pauseOnHover>
        <div className={`${classNamePrefix}__item outline`}>{text}</div>

        <div className={`${classNamePrefix}__item normal`}>{text}</div>
      </Marquee>
    </div>
  );
};

export default TextSlider;

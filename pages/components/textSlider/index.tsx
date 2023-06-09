import React from "react";
import Marquee from "react-fast-marquee";

interface ITextSliderProps {
  text?: string;
}

const classNamePrefix = "text-slider";

const TextSlider: React.FC<ITextSliderProps> = (props) => {
  const { text } = props;

  return (
    <div className={classNamePrefix}>
      <Marquee pauseOnHover>
        <div className={`${classNamePrefix}__item outline`}>{text}</div>

        <div className={`${classNamePrefix}__item normal`}>{text}</div>
      </Marquee>
    </div>
  );
};

export default TextSlider;

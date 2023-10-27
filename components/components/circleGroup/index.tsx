import React, { useState } from "react";
import { useSSR } from "react-i18next";

const classNamePrefix = "circle-group";

const CircleGroup = () => {
  const [draw, setDraw] = useState(true);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__circle-wrapper-1`}>
        <div className="circle__box">
          <div className="circle__wrapper circle__wrapper--right">
            <div className="circle__whole circle__right"></div>
          </div>
          <div className="circle__wrapper circle__wrapper--left">
            <div className="circle__whole circle__left"></div>
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}__circle-wrapper-2`}>
        <div className="circle__box">
          <div className="circle__wrapper circle__wrapper--right">
            <div className="circle__whole circle__right"></div>
          </div>
          <div className="circle__wrapper circle__wrapper--left">
            <div className="circle__whole circle__left"></div>
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}__circle-wrapper-3`}>
        <div className="circle__box">
          <div className="circle__wrapper circle__wrapper--right">
            <div className="circle__whole circle__right"></div>
          </div>
          <div className="circle__wrapper circle__wrapper--left">
            <div className="circle__whole circle__left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleGroup;

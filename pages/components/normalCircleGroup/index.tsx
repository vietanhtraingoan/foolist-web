import React from "react";

const classNamePrefix = "normal-circle-group";

const NormalCircleGroup = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__item-wrapper-1`}>
        <div className={`${classNamePrefix}__item circle-1`}></div>
      </div>

      <div className={`${classNamePrefix}__item-wrapper-2`}>
        <div className={`${classNamePrefix}__item circle-2`}></div>
      </div>

      <div className={`${classNamePrefix}__item-wrapper-3`}>
        <div className={`${classNamePrefix}__item circle-3`}></div>
      </div>
    </div>
  );
};

export default NormalCircleGroup;

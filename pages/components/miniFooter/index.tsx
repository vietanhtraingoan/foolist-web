import React from "react";

const classNamePrefix = "mini-footer";

const MiniFooter = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__item`}>
        <span>(+84) 913 999 345</span>
      </div>

      <div className={`${classNamePrefix}__item`}>
        <span>
          © 2023 <strong>Foolist Creative</strong>
        </span>
      </div>
    </div>
  );
};

export default MiniFooter;

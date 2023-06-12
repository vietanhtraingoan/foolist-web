import React from "react";

const classNamePrefix = "loading-page";

const LoadingView = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__spinner`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingView;

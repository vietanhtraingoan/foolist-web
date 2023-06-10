import React from "react";
import logo from "../../public/static/foolistLogo.png";
import Image from "next/image";

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

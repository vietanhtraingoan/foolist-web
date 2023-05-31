import React from "react";
import arrow from "../../../public/static/arrow.png";
import Image from "next/image";

type TTypeButton = "forward" | "backward";
type TSizeButton = "small" | "large";

interface ICustomNavigationButtonProps {
  size?: TSizeButton;
  type?: TTypeButton;
  onClick?: () => void;
  goForward?: () => void;
  goBackward?: () => void;
}

const classNamePrefix = "custom-navigation-button";

const CustomNavigationButton: React.FC<ICustomNavigationButtonProps> = (
  props
) => {
  const { size, type, onClick } = props;

  return (
    <div
      className={classNamePrefix}
      style={{
        width: size === "large" ? 120 : 90,
        height: size === "large" ? 40 : 30,
      }}
      onClick={onClick}
    >
      <Image
        src={arrow}
        alt=""
        width={size === "large" ? 70 : 50}
        height={20}
      />
    </div>
  );
};

export default CustomNavigationButton;

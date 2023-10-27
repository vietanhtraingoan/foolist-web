import React from "react";

interface ICustomHamburgMenuProps {
  isMenuClick?: boolean;
  spanBgColor?: string;
  handleMenuClick?: () => void;
  handleCloseMenu?: () => void;
}

const CustomHamburgMenu: React.FC<ICustomHamburgMenuProps> = (props) => {
  const { isMenuClick, spanBgColor, handleMenuClick, handleCloseMenu } = props;

  return (
    <div
      id="hamburg-menu"
      className={`${isMenuClick ? "open" : ""}`}
      onClick={isMenuClick === false ? handleMenuClick : handleCloseMenu}
    >
      <span
        style={{ background: isMenuClick ? "#ffffff" : spanBgColor }}
      ></span>
      <span
        style={{ background: isMenuClick ? "#ffffff" : spanBgColor }}
      ></span>
      <span
        style={{ background: isMenuClick ? "#ffffff" : spanBgColor }}
      ></span>
      <span
        style={{ background: isMenuClick ? "#ffffff" : spanBgColor }}
      ></span>
      <span
        style={{ background: isMenuClick ? "#ffffff" : spanBgColor }}
      ></span>
      <span
        style={{ background: isMenuClick ? "#ffffff" : spanBgColor }}
      ></span>
    </div>
  );
};

export default CustomHamburgMenu;

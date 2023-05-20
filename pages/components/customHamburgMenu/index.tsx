import React, { useCallback, useState } from "react";

interface ICustomHamburgMenuProps {
  isMenuClick?: boolean;
  handleMenuClick?: () => void;
  handleCloseMenu?: () => void;
}

const CustomHamburgMenu: React.FC<ICustomHamburgMenuProps> = (props) => {
  const { isMenuClick, handleMenuClick, handleCloseMenu } = props;

  console.log(isMenuClick);

  return (
    <div
      id="hamburg-menu"
      className={`${isMenuClick ? "open" : ""}`}
      onClick={isMenuClick === false ? handleMenuClick : handleCloseMenu}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CustomHamburgMenu;

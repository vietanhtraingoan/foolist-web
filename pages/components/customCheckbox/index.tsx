import React from "react";

interface ICustomCheckboxProps {
  checked?: boolean;
}

const classNamePrefix = "custom-checkbox"

const CustomCheckbox: React.FC<ICustomCheckboxProps> = (props) => {
  const { checked } = props;

  return (
    <div className={classNamePrefix}>
      <input type="checkbox" checked={checked} />
      <div className="checkmark"></div>
    </div>
  );
};

export default CustomCheckbox;

import React from "react";

interface ICustomCheckboxProps {
  checked?: boolean;
  onChange?: (e) => void;
}

const classNamePrefix = "custom-checkbox";

const CustomCheckbox: React.FC<ICustomCheckboxProps> = (props) => {
  const { checked, onChange } = props;

  return (
    <div className={classNamePrefix}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className="checkmark"></div>
    </div>
  );
};

export default CustomCheckbox;

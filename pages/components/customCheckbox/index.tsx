import React from "react";

interface ICustomCheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

const classNamePrefix = "custom-checkbox";

const CustomCheckbox: React.FC<ICustomCheckboxProps> = (props) => {
  const { checked, onChange } = props;

  return (
    <div className={classNamePrefix}>
      <input type="checkbox" defaultChecked={checked} onChange={onChange} />
      <div className="checkmark"></div>
    </div>
  );
};

export default CustomCheckbox;

import React from 'react';
import BorderGradient from '../../common/border-gradient';

interface ICustomCheckboxProps {
  checked?: boolean;
  onChange?: (e) => void;
  onClick?: () => void;
}

const classNamePrefix = 'custom-checkbox';

const CustomCheckbox: React.FC<ICustomCheckboxProps> = (props) => {
  const { checked, onChange, onClick } = props;

  return (
    <BorderGradient commonClassName='!w-[22px] mr-4 rounded-lg aspect-square'>
      <div className={classNamePrefix} onClick={onClick}>
        <input type='checkbox' checked={checked} onChange={onChange} />
        <div className='checkmark'></div>
      </div>
    </BorderGradient>
  );
};

export default CustomCheckbox;

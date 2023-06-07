import React from "react";

const classNamePrefix = "menu-contact-section";

const MenuContactSection = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__info`}>
        <div>(+84) 913 999 345</div>
        <div>info@foolist.vn</div>
      </div>

      <div className={`${classNamePrefix}__address`}>
        Floor 3, Vietphone Building, 64 Vo Thi Sau, Tan Dinh Ward, District 1,
        Ho Chi Minh City, Viet Nam
      </div>
    </div>
  );
};

export default MenuContactSection;

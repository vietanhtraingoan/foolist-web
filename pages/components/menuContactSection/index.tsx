import React from "react";

const classNamePrefix = "menu-contact-section";

const MenuContactSection = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__info`}>
        <a href="tel:(+84)913999345">(+84) 913 999 345</a>
        <a href="mailto: info@foolist.vn">info@foolist.vn</a>
      </div>

      <div className={`${classNamePrefix}__address`}>
        Floor 3,64 Vo Thi Sau, Tan Dinh Ward, District 1, HCM, Viet Nam
      </div>
    </div>
  );
};

export default MenuContactSection;

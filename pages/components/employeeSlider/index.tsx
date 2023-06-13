import React from "react";
import Marquee from "react-fast-marquee";
import { EmployeeMock } from "../../../mocks/employeeMock";
import Image from "next/image";

const classNamePrefix = "employee-slider";

const EmployeeSlider = () => {
  return (
    <div className={classNamePrefix}>
      <Marquee pauseOnHover speed={80}>
        {EmployeeMock.map((e) => (
          <div className={`${classNamePrefix}__item`} key={e.id}>
            <Image className={`${classNamePrefix}__item-image`}  alt="" src={e.imgUrl.src} width={250} height={500}/>
          </div>
        ))}
      </Marquee>

      <Marquee pauseOnHover speed={80} direction="right">
        {EmployeeMock.map((e) => (
          <div className={`${classNamePrefix}__item`} key={e.id}>
            <Image className={`${classNamePrefix}__item-image`}  alt="" src={e.imgUrl.src} width={250} height={500}/>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default EmployeeSlider;

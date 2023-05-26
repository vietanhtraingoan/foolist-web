import Image from "next/image";
import React, { useState } from "react";
import graphWhite from "../../../public/images/graphWhite.png";
import graphBlack from "../../../public/images/graphBlack.png";

const classNamePrefix = "animated-graph";

const AnimatedGraph = () => {
  const [showImage1, setShowImage1] = useState<boolean>(false);

  return (
    <div className={classNamePrefix}>
      <div
        className={`${classNamePrefix}__item`}
        onMouseEnter={() => setShowImage1(true)}
        onMouseLeave={() => setShowImage1(false)}
      >
        <div
          className={`${classNamePrefix}__item-1`}
          style={{ display: showImage1 ? "block" : "none" }}
        >
          <Image
            className={`${classNamePrefix}__item-1-image`}
            src={graphWhite}
            alt=""
          />
        </div>
        <div
          className={`${classNamePrefix}__item-2`}
          style={{ display: showImage1 ? "none" : "block" }}
        >
          <Image
            className={`${classNamePrefix}__item-2-image`}
            src={graphBlack}
            alt=""
          />
        </div>

        <div
          className={`${classNamePrefix}__text-1`}
          style={{ display: showImage1 ? "none" : "flex" }}
        >
          <span>Sáng tạo</span>
        </div>

        <div
          className={`${classNamePrefix}__text-2`}
          style={{ display: showImage1 ? "flex" : "none" }}
        >
          <span>Thương hiệu</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGraph;

import React from "react";
import { Carousel } from "antd";

import { introductionMocks } from "../../../mocks/introductionMocks";
import Image from "next/image";

const classNamePrefix = "introduction-carousel";

const IntroductionCarousel = () => {
  return (
    <div className={classNamePrefix}>
      <Carousel autoplay={true} effect="fade">
        {introductionMocks.map((i) => (
          <div className={`${classNamePrefix}__item`} key={i.id}>
            <Image className={`${classNamePrefix}__item-image`} src={i.imgUrl} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default IntroductionCarousel;
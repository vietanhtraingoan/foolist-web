import React from "react";
import { Carousel } from "antd";

import { introductionMocks } from "../../../mocks/introductionMocks";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";

const classNamePrefix = "introduction-carousel";

const IntroductionCarousel = () => {
  return (
    <div className={classNamePrefix}>
      <Carousel autoplay={true} effect="fade">
        {introductionMocks
          ? introductionMocks.map((i) => (
              <div className={`${classNamePrefix}__item`} key={i.id}>
                <div className={`${classNamePrefix}__item-image`}>
                  {(
                    <LazyLoadImage
                      src={i.imgUrl.src}
                      placeholderSrc={i.imgUrl.src}
                      effect="blur"
                      width="100%"
                      height="100%"
                    />
                  ) || <Skeleton />}
                </div>
              </div>
            ))
          : ""}
      </Carousel>
    </div>
  );
};

export default IntroductionCarousel;

import React from "react";
import faceIcon from "../../../public/images/faceIcon.png";
import instaIcon from "../../../public/images/instaIcon.png";
import youtubeIcon from "../../../public/images/youtubeIcon.png";
import behanceIcon from "../../../public/images/behanceIcon.png";
import Image from "next/image";

const classNamePrefix = "social-group";

const SocialGroup = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__item-wrapper`}>
        <div className={`${classNamePrefix}__item`}>
          <a
            href="https://www.linkedin.com/company/foolist-creative"
            target="_blank"
          >
            <Image
              className={`${classNamePrefix}__item-icon`}
              src={behanceIcon}
              alt=""
            />
          </a>
        </div>

        <div className={`${classNamePrefix}__item`}>
          <a href="https://www.instagram.com/foolist.vn" target="_blank">
            <Image
              className={`${classNamePrefix}__item-icon`}
              src={instaIcon}
              alt=""
            />
          </a>
        </div>

        <div className={`${classNamePrefix}__item`}>
          <a
            href="https://www.linkedin.com/company/foolist-creative"
            target="_blank"
          >
            <Image
              className={`${classNamePrefix}__item-icon`}
              src={faceIcon}
              alt=""
            />
          </a>
        </div>

        <div className={`${classNamePrefix}__item`}>
          <a href="https://www.facebook.com/foolistcreative" target="_blank">
            <Image
              className={`${classNamePrefix}__item-icon`}
              src={youtubeIcon}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialGroup;

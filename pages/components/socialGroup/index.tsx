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
            <Image src={behanceIcon} alt="" width={40} height={40} />
          </a>
        </div>

        <div className={`${classNamePrefix}__item`}>
          <a href="https://www.instagram.com/foolist.vn" target="_blank">
            <Image src={instaIcon} alt="" width={40} height={40} />
          </a>
        </div>

        <div className={`${classNamePrefix}__item`}>
          <a
            href="https://www.linkedin.com/company/foolist-creative"
            target="_blank"
          >
            <Image src={faceIcon} alt="" width={40} height={40} />
          </a>
        </div>

        <div className={`${classNamePrefix}__item`}>
          <a href="https://www.facebook.com/foolistcreative" target="_blank">
            <Image src={youtubeIcon} alt="" width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialGroup;

import React from "react";
import faceIcon from "../../../public/images/faceIcon.png";
import twitterIcon from "../../../public/images/twitterIcon.png";
import instaIcon from "../../../public/images/instaIcon.png";
import Image from "next/image";

const classNamePrefix = "social-group";

const SocialGroup = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__item`}>
        <a
          href="https://www.linkedin.com/company/foolist-creative"
          target="_blank"
        >
          <Image src={faceIcon} alt="" width={12.5} height={16.5} />
        </a>
      </div>

      <div className={`${classNamePrefix}__item`}>
        <a href="https://www.facebook.com/foolistcreative" target="_blank">
          <Image src={twitterIcon} alt="" width={16.5} height={16.5} />
        </a>
      </div>

      <div className={`${classNamePrefix}__item`}>
        <a href="https://www.instagram.com/foolist.vn" target="_blank">
          <Image src={instaIcon} alt="" width={16.5} height={16.5} />
        </a>
      </div>
    </div>
  );
};

export default SocialGroup;

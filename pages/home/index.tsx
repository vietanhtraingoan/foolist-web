import React, { useEffect, useState } from "react";
import Image from "next/image";

import sphere from "../../public/images/Sphere.png";
import serviceImage1 from "../../public/images/service-1.png";
import serviceImage2 from "../../public/images/service-2.png";
import dot1 from "../../public/images/dot-white.png";
import dot2 from "../../public/images/dot-pink.png";

const classNamePrefix = "home-page";

const HomePage = () => {
  const [bgColor, setBgColor] = useState("#000000");

  const myLoader = ({ src, width, quality }) => {
    if (src) {
      return src;
    } else {
      return "";
    }
  };

  const listenScrollEvent = () => {
    window.scrollY > 700 ? setBgColor("#f6a5c1") : setBgColor("#000000");
  };

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div className={classNamePrefix} style={{ background: bgColor }}>
      <section
        id="first-section"
        className={`${classNamePrefix}__first-container`}
      >
        <div className={`${classNamePrefix}__image-container`}>
          <Image
            src={sphere}
            className="home-page-sphere"
            width={900}
            height={700}
            alt=""
          />
        </div>

        <div className={`${classNamePrefix}__content-wrapper`}>
          <div className={`${classNamePrefix}__content-title`}>
            <span>“LET ART</span>
            <div className={`${classNamePrefix}__content-title-highlight`}>
              UNLOCK
            </div>
            <span> YOUR BUSINESS “</span>
          </div>

          <div className={`${classNamePrefix}__main-content-wrapper`}>
            <div className={`${classNamePrefix}__main-content-text`}>
              Chào mừng đến với Foolist Creative - chúng tôi cung cấp các giải
              pháp sáng tạo và đột phá cho doanh nghiệp của bạn. Chúng tôi là
              một đội ngũ chuyên gia với nhiều năm kinh nghiệm trong lĩnh vực
              thiết kế đồ họa, truyền thông và phát triển website.
            </div>

            <div className={`${classNamePrefix}__main-content-button`}>
              <span>XEM THÊM +</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="second-section"
        className={`${classNamePrefix}__section-container`}
      >
        <div className={`${classNamePrefix}__section-title`}>
          DỊCH VỤ CỦA CHÚNG TÔI
        </div>

        <div className={`${classNamePrefix}__service-content-wrapper`}>
          <div className={`${classNamePrefix}__service-content`}>
            <span className={`${classNamePrefix}__service-content-text`}>
              TECHNOLOGY
            </span>
          </div>

          <div className={`${classNamePrefix}__service-content`}>
            <span className={`${classNamePrefix}__service-content-text`}>
              MEDIA
            </span>
          </div>
        </div>
      </section>

      <section className={`${classNamePrefix}__section-container`}>
        <div className={`${classNamePrefix}__section-title`}>SẢN PHẨM</div>
      </section>

      <section className={`${classNamePrefix}__final-section`}>
        <div className={`${classNamePrefix}__final-section-text`}>
          <div className={`${classNamePrefix}__final-section-text-wrapper`}>
            Bắt đầu dịch vụ với doanh nghiệp của bạn
          </div>

          <div className={`${classNamePrefix}__contact-button`}>
            <span>Liên hệ</span>
          </div>
        </div>

        <div className={`${classNamePrefix}__image-group`}>
          <div className={`${classNamePrefix}__image-1`}>
            <Image src={serviceImage2} alt="" width={325} height={288} />
          </div>
          <div className={`${classNamePrefix}__image-2`}>
            <Image src={serviceImage1} alt="" width={325} height={288} />
          </div>
          <div className={`${classNamePrefix}__image-3`}>
            <Image src={dot1} alt="" width={103.73} height={75.68} />
          </div>
          <div className={`${classNamePrefix}__image-4`}>
            <Image src={dot2} alt="" width={210.21} height={70.93} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

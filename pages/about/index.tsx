import React, { useEffect, useState } from "react";
import Image from "next/image";

import AnimatedGraph from "../components/animatedGraph";
import eyeGif from "../../public/static/eyeGif.gif";
import eyeOpen from "../../public/static/eyeOpen.png";
import dividerBG from "../../public/static/dividerBg1.png";
import CircleGroup from "../components/circleGroup";
import NormalCircleGroup from "../components/normalCircleGroup";
import bg from "../../public/static/pageBg.png";
import TextSlider from "../components/textSlider";
import ConnectSection from "../components/connectSection";

const classNamePrefix = "about-page";

const AboutPage = () => {
  const [showDivider, setShowDivider] = useState<boolean>(false);

  const listenScrollEvent = () => {
    const scroll = window.pageYOffset;
    if (scroll >= 500 && scroll < 1500) {
      setShowDivider(true);
    } else if (scroll >= 1500 && scroll < 1800) {
      setShowDivider(false);
    } else if (scroll >= 1800 && scroll < 2000) {
      setShowDivider(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div
      className={classNamePrefix}
      // style={{ backgroundImage: `url(${bg.src})` }}
    >
      <section className={`${classNamePrefix}__first-section`}>
        <div className={`${classNamePrefix}__first-section-slogan`}>
          Tạo ra ấn tượng bằng
        </div>

        <div className={`${classNamePrefix}__first-section-title`}>
          <div className={`${classNamePrefix}__first-section-title-outline`}>
            <span>Mũi Đinh Ba</span>
          </div>

          <div className={`${classNamePrefix}__first-section-subtitle`}>
            <span>
              Tư duy sáng tạo độc nhất, Góc nhìn nghệ thuật thị giác Ngôn từ
              mang bản sắc thương hiệu.
            </span>
          </div>
        </div>
      </section>

      <div
        className={`${classNamePrefix}__divider`}
        style={{ width: showDivider ? "100%" : 0 }}
      >
        <div className={`${classNamePrefix}__divider-content`}></div>
      </div>

      <section className={`${classNamePrefix}__second-section`}>
        <div className={`${classNamePrefix}__second-section-top`}>
          <span>
            Foolist hoạt động trong lĩnh vực Sáng tạo và Công nghệ, cung cấp các
            giải pháp sáng tạo và nghệ thuật cho nhu cầu về thiết kế đồ họa,
            phát triển truyền thông, hay tạo dựng website.
          </span>
        </div>

        <div className={`${classNamePrefix}__second-section-bottom`}>
          <div className={`${classNamePrefix}__second-section-bottom-image`}>
            <Image src={eyeGif} alt="" width={150} />
          </div>

          <div className={`${classNamePrefix}__second-section-bottom-text`}>
            <span>
              Chúng tôi sử dụng mũi đinh ba để tạo ấn tượng với khách hàng và
              đối tác của mình: tư duy sáng tạo độc nhất, góc nhìn nghệ thuật
              thị giác, và ngôn từ mang bản sắc thương hiệu.
            </span>
          </div>
        </div>
      </section>

      <section
        className={`${classNamePrefix}__image-divider`}
        style={{ backgroundImage: `url(${dividerBG.src})` }}
      />

      <section className={`${classNamePrefix}__third-section`}>
        <div className={`${classNamePrefix}__third-section-top`}>
          <div className={`${classNamePrefix}__third-section-top-title`}>
            <div>Tư duy sáng tạo </div>
            <span>độc nhất</span>
          </div>
        </div>

        <div
          className={`${classNamePrefix}__divider`}
          style={{ width: showDivider ? "100%" : 0 }}
        >
          <div className={`${classNamePrefix}__divider-content`}></div>
        </div>

        <div className={`${classNamePrefix}__third-section-middle`}>
          <span>
            Chúng tôi tin rằng sáng tạo không phải là một tài năng, mà là một kỹ
            năng có thể được học hỏi và phát triển. Chúng tôi sử dụng các phương
            pháp và công cụ khác nhau để kích thích tư duy sáng tạo .Chúng tôi
            cũng thách thức bản thân ra khỏi khuôn khổ và khám phá những khả
            năng và quan điểm mới.
          </span>
        </div>

        <div className={`${classNamePrefix}__third-section-bottom`}>
          <div style={{ marginLeft: 400 }}>
            <CircleGroup />
          </div>

          <div className={`${classNamePrefix}__third-section-bottom-text`}>
            <span>
              Tư duy sáng tạo được áp dụng vào mọi dự án. Foolist luôn cố gắng
              tìm ra những giải pháp độc đáo và hiệu quả phù hợp với nhu cầu và
              mong đợi của khách hàng.
              <br></br>
              <br></br>Ý kiến của khách hàng và đối tác luôn được lắng nghe, vì
              chúng tôi tin rằng sáng tạo được nuôi dưỡng bởi sự đa dạng và trao
              đổi ý tưởng.
            </span>
          </div>
        </div>
      </section>

      <section className={`${classNamePrefix}__fourth-section`}>
        <div className={`${classNamePrefix}__fourth-section-title`}>
          <div className={`${classNamePrefix}__fourth-section-title-text`}>
            <span>Góc nhìn nghệ thuật thị giác</span>
          </div>

          <div
            className={`${classNamePrefix}__fourth-section-title-divider`}
          ></div>

          <div className={`${classNamePrefix}__fourth-section-title-image`}>
            <Image src={eyeOpen} alt="" width={150} />
          </div>
        </div>

        <div className={`${classNamePrefix}__fourth-section-content`}>
          <div className={`${classNamePrefix}__fourth-section-content-item`}>
            <div className={`${classNamePrefix}__fourth-section-item-text`}>
              <span>
                Tại Foolist, sức mạnh của giao tiếp thị giác luôn được chú
                trọng. Chúng tôi tin rằng một bức ảnh có giá trị bằng ngàn lời
                nói, và một thiết kế thị giác được làm tốt có thể truyền đạt
                thông điệp một cách rõ ràng và thuyết phục.
                <br></br>
                <br></br>
                Vì vậy, chúng tôi chú ý đến từng chi tiết của thiết kế thị giác
                của mình, như màu sắc, hình dạng, bố cục, kiểu chữ, và hình ảnh.
              </span>
            </div>

            <div className={`${classNamePrefix}__fourth-section-graph`}>
              <NormalCircleGroup />
            </div>
          </div>

          <div className={`${classNamePrefix}__fourth-section-content-item`}>
            <div className={`${classNamePrefix}__second-section-bottom-image`}>
              <Image src={eyeGif} alt="" width={150} />
            </div>

            <div className={`${classNamePrefix}__fourth-section-item-text`}>
              <span>
                Các sản phẩm của Foolist lấy cảm hứng từ các hình thức nghệ
                thuật khác nhau, như hội họa, nhiếp ảnh, điêu khắc, và hoạt
                hình. Nghệ thuật được sử dụng làm phương tiện để biểu lộ cảm
                xúc, ý kiến, và câu chuyện của mỗi sản phẩm, và trên hết, để kết
                nối với khán giả và gợi lên cảm xúc và phản ứng của họ.
              </span>
            </div>
          </div>
        </div>
      </section>

      <TextSlider text="Ngôn từ mang bản sắc thương hiệu" />

      <section className={`${classNamePrefix}__fifth-section`}>
        <div className={`${classNamePrefix}__fifth-section-graph`}>
          <NormalCircleGroup />
        </div>

        <div className={`${classNamePrefix}__fifth-section-text`}>
          <div>
            Tại Foolist, chúng tôi hiểu được ý nghĩa của ngôn ngữ trong việc xây
            dựng bản sắc thương hiệu mạnh mẽ. Ngôn ngữ không chỉ là một phương
            tiện giao tiếp, mà còn là một phản ánh của giá trị, tính cách, và
            văn hóa của chúng ta. Đó là lý do vì sao chúng tôi luôn cẩn thận
            chọn lọc ngôn ngữ để phù hợp với hình ảnh và giọng điệu của thương
            hiệu.
          </div>

          <div>
            Chúng tôi sử dụng ngôn ngữ làm phương tiện để truyền đạt sứ mệnh,
            tầm nhìn, và giá trị của chúng ta cho khách hàng và đối tác. Ngôn
            ngữ được dùng làm phương tiện để thể hiện chuyên môn, chuyên nghiệp,
            và uy tính của chúng ta. Chúng ta sử dụng ngôn ngữ làm phương tiện
            để thiết lập quan hệ với khách hàng và xây dựng lòng tin và trung
            thành
          </div>
        </div>
      </section>

      <section className={`${classNamePrefix}__final-section`}>
        <div className={`${classNamePrefix}__employee-group`}>
          <div className={`${classNamePrefix}__employee-group-title`}>
            <span>Đội ngũ nhân sự</span>
          </div>

          <div className={`${classNamePrefix}__employee-group-line`}></div>
        </div>
      </section>

      <TextSlider text="- FOOLIST - CREATIVE - MEDIA - TECHNOLOGY" />

      <ConnectSection />

      <AnimatedGraph />
    </div>
  );
};

export default AboutPage;

import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import logo from "../../../public/static/foolistLogo.png";
import Image from "next/image";
import { GetStaticProps } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";

type IContentCircleType = "1" | "2" | "3";

interface INormalCircleProps {
  contentType?: IContentCircleType;
}

const classNamePrefix = "normal-circle-group";

const NormalCircleGroup: React.FC<INormalCircleProps> = (props) => {
  const { contentType } = props;

  return (
    <div className={classNamePrefix}>
      <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
        <div className={`${classNamePrefix}__item-wrapper-1`}>
          <div className={`${classNamePrefix}__item circle-1`}></div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <div className={`${classNamePrefix}__item-wrapper-2`}>
          <div className={`${classNamePrefix}__item circle-2`}></div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
        <div className={`${classNamePrefix}__item-wrapper-3`}>
          <div className={`${classNamePrefix}__item circle-3`}></div>
        </div>
      </AnimationOnScroll>

      {contentType === "3" && (
        <>
          <div className={`${classNamePrefix}__text-wrapper`}>
            <div
              className={`${classNamePrefix}__text animate__animated animate__zoomIn animate__delay-2s`}
            >
              <div className={`${classNamePrefix}__text-item text-5`}>
                <span>Thị giác</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-2`}>
                <Image
                  className={`${classNamePrefix}__image`}
                  src={logo}
                  alt=""
                />
              </div>
              <div className={`${classNamePrefix}__text-item text-6`}>
                <span>Độc nhất</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-7`}>
                <span>Góc nhìn</span>
              </div>
            </div>
          </div>

          <div className={`${classNamePrefix}__text-wrapper`}>
            <div
              className={`${classNamePrefix}__text animate__animated animate__zoomIn animate__delay-2s`}
            >
              <div className={`${classNamePrefix}__text-item text-1`}>
                <span>Sáng tạo</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-2`}>
                <Image src={logo} alt="" width={60} height={60} />
              </div>
              <div className={`${classNamePrefix}__text-item text-3`}>
                <span>Tư duy</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-4`}>
                <span>Nghệ thuật</span>
              </div>
            </div>
          </div>
        </>
      )}

      {contentType === "2" && (
        <div className={`${classNamePrefix}__text-wrapper`}>
          <div
            className={`${classNamePrefix}__text animate__animated animate__zoomIn animate__delay-1s`}
          >
            <div className={`${classNamePrefix}__text-item text-5`}>
              <span>Thị giác</span>
            </div>
            <div className={`${classNamePrefix}__text-item text-2`}>
              <Image src={logo} alt="" width={60} height={60} />
            </div>
            <div className={`${classNamePrefix}__text-item text-6`}>
              <span>Độc nhất</span>
            </div>
            <div className={`${classNamePrefix}__text-item text-7`}>
              <span>Góc nhìn</span>
            </div>
          </div>
        </div>
      )}

      {contentType === "1" && (
        <div className={`${classNamePrefix}__text-wrapper`}>
          <div
            className={`${classNamePrefix}__text animate__animated animate__zoomIn animate__delay-1s`}
          >
            <div className={`${classNamePrefix}__text-item text-1`}>
              <span>Sáng tạo</span>
            </div>
            <div className={`${classNamePrefix}__text-item text-2`}>
              <Image src={logo} alt="" width={60} height={60} />
            </div>
            <div className={`${classNamePrefix}__text-item text-3`}>
              <span>Tư duy</span>
            </div>
            <div className={`${classNamePrefix}__text-item text-4`}>
              <span>Nghệ thuật</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
//   },
// });

export default NormalCircleGroup;

import React, { useEffect, useState } from "react";
import Image from "next/image";

import eyeGif from "../../public/static/eyeGif.gif";
import eyeOpen from "../../public/static/eyeOpen.png";
import dividerBG from "../../public/static/dividerBg1.png";
import NormalCircleGroup from "../components/normalCircleGroup";
import TextSlider from "../components/textSlider";
import ConnectSection from "../components/connectSection";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MiniFooter from "../components/miniFooter";
import { AnimationOnScroll } from "react-animation-on-scroll";
import EmployeeSlider from "../components/employeeSlider";

const classNamePrefix = "about-page";

type Props = {
  // Add custom props here
};

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

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
    <div className={classNamePrefix}>
      <section className={`${classNamePrefix}__first-section`}>
        <div
          className={`${classNamePrefix}__first-section-slogan animate__animated animate__fadeInUp`}
        >
          {t("About_content.title")}
        </div>

        <div className={`${classNamePrefix}__first-section-title`}>
          <div
            className={`${classNamePrefix}__first-section-title-outline  animate__animated animate__fadeInUp`}
          >
            <span>{t("About_content.three-points")}</span>
          </div>

          <div className={`${classNamePrefix}__first-section-subtitle`}>
            <div
              className={`${classNamePrefix}__first-section-subtitle-item animate__animated animate__fadeInUp`}
            >
              {t("About_content.three-points-content.first.top")}{" "}
              <span>
                {t("About_content.three-points-content.first.middle")}
              </span>{" "}
              {t("About_content.three-points-content.first.end")}
            </div>

            <div
              className={`${classNamePrefix}__first-section-subtitle-item animate__animated animate__fadeInUp`}
            >
              {t("About_content.three-points-content.second.top")}{" "}
              <span>
                {t("About_content.three-points-content.second.middle")}
              </span>{" "}
              {t("About_content.three-points-content.second.end")}
            </div>

            <div
              className={`${classNamePrefix}__first-section-subtitle-item animate__animated animate__fadeInUp`}
            >
              {t("About_content.three-points-content.third.top")}{" "}
              <span>
                {t("About_content.three-points-content.third.middle")}
              </span>{" "}
              {t("About_content.three-points-content.third.end")}
            </div>
          </div>
        </div>

        <div
          className={`${classNamePrefix}__divider animate__animated animate__slideInLeft`}
          style={{ width: "100%" }}
        >
          <div className={`${classNamePrefix}__divider-content`}></div>
        </div>
      </section>

      <section className={`${classNamePrefix}__second-section`}>
        <div
          className={`${classNamePrefix}__second-section-top animate__animated animate__fadeInUp`}
        >
          <span
            className={`${classNamePrefix}__brand-name`}
            style={{
              color: "#f6a5c1",
              fontStyle: "italic",
              marginRight: 15,
              fontSize: 60,
            }}
          >
            {t("About_content.brand-name")}
          </span>
          <span>{t("About_content.paragraph-1")}</span>
        </div>

        <div className={`${classNamePrefix}__second-section-bottom`}>
          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <div className={`${classNamePrefix}__second-section-bottom-image`}>
              <Image src={eyeGif} alt="" width={150} />
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <div className={`${classNamePrefix}__second-section-bottom-text`}>
              <span>{t("About_content.paragraph-2")}</span>
            </div>
          </AnimationOnScroll>
        </div>
      </section>

      <section
        className={`${classNamePrefix}__image-divider`}
        style={{ backgroundImage: `url(${dividerBG.src})` }}
      />

      <section className={`${classNamePrefix}__third-section`}>
        <div className={`${classNamePrefix}__third-section-top`}>
          <div className={`${classNamePrefix}__third-section-top-title`}>
            <AnimationOnScroll
              animateIn="animate__slideInUp"
              animateOnce={true}
            >
              <div style={{ color: "#ffffff" }}>
                {t("About_content.creative-thinking")}
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__slideInUp"
              animateOnce={true}
            >
              <div className={`${classNamePrefix}__third-section-top-outline`}>
                <span>{t("About_content.unique")}</span>
              </div>
            </AnimationOnScroll>
          </div>
        </div>

        <div
          className={`${classNamePrefix}__divider`}
          style={{ width: "100%" }}
        >
          <div className={`${classNamePrefix}__divider-content`}></div>
        </div>

        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className={`${classNamePrefix}__third-section-middle`}>
            <span>{t("About_content.paragraph-3")}</span>
          </div>
        </AnimationOnScroll>

        <div className={`${classNamePrefix}__third-section-bottom`}>
          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <div className={`${classNamePrefix}__third-section-graph`}>
              <NormalCircleGroup contentType="1" />
            </div>
          </AnimationOnScroll>

          <div className={`${classNamePrefix}__third-section-bottom-text`}>
            <span>
              <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce={true}
              >
                {t("About_content.paragraph-4")}
              </AnimationOnScroll>

              <br></br>
              <br></br>
              <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce={true}
              >
                {t("About_content.paragraph-5")}
              </AnimationOnScroll>
            </span>
          </div>
        </div>
      </section>

      <section className={`${classNamePrefix}__fourth-section`}>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className={`${classNamePrefix}__fourth-section-title`}>
            <div className={`${classNamePrefix}__fourth-section-title-text`}>
              <span>{t("About_content.visual.first")}</span>
              <div
                className={`${classNamePrefix}__fourth-section-title-text-highlight`}
              >
                {t("About_content.visual.second")}
              </div>
              <span>{t("About_content.visual.third")}</span>
            </div>

            <div
              className={`${classNamePrefix}__fourth-section-title-divider`}
            ></div>

            <div className={`${classNamePrefix}__fourth-section-title-image`}>
              <Image src={eyeOpen} alt="" width={150} />
            </div>
          </div>
        </AnimationOnScroll>

        <div className={`${classNamePrefix}__fourth-section-content`}>
          <div className={`${classNamePrefix}__fourth-section-content-item`}>
            <div className={`${classNamePrefix}__fourth-section-item-text`}>
              <span>
                <AnimationOnScroll
                  animateIn="animate__slideInUp"
                  animateOnce={true}
                >
                  {t("About_content.paragraph-6")}
                </AnimationOnScroll>
                <br></br>
                <br></br>
                <AnimationOnScroll
                  animateIn="animate__slideInUp"
                  animateOnce={true}
                >
                  {t("About_content.paragraph-7")}
                </AnimationOnScroll>
              </span>
            </div>

            <div className={`${classNamePrefix}__fourth-section-graph`}>
              <NormalCircleGroup contentType="2" />
            </div>
          </div>

          <div className={`${classNamePrefix}__fourth-section-content-item`}>
            <AnimationOnScroll
              animateIn="animate__slideInUp"
              animateOnce={true}
            >
              <div
                className={`${classNamePrefix}__second-section-bottom-image`}
              >
                <Image src={eyeGif} alt="" width={150} />
              </div>
            </AnimationOnScroll>

            <div className={`${classNamePrefix}__fourth-section-item-text`}>
              <AnimationOnScroll
                animateIn="animate__slideInUp"
                animateOnce={true}
              >
                <div>{t("About_content.paragraph-8")}</div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>

      <TextSlider text={t("Brand-identity-language")} />

      <section className={`${classNamePrefix}__fifth-section`}>
        <div className={`${classNamePrefix}__fifth-section-graph`}>
          <NormalCircleGroup contentType="3" />
        </div>

        <div className={`${classNamePrefix}__fifth-section-text`}>
          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <div>{t("About_content.paragraph-9")}</div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <div>{t("About_content.paragraph-10")}</div>
          </AnimationOnScroll>
        </div>
      </section>

      <section className={`${classNamePrefix}__final-section`}>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className={`${classNamePrefix}__employee-group`}>
            <div className={`${classNamePrefix}__employee-group-title`}>
              <span>{t("Staff.team")}</span>
              <span
                style={{
                  fontFamily: "Times New Roman",
                  color: "#f6a5c1",
                  fontStyle: "italic",
                  fontSize: 70,
                }}
              >
                {t("Staff.staff")}
              </span>
            </div>

            <div className={`${classNamePrefix}__employee-group-line`}></div>
          </div>
        </AnimationOnScroll>

        <div className={`${classNamePrefix}__employee-slider`}>
          <EmployeeSlider />
        </div>
      </section>

      <TextSlider text="- FOOLIST - CREATIVE - MEDIA - TECHNOLOGY" />

      <ConnectSection />

      <div
        className={`${classNamePrefix}__footer`}
        style={{ padding: "0 15px", background: "#000000" }}
      >
        <MiniFooter />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AboutPage;

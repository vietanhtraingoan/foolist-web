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
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../utils/constants";
import { useTranslation } from "next-i18next";

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
        <div className={`${classNamePrefix}__first-section-slogan`}>
          {t("About_content.title")}
        </div>

        <div className={`${classNamePrefix}__first-section-title`}>
          <div className={`${classNamePrefix}__first-section-title-outline`}>
            <span>{t("About_content.three-points")}</span>
          </div>

          <div className={`${classNamePrefix}__first-section-subtitle`}>
            <span>{t("About_content.three-points-content")}</span>
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
          <span>{t("About_content.paragraph-1")}</span>
        </div>

        <div className={`${classNamePrefix}__second-section-bottom`}>
          <div className={`${classNamePrefix}__second-section-bottom-image`}>
            <Image src={eyeGif} alt="" width={150} />
          </div>

          <div className={`${classNamePrefix}__second-section-bottom-text`}>
            <span>{t("About_content.paragraph-2")}</span>
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
            <div>{t("About_content.creative-thinking")}</div>
            <span>{t("About_content.unique")}</span>
          </div>
        </div>

        <div
          className={`${classNamePrefix}__divider`}
          style={{ width: showDivider ? "100%" : 0 }}
        >
          <div className={`${classNamePrefix}__divider-content`}></div>
        </div>

        <div className={`${classNamePrefix}__third-section-middle`}>
          <span>{t("About_content.paragraph-3")}</span>
        </div>

        <div className={`${classNamePrefix}__third-section-bottom`}>
          <div style={{ marginLeft: 400 }}>
            <CircleGroup />
          </div>

          <div className={`${classNamePrefix}__third-section-bottom-text`}>
            <span>
              {t("About_content.paragraph-4")}
              <br></br>
              <br></br>
              {t("About_content.paragraph-5")}
            </span>
          </div>
        </div>
      </section>

      <section className={`${classNamePrefix}__fourth-section`}>
        <div className={`${classNamePrefix}__fourth-section-title`}>
          <div className={`${classNamePrefix}__fourth-section-title-text`}>
            <span> {t("About_content.visual")}</span>
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
                {t("About_content.paragraph-6")}
                <br></br>
                <br></br>
                {t("About_content.paragraph-7")}
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
              <span>{t("About_content.paragraph-8")}</span>
            </div>
          </div>
        </div>
      </section>

      <TextSlider text={t("Brand-identity-language")} />

      <section className={`${classNamePrefix}__fifth-section`}>
        <div className={`${classNamePrefix}__fifth-section-graph`}>
          <NormalCircleGroup />
        </div>

        <div className={`${classNamePrefix}__fifth-section-text`}>
          <div>{t("About_content.paragraph-9")}</div>

          <div>{t("About_content.paragraph-10")}</div>
        </div>
      </section>

      <section className={`${classNamePrefix}__final-section`}>
        <div className={`${classNamePrefix}__employee-group`}>
          <div className={`${classNamePrefix}__employee-group-title`}>
            <span>{t("Staff")}</span>
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

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AboutPage;

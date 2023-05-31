import React, { useEffect, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Marquee from "react-fast-marquee";
import ScrollAnimation from "react-animate-on-scroll";

import { DEFAULT_LANG } from "../../utils/constants";
import ProjectCarousel from "../components/projectCarousel";
import { ClientMocks } from "../../mocks/clientMocks";
import ClientItem from "../components/clientItem";
import CircleProjectSlider from "../components/circleProjectSlider";
import { infoMocks } from "../../mocks/infoMocks";
import LanguageChange from "../components/languageChange";
import IntroductionCarousel from "../components/introductionCarousel";
import { IClient } from "../../utils/types/clientTypes";

const classNamePrefix = "home-page";

type Props = {};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

  const [bgColor, setBgColor] = useState("#000000");
  const [animateClientTitile, setAnimateClientTitle] = useState(0);

  return (
    <div className={classNamePrefix} id="scrolly-div">
      <section
        id="first-section"
        className={`${classNamePrefix}__introduction-container`}
      >
        <div className={`${classNamePrefix}__introduction-title`}>
          <span>Foolist</span>

          <div className={`${classNamePrefix}__scroller`}>
            <span>
              Creative
              <br />
              Tech
              <br />
              Media
              <br />
              ERP
            </span>
          </div>
        </div>

        <div className={`${classNamePrefix}__introduction-image-container`}>
          <IntroductionCarousel />
        </div>
      </section>

      <section className={`${classNamePrefix}__project-carousel-container`}>
        <div className={`${classNamePrefix}__section-title`}>
          <span>{t("Section_label.product")}</span>
        </div>

        <ProjectCarousel />
      </section>

      {/* <section className={`${classNamePrefix}__project-circle-container`}>
        <div className={`${classNamePrefix}__project-info`}>Info</div>

        <div className={`${classNamePrefix}__project-slider`}>
          <CircleProjectSlider />
        </div>
      </section> */}

      <section className={`${classNamePrefix}__client-container`}>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          scrollableParentSelector="#scrolly-div"
        >
          <h1 style={{ color: "#ffffff" }}>{t("Section_label.client")}</h1>
        </ScrollAnimation>

        <div style={{ width: 1800, marginTop: 100 }}>
          <Marquee pauseOnHover>
            {ClientMocks.map((c) => (
              <ClientItem key={c.id} data={c} />
            ))}
          </Marquee>
        </div>
      </section>

      <section className={`${classNamePrefix}__divider-container`} />

      <section className={`${classNamePrefix}__footer-container`}>
        <div className={`${classNamePrefix}__footer-left`}>
          <div className={`${classNamePrefix}__footer-left-title`}>
            <span>“LET ART</span>
            <div className={`${classNamePrefix}__footer-left-title-highlight`}>
              UNLOCK
            </div>
            <span> YOUR BUSINESS “</span>
          </div>
        </div>

        <div className={`${classNamePrefix}__footer-right`}>
          <div className={`${classNamePrefix}__footer-info-group-title`}>
            Foolist Creative
          </div>

          <span className={`${classNamePrefix}__footer-info-group-text`}>
            Foolist.vn
          </span>

          <div className={`${classNamePrefix}__footer-info-group`}>
            {infoMocks.map((i) => (
              <span key={i.id}>{i.text}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default HomePage;

import React, { useEffect, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Marquee from "react-fast-marquee";

import { DEFAULT_LANG } from "../../utils/constants";
import ProjectCarousel from "../components/projectCarousel";
import { ClientMocks } from "../../mocks/clientMocks";
import ClientItem from "../components/clientItem";
import { infoMocks } from "../../mocks/infoMocks";
import IntroductionCarousel from "../components/introductionCarousel";
import { IClient } from "../../utils/types/clientTypes";
import ConnectSection from "../components/connectSection";
import GridProject from "../components/gridProject";
import ResponsiveClient from "../components/responsiveClient";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ServiceSection from "../components/serviceSection";
import LoadingView from "../loadingView";

const classNamePrefix = "home-page";

type Props = {};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

  return (
    <div className={classNamePrefix} id="scrolly-div">
      <section
        id="first-section"
        className={`${classNamePrefix}__introduction-container`}
      >
        <div className={`${classNamePrefix}__introduction-title`}>
          <div
            className={`${classNamePrefix}__introduction-title-brand animate__animated animate__fadeInUp`}
          >
            Foolist
          </div>

          <div
            className={`${classNamePrefix}__scroller animate__animated animate__fadeInUp`}
          >
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

        <div className={`${classNamePrefix}__introduction-text`}>
          <div
            className={`${classNamePrefix}__introduction-text-group animate__animated animate__slideInUp animate__slow`}
          >
            <span>{t("About_content.paragraph-1")}</span>
            <div />
            <span>{t("About_content.paragraph-2")}</span>
          </div>
        </div>

        <div className={`${classNamePrefix}__introduction-image-container`}>
          <IntroductionCarousel />
        </div>
      </section>

      <section className={`${classNamePrefix}__grid-project`}>
        <GridProject />
      </section>

      <section className={`${classNamePrefix}__project-carousel-container`}>
        <div className={`${classNamePrefix}__section-title`}>
          <span>{t("Section_label.product")}</span>
        </div>

        <ProjectCarousel />
      </section>

      <section className={`${classNamePrefix}__responsive-client-container`}>
        <ResponsiveClient />
      </section>

      <section className={`${classNamePrefix}__service-section`}>
        <ServiceSection />
      </section>

      <section className={`${classNamePrefix}__client-container`}>
        <div className={`${classNamePrefix}__section-title`}>
          <span>{t("Section_label.client")}</span>
        </div>

        {ClientMocks ? (
          <div style={{ width: 1800, marginTop: 100 }}>
            <Marquee pauseOnHover>
              {ClientMocks.map((c: IClient) => (
                <ClientItem key={c.id} data={c} />
              ))}
            </Marquee>
          </div>
        ) : (
          ""
        )}
      </section>

      <section className={`${classNamePrefix}__divider-container`} />

      <section className={`${classNamePrefix}__connection-container`}>
        <ConnectSection />
      </section>

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
              <span key={i.id}>{t(i.text)}</span>
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

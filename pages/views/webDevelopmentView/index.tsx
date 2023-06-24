import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import { ServicesMock } from "../../../mocks/servicesMock";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";

type Props = {};

const classNamePrefix = "web-development-view";

const WebDevelopmentView = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[2];

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content-first`}>
          <div
            className="animate__animated animate__zoomIn"
            style={{ width: "100%", position: "relative" }}
          >
            <div className={`${classNamePrefix}__image`}>
              {(
                <LazyLoadImage
                  style={{ borderRadius: 15 }}
                  src={subImg[0].item.src}
                  placeholderSrc={subImg[0].item.src}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              ) || <Skeleton />}
            </div>

            <div className={`${classNamePrefix}__image-layer`}></div>
          </div>

          <div className={`${classNamePrefix}__title`}>
            {t("web-mobile-application")}
          </div>

          <div
            className={`${classNamePrefix}__content-section-title`}
            style={{ margin: "80px 0 40px 0" }}
          >
            {t(content.paragraphTitle1)}
          </div>

          <div className={`${classNamePrefix}__content-section-text`}>
            {t(content.first)}
          </div>

          <div
            className="animate__animated animate__zoomIn"
            style={{ width: "100%" }}
          >
            <div className={`${classNamePrefix}__image-large`}>
              {(
                <LazyLoadImage
                  style={{ borderRadius: 15, margin: "40px 0" }}
                  src={subImg[2].item.src}
                  placeholderSrc={subImg[2].item.src}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              ) || <Skeleton />}
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__content-second`}>
          <div className={`${classNamePrefix}__content-second-item`}>
            <div
              className={`${classNamePrefix}__content-section-title`}
              style={{ marginBottom: 32 }}
            >
              {t(content.paragraphTitle3)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.third)}
            </div>
          </div>

          <div
            className="animate__animated animate__zoomIn"
            style={{ width: "100%" }}
          >
            <div className={`${classNamePrefix}__image`}>
              {(
                <LazyLoadImage
                  style={{ borderRadius: 15, margin: "40px 0" }}
                  src={subImg[1].item.src}
                  placeholderSrc={subImg[1].item.src}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              ) || <Skeleton />}
            </div>
          </div>

          <div
            className={`${classNamePrefix}__content-section-title`}
            style={{ margin: "32px 0" }}
          >
            {t(content.paragraphTitle4)}
          </div>

          <div
            className={`${classNamePrefix}__content-section-text`}
            style={{ marginBottom: 32 }}
          >
            {t(content.fourth)}
          </div>

          <div
            className={`${classNamePrefix}__content-section-text`}
            style={{ marginBottom: 32 }}
          >
            {t(content.second)}
          </div>

          <div
            className={`${classNamePrefix}__content-section-text`}
            style={{ marginBottom: 32 }}
          >
            {t(content.fifth)}
          </div>

          <div className={`${classNamePrefix}__content-section-text`}>
            {t(content.sixth)}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default WebDevelopmentView;

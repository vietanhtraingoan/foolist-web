import Image from "next/image";
import React, { useState } from "react";
import { ServicesMock } from "../../../mocks/servicesMock";
import { useTranslation } from "next-i18next";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";
import videoBg from "../../../public/static/videoBg.png";
import videoLayer from "../../../public/static/videoLayer.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Head from "next/head";

type Props = {};

const classNamePrefix = "tvc-view";

const TVCView = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[0];

  const [videoPlay, setVideoPlay] = useState<boolean>(false);

  const handlePlayVideo = () => {
    setVideoPlay(true);
  };

  return (
    <div className={classNamePrefix}>
      <Head>
        <title>{t("Services")}-TVC</title>
      </Head>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content-first`}>
          <div className="animate__animated animate__zoomIn">
            <div className={`${classNamePrefix}__image-large`} style={{overflow: "hidden"}}>
              {(
                <LazyLoadImage
                  src={subImg[0].item.src}
                  placeholderSrc={subImg[0].item.src}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              ) || <Skeleton />}
              <div className={`${classNamePrefix}__image-layer`}></div>
            </div>
          </div>

          <div
            className={`${classNamePrefix}__content-section-title`}
            style={{ margin: "32px 0" }}
          >
            {t(content.paragraphTitle1)}
          </div>

          <div className={`${classNamePrefix}__content-section-text`}>
            {t(content.first)}
          </div>

          <div className={`${classNamePrefix}__content-section-text`}>
            {t(content.second)}
          </div>
        </div>

        <div className={`${classNamePrefix}__content-second`}>
          <div className={`${classNamePrefix}__content-second-item`}>
            <div
              className={`${classNamePrefix}__content-section-title`}
              style={{ marginBottom: 32 }}
            >
              {t(content.paragraphTitle2)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.third)}
            </div>

            <div
              className="animate__animated animate__zoomIn"
              style={{ width: "100%" }}
            >
              <div className={`${classNamePrefix}__image-small`}>
                {(
                  <LazyLoadImage
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
              {t(content.paragraphTitle3)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.fourth)}
            </div>
          </div>

          <div className={`${classNamePrefix}__content-second-item`}>
            <div
              className="animate__animated animate__zoomIn"
              style={{ width: "100%" }}
            >
              <div className={`${classNamePrefix}__image-small`}>
                {(
                  <LazyLoadImage
                    src={subImg[2].item.src}
                    placeholderSrc={subImg[2].item.src}
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

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.fifth)}
            </div>

            <div
              className="animate__animated animate__zoomIn"
              style={{ width: "100%", marginTop: 30 }}
            >
              <div className={`${classNamePrefix}__image-small`}>
                {(
                  <LazyLoadImage
                    src={subImg[3].item.src}
                    placeholderSrc={subImg[3].item.src}
                    effect="blur"
                    width="100%"
                    height="100%"
                  />
                ) || <Skeleton />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${classNamePrefix}__bottom`}>
        <div
          className={`${classNamePrefix}__bottom-video`}
          style={{ backgroundImage: `url(${videoBg.src})` }}
        >
          <div className={`${classNamePrefix}__bottom-video-wrapper`}>
            <iframe
              style={{ border: 0 }}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Uc5dm66PjM8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <div
              className={`${classNamePrefix}__bottom-video-layer`}
              style={{
                backgroundImage: `url(${videoLayer.src})`,
                zIndex: videoPlay ? -1 : 0,
              }}
            >
              <RightCircleOutlined
                rev="true"
                className={`${classNamePrefix}__bottom-video-layer-icon`}
                onClick={handlePlayVideo}
              />
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__content-bottom-text`}>
          <div
            className={`${classNamePrefix}__content-section-text`}
            style={{ marginTop: 32 }}
          >
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

export default TVCView;

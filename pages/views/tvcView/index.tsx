import Image from "next/image";
import React from "react";
import { ServicesMock } from "../../../mocks/servicesMock";
import { useTranslation } from "next-i18next";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";

type Props = {};

const classNamePrefix = "tvc-view";

const TVCView = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[0];

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content-first`}>
          <div className="animate__animated animate__zoomIn">
            <div className={`${classNamePrefix}__image-large`}>
              {(
                <LazyLoadImage
                  src={subImg[0].item.src}
                  placeholderSrc={subImg[0].item.src}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
              ) || <Skeleton />}
            </div>
            {/* <Image
              style={{ borderRadius: 15 }}
              src={subImg[0].item.src}
              alt=""
              width={550}
              height={500}
              loading="lazy"
              className={`${classNamePrefix}__image-large`}
            /> */}
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
              style={{ width: "100%" }}
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
        <div className={`${classNamePrefix}__bottom-video`}>
          <iframe
            src="https://res.cloudinary.com/dufh7rv0n/video/upload/v1687329964/output_compress-video-online.com_ojk2yb.mp4"
            title="W3Schools Free Online Web Tutorials"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>

        <div
          className={`${classNamePrefix}__content-section-text`}
          style={{ marginTop: 32 }}
        >
          {t(content.sixth)}
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

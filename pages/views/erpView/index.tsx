import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React from "react";
import { DEFAULT_LANG } from "../../../utils/constants";
import { ServicesMock } from "../../../mocks/servicesMock";
import { useTranslation } from "next-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";

type Props = {};

const classNamePrefix = "erp-view";

const ERPView = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[3];

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className="animate__animated animate__zoomIn">
          <div className={`${classNamePrefix}__content-image`}>
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
        </div>

        <div className={`${classNamePrefix}__title`}>
          {t("enterprise-planning")}
        </div>

        <div className={`${classNamePrefix}__content-section-text`}>
          {t(content.first)}
        </div>

        <div className={`${classNamePrefix}__content-section-text`}>
          {t(content.third)}
        </div>

        <div className={`${classNamePrefix}__content-section-text`}>
          {t(content.fourth)}
        </div>

        <div className={`${classNamePrefix}__content-section-text`}>
          {t(content.fifth)}
        </div>

        <div className={`${classNamePrefix}__content-section-text`}>
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

export default ERPView;

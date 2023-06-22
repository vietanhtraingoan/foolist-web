import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React from "react";
import Image from "next/image";
import { DEFAULT_LANG } from "../../../utils/constants";
import { ServicesMock } from "../../../mocks/servicesMock";
import { useTranslation } from "next-i18next";

type Props = {};

const classNamePrefix = "erp-view";

const ERPView = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[3];

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className="animate__animated animate__zoomIn">
          <Image
            style={{ borderRadius: 15 }}
            src={subImg[0].item.src}
            alt=""
            className={`${classNamePrefix}__content-image`}
            width={1150}
            height={850}
            loading="lazy"
          />
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

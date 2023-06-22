import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import { ServicesMock } from "../../../mocks/servicesMock";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";

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
          <Image
            style={{ borderRadius: 15 }}
            src={subImg[0].item.src}
            alt=""
            width={670}
            height={600}
            loading="lazy"
          />

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

          <Image
            style={{ borderRadius: 15, margin: "40px 0" }}
            src={subImg[2].item.src}
            alt=""
            width={670}
            height={1800}
            loading="lazy"
          />
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

          <Image
            style={{ borderRadius: 15, margin: "40px 0" }}
            src={subImg[1].item.src}
            alt=""
            width={670}
            height={600}
            loading="lazy"
          />

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

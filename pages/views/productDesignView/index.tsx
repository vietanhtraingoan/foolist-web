import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import { ServicesMock } from "../../../mocks/servicesMock";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";

type Props = {};

const classNamePrefix = "product-design-view";

const ProductDesignView = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[1];

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
          />

          <div
            className={`${classNamePrefix}__content-section-title`}
            style={{ margin: "32px 0" }}
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
            height={600}
          />

          <div
            className={`${classNamePrefix}__content-section-title`}
            style={{ marginBottom: 32 }}
          >
            {t(content.paragraphTitle2)}
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
              {t(content.paragraphTitle3)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.third)}
            </div>
          </div>

          <div className={`${classNamePrefix}__content-second-item`}>
            <Image
              style={{ borderRadius: 15, margin: "40px 0" }}
              src={subImg[1].item.src}
              alt=""
              width={670}
              height={600}
            />

            <div
              className={`${classNamePrefix}__content-section-title`}
              style={{ margin: "32px 0" }}
            >
              {t(content.paragraphTitle4)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.fourth)}
            </div>

            <Image
              style={{ borderRadius: 15, margin: "40px 0" }}
              src={subImg[3].item.src}
              alt=""
              width={670}
              height={600}
            />
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

export default ProductDesignView;

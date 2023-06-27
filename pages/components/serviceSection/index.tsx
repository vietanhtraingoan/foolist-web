import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React from "react";
import CustomNavigationButton from "../customNavigationButton";
import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";

type Props = {
  // Add custom props here
};

const classNamePrefix = "service-section";

const ServiceSection = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__title-wrapper`}>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className={`${classNamePrefix}__title`}>
            {t("service.title")}
          </div>
        </AnimationOnScroll>

        <div className={`${classNamePrefix}__title-button`}>
          <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
            <CustomNavigationButton size="large" onClick={() => router.push("/about")} />
          </AnimationOnScroll>
        </div>
      </div>

      <div className={`${classNamePrefix}__content`}>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className={`${classNamePrefix}__content-item`}>
            <div className={`${classNamePrefix}__content-item-title`}>
              <span> {t("service.media")}</span>
            </div>

            <div className={`${classNamePrefix}__content-item-list`}>
              <ul>
                <li onClick={() => router.push(`/serviceDetail?id=1`)}>{t("service.tvc")}</li>
                <li onClick={() => router.push(`/serviceDetail?id=2`)}>{t("service.product-design")}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>

        <div className={`${classNamePrefix}__content-divider`} />

        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <div className={`${classNamePrefix}__content-item`}>
            <div className={`${classNamePrefix}__content-item-title`}>
              <span>{t("service.technology-development")}</span>
            </div>

            <div className={`${classNamePrefix}__content-item-list`}>
              <ul>
                <li onClick={() => router.push(`/serviceDetail?id=3`)}>{t("service.website-development")}</li>
                <li onClick={() => router.push(`/serviceDetail?id=3`)}>{t("service.mobile-app-development")}</li>
                <li onClick={() => router.push(`/serviceDetail?id=4`)}>{t("service.erp")}</li>
              </ul>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ServiceSection;

import React from "react";
import CustomNavigationButton from "../customNavigationButton";
import SocialGroup from "../socialGroup";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

const classNamePrefix = "connect-section";

type Props = {
  // Add custom props here
};

const ConnectSection = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const serviceList = [
    { id: 1, title: t("service.tvc"), onClick: () => router.push(`/serviceDetail?id=1`) },
    { id: 2, title: t("service.product-design"), onClick: () => router.push(`/serviceDetail?id=2`) },
    { id: 3, title: t("service.website-development"), onClick: () => router.push(`/serviceDetail?id=3`) },
    { id: 4, title: t("service.mobile-app-development"), onClick: () => router.push(`/serviceDetail?id=3`) },
    { id: 5, title: t("service.erp"), onClick: () => router.push(`/serviceDetail?id=4`) },
  ];

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__top`}>
        <div className={`${classNamePrefix}__top-text`}>
          {t("connect-with")} <span>FOOLIST </span>
        </div>

        <div className={`${classNamePrefix}__top-button`}>
          <CustomNavigationButton
            size="large"
            onClick={() => router.push("/contact")}
          />
        </div>
      </div>

      <div className={`${classNamePrefix}__bottom`}>
        <div className={`${classNamePrefix}__bottom-left`}>
          <div className={`${classNamePrefix}__bottom-left-item`}>
            <span>{t("explore")}</span>
            <div>
              <SocialGroup />
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__bottom-right`}>
          <span>{t("Services")}</span>

          <div className={`${classNamePrefix}__service-list`}>
            {serviceList
              ? serviceList.map((s) => (
                  <div
                    className={`${classNamePrefix}__service-item`}
                    key={s.id}
                    onClick={s.onClick}
                  >
                    <span>{s.title}</span>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ConnectSection;

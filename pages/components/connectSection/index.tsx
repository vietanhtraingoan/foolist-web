import React from "react";
import CustomNavigationButton from "../customNavigationButton";
import SocialGroup from "../socialGroup";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const classNamePrefix = "connect-section";

type Props = {
  // Add custom props here
};

const ConnectSection = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation("common");
  const router = useRouter();

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
            <span>{t("register-to-receive-info")}</span>
            <div className={`${classNamePrefix}__bottom-left-input`}>
              <input type="text" id="" placeholder={t("input-placeholder")} />
              <div className={`${classNamePrefix}__bottom-left-input-button`}>
                <CustomNavigationButton size="small" />
              </div>
            </div>
          </div>

          <div className={`${classNamePrefix}__bottom-left-item`}>
            <span>{t("explore")}</span>
            <div>
              <div>
                <SocialGroup />
              </div>
            </div>
          </div>
        </div>

        <div className={`${classNamePrefix}__bottom-right`}>
          <span>{t("Services")}</span>

          <div></div>
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

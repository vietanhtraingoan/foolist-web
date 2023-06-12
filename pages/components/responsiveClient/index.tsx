import React from "react";
import { ClientMocks } from "../../../mocks/clientMocks";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

const classNamePrefix = "responsive-client";

type Props = {};

const ResponsiveClient = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation();
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__title`}>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
        >
          <span> {t("Section_label.client")}</span>
        </AnimationOnScroll>
      </div>

      <div className={`${classNamePrefix}__wrapper`}>
        {ClientMocks
          ? ClientMocks.map((c) => (
              <div className={`${classNamePrefix}__item`} key={c.id}>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  animateOnce={true}
                >
                  <Image src={c.imgUrl.src} alt="" width={250} height={140} />
                </AnimationOnScroll>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default ResponsiveClient;

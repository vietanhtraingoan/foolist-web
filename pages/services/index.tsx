import React from "react";
import MiniFooter from "../components/miniFooter";
import { ServicesMock } from "../../mocks/servicesMock";
import { useRouter } from "next/router";
import ConnectSection from "../components/connectSection";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {
  // Add custom props here
};

const classNamePrefix = "service-page";

const ServicesPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__slogan`}>
        <div className="animate__animated animate__slideInUp">
          {t("service.slogan.slogan1")}
        </div>
        <div className="animate__animated animate__slideInUp animate__slow">
          {t("service.slogan.slogan2")}
        </div>
      </div>

      <div className={`${classNamePrefix}__list`}>
        {ServicesMock
          ? ServicesMock.map((s) => (
              <div
                className={`${classNamePrefix}__list-item`}
                key={s.id}
                onClick={() => router.push(`/serviceDetail?id=${s.id}`)}
              >
                <div
                  className={`${classNamePrefix}__list-item-image`}
                  style={{ backgroundImage: `url(${s.imgeUrl.src})` }}
                ></div>

                <div className={`${classNamePrefix}__list-item-title`}>
                  {s.title}
                </div>
              </div>
            ))
          : ""}
      </div>

      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
        <div className={`${classNamePrefix}__slogan-highlight`}>
          <span>{t("service.slogan.slogan3")}</span>
        </div>
      </AnimationOnScroll>

      <div className={`${classNamePrefix}__connect`}>
        <ConnectSection />
      </div>

      <div className={`${classNamePrefix}__footer`}>
        <MiniFooter />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ServicesPage;

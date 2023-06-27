import React, { useEffect, useState } from "react";
import MiniFooter from "../components/miniFooter";
import { ServicesMock } from "../../mocks/servicesMock";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";
import Head from 'next/head'

type Props = {
  // Add custom props here
};

const classNamePrefix = "service-page";

const ServicesPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div className={classNamePrefix}>
       <Head>
        <title>{t("Services")}</title>
      </Head>
      <div className={`${classNamePrefix}__slogan`}>
        <div className="animate__animated animate__slideInUp">
          {t("Services")}
        </div>
      </div>

      <div className={`${classNamePrefix}__list`}>
        {ServicesMock
          ? ServicesMock.map((s) => (
              <div
                className={`${classNamePrefix}__list-item animate__animated animate__zoomIn`}
                key={s.id}
                onClick={() => router.push(`/serviceDetail?id=${s.id}`)}
              >
                {windowSize < 768 ? (
                  <div className={`${classNamePrefix}__list-item-image`}>
                    {(
                      <LazyLoadImage
                        src={s.imgeUrl.src}
                        placeholderSrc={s.imgeUrl.src}
                        effect="blur"
                        width="100%"
                        height="100%"
                      />
                    ) || <Skeleton />}
                  </div>
                ) : (
                  <div className={`${classNamePrefix}__list-item-image`}>
                    {(
                      <LazyLoadImage
                        src={s.presentImg.src}
                        placeholderSrc={s.presentImg.src}
                        effect="blur"
                        width="100%"
                        height="100%"
                      />
                    ) || <Skeleton />}
                  </div>
                )}

                <div className={`${classNamePrefix}__list-item-title`}>
                  {t(s.title)}
                </div>
              </div>
            ))
          : ""}
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

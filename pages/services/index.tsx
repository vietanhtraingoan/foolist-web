import React, { useEffect, useState } from "react";
import MiniFooter from "../components/miniFooter";
import { ServicesMock } from "../../mocks/servicesMock";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

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

  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <div className={classNamePrefix}>
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
                  <div
                    className={`${classNamePrefix}__list-item-image`}
                    style={{ backgroundImage: `url(${s.imgeUrl.src})` }}
                  ></div>
                ) : (
                  <Image
                    src={s.presentImg.src}
                    alt=""
                    className={`${classNamePrefix}__list-item-image`}
                    width={200}
                    height={300}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(237, 181, 6)}
                  />
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

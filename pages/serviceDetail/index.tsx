import React from "react";
import { getUrlParams } from "../../utils/commonFunctions";
import { ServicesMock } from "../../mocks/servicesMock";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MiniFooter from "../components/miniFooter";
import Image from "next/image";

type Props = {};

const classNamePrefix = "service-detail";

const ServiceDetail = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const id = getUrlParams("id");

  const selectedService = ServicesMock.find((item) => item.id === id);

  return (
    <div className={classNamePrefix}>
      {selectedService ? (
        <>
          <div className={`${classNamePrefix}__title`}>
            <div className={`${classNamePrefix}__title-content`}>
                <div>{selectedService.title}</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
              transform="rotate(180)"
              version="1.1"
              viewBox="0 0 1440 490"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="rgba(246, 165, 193, 1)"></stop>
                  <stop offset="100%" stopColor="rgba(246, 165, 193, 1)"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#sw-gradient-0)"
                d="M0 49l80-8.2C160 33 320 16 480 24.5S800 65 960 98s320 65 480 65.3c160-.3 320-32.3 480-8.1 160 24.8 320 105.8 480 98C2560 245 2720 147 2880 147s320 98 480 98 320-98 480-130.7c160-32.3 320-.3 480 40.9 160 40.8 320 89.8 480 81.6 160-7.8 320-73.8 480-49 160 24.2 320 139.2 480 171.5 160 32.7 320-16.3 480-16.3s320 49 480 16.3c160-32.3 320-147.3 480-179.6 160-32.7 320 16.3 480 32.6 160 16.7 320-.3 480 32.7s320 114 480 130.7c160 16.3 320-32.7 480-40.9 160-7.8 320 24.2 480 49 160 24.2 320 41.2 480 40.9 160 .3 320-16.7 480-16.4 160-.3 320 16.7 480-8.1 160-24.2 320-90.2 400-122.5l80-32.7v245H0z"
              ></path>
            </svg>
          </div>

          <div className={`${classNamePrefix}__content`}></div>

          <div className={`${classNamePrefix}__footer`}>
            <MiniFooter />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ServiceDetail;

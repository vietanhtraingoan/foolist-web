import React from "react";
import { getUrlParams } from "../../utils/commonFunctions";
import { ServicesMock } from "../../mocks/servicesMock";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MiniFooter from "../components/miniFooter";
import Image from "next/image";
import TVCView from "../views/tvcView";

type Props = {};

const classNamePrefix = "service-detail";

const ServiceDetail = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const id = getUrlParams("id");

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        {id === "1" && <TVCView />}
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

export default ServiceDetail;

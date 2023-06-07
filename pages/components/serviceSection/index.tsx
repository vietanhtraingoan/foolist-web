import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React from "react";

type Props = {
  // Add custom props here
};

const classNamePrefix = "service-section";

const ServiceSection = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__title`}>Dịch vu của chúng tôi</div>

      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content-item`}>
            <div>Media Development</div>

            <div>
                <ul>
                    <li>TVC</li>
                    <li>Product Design</li>
                </ul>
            </div>
        </div>

        <div className={`${classNamePrefix}__content-item`}>
            <div>Information Technology</div>

            <div>
                <ul>
                    <li>Website development</li>
                    <li>Mobile application</li>
                    <li>ẺP</li>
                </ul>
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

export default ServiceSection;

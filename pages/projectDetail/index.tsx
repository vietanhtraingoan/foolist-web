import React, { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import { projectMocks } from "../../mocks/projectMocks";
import { getUrlParams } from "../../utils/commonFunctions";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import MiniFooter from "../components/miniFooter";

type Props = {
  // Add custom props here
};

const classNamePrefix = "project-detail-page";

const ProjectDetailPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation();

  const id = getUrlParams("id");

  const projectSelected = projectMocks.find((p) => p.id === id);

  return (
    <div className={classNamePrefix}>
      {projectSelected ? (
        <section className={`${classNamePrefix}__content`}>
          <section className={`${classNamePrefix}__content-main`}>
            <div className={`${classNamePrefix}__floated-item`}>
              <div className={`${classNamePrefix}__content-main-image-wrapper`}>
                <div
                  className={`${classNamePrefix}__content-main-image`}
                  style={{
                    backgroundImage: `url(${
                      projectSelected.imgUrl ? projectSelected.imgUrl.src : ""
                    })`,
                  }}
                ></div>

                <div
                  className={`${classNamePrefix}__content-main-image-layer`}
                ></div>
              </div>
            </div>

            <div
              className={`${classNamePrefix}__content-main-text-wrapper`}
              style={{}}
            >
              <div className={`${classNamePrefix}__content-main-name`}>
                <span>
                  {projectSelected.name ? projectSelected.name : "No name"}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-title`}>
                <span>
                  {projectSelected.title
                    ? t(projectSelected.title)
                    : "No title"}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-text`}>
                {projectSelected.intro
                  ? t(projectSelected.intro)
                  : "No introduction"}
              </div>
            </div>
          </section>

          <section className={`${classNamePrefix}__content-sub`}>
            <div className={`${classNamePrefix}__content-sub-text-wrapper`}>
              <div className={`${classNamePrefix}__content-main-name`}>
                <span>
                  {projectSelected.name ? projectSelected.name : "No name"}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-title`}>
                <span>
                  {projectSelected.paragraph1
                    ? t(projectSelected.paragraph1.title)
                    : "No title"}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-text`}>
                {projectSelected.paragraph1
                  ? t(projectSelected.paragraph1.content)
                  : "No content"}
              </div>
            </div>

            <div
              className={`${classNamePrefix}__content-sub-image`}
              style={{
                backgroundImage: `url(${
                  projectSelected.subImgUrl ? projectSelected.subImgUrl.src : ""
                })`,
              }}
            ></div>
          </section>

          <section className={`${classNamePrefix}__content-sub`}>
            <div
              className={`${classNamePrefix}__content-sub-image`}
              style={{
                backgroundImage: `url(${
                  projectSelected.subImgUrl ? projectSelected.subImgUrl.src : ""
                })`,
              }}
            ></div>

            <div className={`${classNamePrefix}__content-sub-text-wrapper`}>
              <div className={`${classNamePrefix}__content-main-title`}>
                <span>
                  {projectSelected.paragraph2
                    ? t(projectSelected.paragraph2.title)
                    : "No title"}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-text`}>
                {projectSelected.paragraph2
                  ? t(projectSelected.paragraph2.content)
                  : "No content"}
              </div>
            </div>
          </section>
        </section>
      ) : (
        ""
      )}

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

export default ProjectDetailPage;

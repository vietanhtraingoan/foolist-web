import React, { useEffect, useState } from "react";
import AnimatedNextButton from "../animatedNextButton";
import { useSelector } from "react-redux";
import { getProjectId } from "../../../store/selector/rootSelector";
import { projectMocks } from "../../../mocks/projectMocks";
import { useTranslation } from "next-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";

interface IProjectDetailProps {
  projectSelect?: boolean;
  handleClose?: () => void;
}

const classNamePrefix = "project-detail";

const ProjectDetail: React.FC<IProjectDetailProps> = (props) => {
  const { t } = useTranslation();

  const [animation, setAnimation] = useState<boolean>(true);

  const projectId = useSelector(getProjectId);

  const projectSelected = projectMocks.find((p) => p.id === projectId);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  }, []);

  return (
    <div
      className={classNamePrefix}
      style={{
        padding: animation ? 0 : "20px 60px",
      }}
    >
      {projectSelected ? (
        <section className={`${classNamePrefix}__content`}>
          <section className={`${classNamePrefix}__content-main`}>
            <div className={`${classNamePrefix}__floated-item`}>
              <div
                className={`${classNamePrefix}__content-main-image-wrapper`}
                style={{
                  width: animation ? "100vw" : 450,
                  height: animation ? "100vh" : 450,
                  marginLeft: animation ? 0 : 161,
                }}
              >
                <div
                  className={`${classNamePrefix}__content-main-image`}
                  style={{
                    // backgroundImage: `url(${
                    //   projectSelected.subImgUrl ? projectSelected.subImgUrl.src : ""
                    // })`,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {(
                    <LazyLoadImage
                      style={{ borderRadius: 15 }}
                      src={projectSelected.imgUrl.src}
                      placeholderSrc={projectSelected.imgUrl.src}
                      effect="blur"
                      width="100%"
                      height="100%"
                    />
                  ) || <Skeleton />}
                </div>

                <div
                  className={`${classNamePrefix}__content-main-image-layer`}
                ></div>
              </div>
            </div>

            <div
              className={`${classNamePrefix}__content-main-text-wrapper`}
              style={{
                bottom: animation ? -400 : 200,
                display: animation ? "none" : "block",
              }}
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
                  projectSelected.imgUrl ? projectSelected.subImgUrl.src : ""
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
    </div>
  );
};

export default ProjectDetail;

import React, { useEffect, useState } from "react";
import AnimatedNextButton from "../animatedNextButton";
import { useSelector } from "react-redux";
import { getProjectId } from "../../../store/selector/rootSelector";
import { projectMocks } from "../../../mocks/projectMocks";

interface IProjectDetailProps {
  projectSelect?: boolean;
  handleClose?: () => void;
}

const classNamePrefix = "project-detail";

const ProjectDetail: React.FC<IProjectDetailProps> = (props) => {
  const { projectSelect, handleClose } = props;

  const [animation, setAnimation] = useState<boolean>(true);

  const projectId = useSelector(getProjectId);

  const projectSelected = projectMocks.find((p) => p.id === projectId);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 700);
  }, []);

  return (
    <div
      className={classNamePrefix}
      style={{
        padding: animation ? 0 : "20px 60px",
      }}
    >
      <section className={`${classNamePrefix}__content`}>
        <section className={`${classNamePrefix}__content-main`}>
          <div className={`${classNamePrefix}__floated-item`}>
            <div
              className={`${classNamePrefix}__content-main-image-wrapper`}
              style={{
                width: animation ? "100vw" : 450,
                height: animation ? "100vh" : 550,
                marginLeft: animation ? 0 : 161,
              }}
            >
              {projectSelected && (
                <div
                  className={`${classNamePrefix}__content-main-image`}
                  style={{
                    backgroundImage: projectSelected.imgUrl
                      ? `url(${projectSelected.imgUrl.src})`
                      : "",
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              )}

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
            <div className={`${classNamePrefix}__content-main-title`}>
              <span>{projectSelected.name}</span>
            </div>

            <div className={`${classNamePrefix}__content-main-text`}>
              {projectSelected.content}
            </div>
          </div>
        </section>

        <section className={`${classNamePrefix}__content-sub`}>
          <div className={`${classNamePrefix}__content-sub-text-wrapper`}>
            <div className={`${classNamePrefix}__content-main-title`}>
              <span>{projectSelected.name}</span>
            </div>

            <div className={`${classNamePrefix}__content-main-text`}>
              {projectSelected.subContent}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectDetail;

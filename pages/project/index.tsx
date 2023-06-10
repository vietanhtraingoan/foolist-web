import React, { useEffect, useState } from "react";
import ProjectDetail from "../components/projectDetail";
import AnimatedNextButton from "../components/animatedNextButton";
import { projectMocks } from "../../mocks/projectMocks";
import { useDispatch } from "react-redux";
import { setProjectId } from "../../store/project/projectSlice";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CloseCircleOutlined } from "@ant-design/icons";
import LoadingView from "../loadingView";

const classNamePrefix = "project-page";

type Props = {
  // Add custom props here
};

const ProjectPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const dispatch = useDispatch();

  const [projectSelect, setProjectSelect] = useState<Boolean>(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const [loadingPage, setLoadingPage] = useState(true);

  const previous = () => {
    setProjectIndex((projectIndex + 1) % projectMocks.length);
  };
  const next = () => {
    setProjectIndex(
      projectIndex === 0 ? projectMocks.length - 1 : projectIndex - 1
    );
  };

  const handleProjectSelect = (id: number) => {
    setProjectSelect(true);
    dispatch(
      setProjectId({
        projectId: id,
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setProjectSelect(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {loadingPage ? (
        <LoadingView />
      ) : (
        <>
          <div
            className={classNamePrefix}
            style={{ paddingTop: projectSelect ? 0 : 100 }}
          >
            <div
              className={`${classNamePrefix}__layer`}
              style={{
                zIndex: projectSelect ? 10 : 1,
                width: projectSelect ? "90vw" : 400,
                height: projectSelect ? "85vh" : 400,
                borderRadius: projectSelect ? 20 : 360,
                background: projectSelect
                  ? "#ffffff"
                  : "rgba(255, 255, 255, 0.5)",
                marginTop: projectSelect ? 90 : 0,
              }}
            >
              {projectSelect && (
                <ProjectDetail handleClose={() => setProjectSelect(false)} />
              )}

              {projectSelect && (
                <div className={`${classNamePrefix}__next-button`}>
                  <AnimatedNextButton />
                </div>
              )}

              {projectSelect && (
                <div
                  className={`${classNamePrefix}__close-button`}
                  onClick={() => setProjectSelect(false)}
                >
                  <CloseCircleOutlined
                    rev="true"
                    className={`${classNamePrefix}__close-button-icon`}
                  />
                </div>
              )}
            </div>

            <div
              className={`${classNamePrefix}__project-list-wrapper`}
              style={{
                zIndex: projectSelect ? -1 : 10,
              }}
            >
              <div className={`${classNamePrefix}__project-list-container`}>
                {projectMocks
                  ? projectMocks.map((p) => (
                      <div
                        className={`${classNamePrefix}__project-item animate__animated animate__fadeIn`}
                        style={{
                          backgroundImage: `url(${p.imgUrl.src})`,
                        }}
                        onClick={() => handleProjectSelect(p.id)}
                      ></div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ProjectPage;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProjectId } from '../../../store/selector/rootSelector';
import { projectMocks } from '../../../mocks/projectMocks';
import { useTranslation } from 'next-i18next';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'next/image';

interface IProjectDetailProps {
  projectSelect?: boolean;
  handleClose?: () => void;
}

const classNamePrefix = 'project-detail';

const ProjectDetail: React.FC<IProjectDetailProps> = (props) => {
  const { t } = useTranslation();

  const [animation, setAnimation] = useState<boolean>(true);

  const projectId = useSelector(getProjectId);

  const projectSelected = projectMocks.find((p) => p.id === projectId);

  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 200);
  }, []);

  return (
    <div className={classNamePrefix}>
      {projectSelected ? (
        <section className={`${classNamePrefix}__content`}>
          <section className={`${classNamePrefix}__content-main`}>
            <div className={`${classNamePrefix}__floated-item`}>
              <div
                className={`${classNamePrefix}__content-main-image-wrapper`}
                style={{
                  width: animation ? '100vw' : 450,
                  height: animation ? '100vh' : 450,
                  marginLeft: animation ? 0 : 40,
                }}
              >
                <div
                  className={`${classNamePrefix}__content-main-image`}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image
                    src={projectSelected.imgUrl.src}
                    alt=''
                    width={450}
                    height={450}
                    className={`${classNamePrefix}__content-main-image`}
                  />
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
                display: animation ? 'none' : 'block',
              }}
            >
              <div className={`${classNamePrefix}__content-main-name`}>
                <span>
                  {projectSelected.name ? projectSelected.name : 'No name'}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-title`}>
                <span>
                  {projectSelected.title
                    ? t(projectSelected.title)
                    : 'No title'}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-text`}>
                {projectSelected.intro
                  ? t(projectSelected.intro)
                  : 'No introduction'}
              </div>
            </div>
          </section>

          <section className={`${classNamePrefix}__content-sub`}>
            <div className={`${classNamePrefix}__content-sub-text-wrapper`}>
              <div className={`${classNamePrefix}__content-main-name`}>
                <span>
                  {projectSelected.name ? projectSelected.name : 'No name'}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-title`}>
                <span>
                  {projectSelected.paragraph1
                    ? t(projectSelected.paragraph1.title)
                    : 'No title'}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-text`}>
                {projectSelected.paragraph1
                  ? t(projectSelected.paragraph1.content)
                  : 'No content'}
              </div>
            </div>

            <div
              className={`${classNamePrefix}__content-sub-image`}
              style={{
                backgroundImage: `url(${
                  projectSelected.imgUrl ? projectSelected.subImgUrl.src : ''
                })`,
              }}
            ></div>
          </section>

          <section className={`${classNamePrefix}__content-sub`}>
            <div
              className={`${classNamePrefix}__content-sub-image`}
              style={{
                backgroundImage: `url(${
                  projectSelected.subImgUrl ? projectSelected.subImgUrl.src : ''
                })`,
              }}
            ></div>

            <div className={`${classNamePrefix}__content-sub-text-wrapper`}>
              <div className={`${classNamePrefix}__content-main-title`}>
                <span>
                  {projectSelected.paragraph2
                    ? t(projectSelected.paragraph2.title)
                    : 'No title'}
                </span>
              </div>

              <div className={`${classNamePrefix}__content-main-text`}>
                {projectSelected.paragraph2
                  ? t(projectSelected.paragraph2.content)
                  : 'No content'}
              </div>
            </div>
          </section>
        </section>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProjectDetail;

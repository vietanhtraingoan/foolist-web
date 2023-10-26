import React, { useState } from 'react';
import { projectMocks } from '../../../mocks/projectMocks';
import ProjectList from './projectList/index';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LANG } from '../../../utils/constants';
import { useTranslation } from 'next-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRouter } from 'next/router';
import CustomNavigationButton from '../customNavigationButton';

type Props = {};

const classNamePrefix = 'grid-project';

const GridProject = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [viewMore, setViewMore] = useState<boolean>(false);

  return (
    <div className={classNamePrefix}>
      {/* <div className={`${classNamePrefix}__title`}>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
          <span>{t("feature-project")}</span>
        </AnimationOnScroll>
      </div> */}

      {projectMocks ? (
        <ProjectList
          data={!viewMore ? projectMocks.slice(0, 3) : projectMocks}
        />
      ) : (
        ''
      )}

      <div
        className={`${classNamePrefix}__show-more-wrapper`}
        style={{
          justifyContent:
            router.pathname === '/project' ? 'center' : 'flex-end',
        }}
      >
        {router.pathname === '/project' ? (
          projectMocks.length > 3 ? (
            <div
              className={`${classNamePrefix}__show-more-button`}
              onClick={() => setViewMore(!viewMore)}
            >
              <span>{viewMore ? 'Show Less' : 'Show More'} </span>
            </div>
          ) : (
            ''
          )
        ) : (
          <div className={`${classNamePrefix}__view-all`}>
            <div className={`${classNamePrefix}__view-all-text`}>
              {t('all-project')}
            </div>
            <CustomNavigationButton
              size='small'
              onClick={() => router.push('/project')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ['common'])),
  },
});

export default GridProject;

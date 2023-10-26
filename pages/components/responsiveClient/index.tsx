import React from 'react';
import { ClientMocks } from '../../../mocks/clientMocks';
import Image from 'next/image';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LANG } from '../../../utils/constants';
import { useTranslation } from 'next-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ImageNext } from '../../../components/common/image-next';
import { useMediaQuery } from 'react-responsive';
import Section from '../../../components/common/section';

const classNamePrefix = 'responsive-client';

type Props = {};

const ResponsiveClient = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const { t } = useTranslation();
  if (!isMobile) return <></>;
  return (
    <div className={classNamePrefix}>
      <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
        <Section.Title className='!text-2xl font-medium text-white uppercase border-b font-heading mb-12 md:mb-14 lg:mb-28'>
          {t('Section_label.client')}
        </Section.Title>
      </AnimationOnScroll>

      <div className={`grid grid-cols-3  items-center justify-between`}>
        {ClientMocks
          ? ClientMocks.map((c) => (
              <div
                className={`${classNamePrefix}__item flex items-center justify-center w-full`}
                key={c.id}
              >
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOnce={true}
                >
                  <ImageNext
                    priority={false}
                    className={`${classNamePrefix}__item-image`}
                    src={c.imgUrl.src}
                    alt=''
                  />
                </AnimationOnScroll>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ['common'])),
  },
});

export default ResponsiveClient;

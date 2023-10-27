import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import eyeGif from '../../public/static/eyeGif.gif';
import eyeOpen from '../../public/static/eyeOpen.png';
import dividerBG from '../../public/static/dividerBg1.png';
import NormalCircleGroup from '../../components/components/normalCircleGroup';
import TextSlider from '../../components/components/textSlider';
import ConnectSection from '../../components/components/connectSection';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import MiniFooter from '../../components/components/miniFooter';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Head from 'next/head';
import Section from '../../components/common/section';
import clsx from 'clsx';
import CoreValues from '../../components/blocks/core-values';
import FindingValue from '../../components/blocks/finding-values';
import GrayGradientTypography from '../../components/common/typography/gray-gradient-typography';
import PinkGradientTypography from '../../components/common/typography/pink-gradient-typography';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import ThreePoints from '../../components/blocks/three-points';
import Divider from '../../components/common/divider';
import { useMediaQuery } from 'react-responsive';
import AboutFirstPoints from '../../components/blocks/about-first-points';
import AboutSecondPoint from '../../components/blocks/about-second-points';
import ParagraphResponsive from '../../components/common/typography/paragraph-responsive';

const classNamePrefix = 'about-page';

type Props = {
  // Add custom props here
};

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });
  const { t } = useTranslation('common');

  return (
    <div className={clsx(classNamePrefix, 'relative')}>
      {/* <div className='absolute'></div> */}
      <Head>
        <title>{t('About us')}</title>
      </Head>
      <Section className={`animate__animated animate__slideInUp mt-20 `}>
        <Section.Title>
          <GrayGradientTypography className='block w-full font-bold leading-normal text-center text-xl md:!text-4xl lg:text-h2 font-heading'>
            Về chúng tôi
          </GrayGradientTypography>
          <Divider direction='center' className='mt-4 md:mt-6' />
        </Section.Title>
        <div
          className={` max-w-3xl mx-auto text-justify animate__animated animate__fadeInUp animation_delay-2s`}
        >
          <GrayGradientTypography className='!font-main text-base md:text-xl font-medium text-gray-200'>
            {t('About_content.paragraph-1')}
          </GrayGradientTypography>
        </div>
      </Section>
      <CoreValues />
      <FindingValue />
      <ThreePoints />
      <AboutFirstPoints />
      <AboutSecondPoint />
      <TextSlider text={t('Brand-identity-language')} />
      <Section className='flex flex-col items-center overflow-x-hidden'>
        <div className='max-sm:w-[300px] w-[450px] lg:w-[500px]  aspect-square flex justify-center'>
          <NormalCircleGroup contentType='3' />
        </div>
        <ParagraphResponsive className={`text-justify max-w-2xl`}>
          <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true}>
            <GrayGradientTypography>
              {t('About_content.paragraph-9')}
            </GrayGradientTypography>
          </AnimationOnScroll>
          <br />
          <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true}>
            <GrayGradientTypography>
              {t('About_content.paragraph-10')}
            </GrayGradientTypography>
          </AnimationOnScroll>
        </ParagraphResponsive>
      </Section>
      <TextSlider text='- FOOLIST - CREATIVE - MEDIA - TECHNOLOGY' />
      <ConnectSection />
      <Divider direction='center' />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AboutPage;

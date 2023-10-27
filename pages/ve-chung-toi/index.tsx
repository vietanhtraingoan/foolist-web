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
import ViewAboutUs from '../../components/views/about';

const classNamePrefix = 'about-page';

type Props = {
  // Add custom props here
};

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });
  const { t } = useTranslation('common');

  return <ViewAboutUs />;
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AboutPage;

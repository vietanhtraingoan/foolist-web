import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useMediaQuery } from 'react-responsive';
import AboutFirstPoints from '../../components/blocks/about-first-points';
import AboutSecondPoint from '../../components/blocks/about-second-points';
import CoreValues from '../../components/blocks/core-values';
import FindingValue from '../../components/blocks/finding-values';
import ThreePoints from '../../components/blocks/three-points';
import Divider from '../../components/common/divider';
import Section from '../../components/common/section';
import GrayGradientTypography from '../../components/common/typography/gray-gradient-typography';
import ParagraphResponsive from '../../components/common/typography/paragraph-responsive';
import ConnectSection from '../../components/components/connectSection';
import NormalCircleGroup from '../../components/components/normalCircleGroup';
import TextSlider from '../../components/components/textSlider';

const classNamePrefix = 'about-page';

type Props = {
  // Add custom props here
};

const ViewAboutUs = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });
  const { t } = useTranslation('common');

  return (
    <div className={clsx(classNamePrefix, 'relative')}>
      {/* <div className='absolute'></div> */}
      <Head>
        <title>{t('About us')}</title>
      </Head>
      <CoreValues />
      <FindingValue />
      <ThreePoints />
      <AboutFirstPoints />
      <AboutSecondPoint />
      <TextSlider id='3' text={t('Brand-identity-language')} />
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

export default ViewAboutUs;

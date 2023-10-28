import React from 'react';
import Section from '../common/section';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import { useTranslation } from 'react-i18next';
import Divider from '../common/divider';
import { ImageNext } from '../common/image-next';
import eyeGif from '../../public/static/eyeGif.gif';
import eyeOpen from '../../public/static/eyeOpen.png';
import Image from 'next/image';
import NormalCircleGroup from '../components/normalCircleGroup';
import ParagraphResponsive from '../common/typography/paragraph-responsive';
const classNamePrefix = 'about-page';

const AboutSecondPoint = () => {
  const { t } = useTranslation('common');

  return (
    <Section
      className={`${classNamePrefix}__fourth-section max-md:overflow-hidden`}
    >
      <AnimationOnScroll animateIn='animate__slideInUp' animateOnce={true}>
        <div
          id='2'
          className={`flex items-center flex-col md:flex-row-reverse gap-12 w-full justify-between`}
        >
          <div
            className={`w-fit max-md:ml-auto  text-2xl md:!text-4xl lg:text-h2 font-bold flex flex-col items-end font-heading text-right`}
          >
            <GrayGradientTypography className='block'>
              {t('About_content.visual.first')}
            </GrayGradientTypography>
            <PinkGradientTypography
              className={` italic font-bold text-5xl md:text-6xl lg:text-8xl block font-heading !leading-[1.6]`}
            >
              {t('About_content.visual.second')}
            </PinkGradientTypography>
            <GrayGradientTypography>
              {t('About_content.visual.third')}
            </GrayGradientTypography>
          </div>
          <Divider
            direction='center'
            className='max-lg:hidden flex-1 max-w-[500px]'
          />
          <div className='flex items-center flex-1 flex-shrink-0'>
            <div
              className={`${classNamePrefix}__eye-gif max-md:max-w-[100px] flex-shrink-0`}
            >
              <Image src={eyeGif} alt='' width={150} />
            </div>
            <div
              className={`${classNamePrefix}__eye-gif max-md:max-w-[100px] flex-shrink-0`}
            >
              <Image src={eyeGif} alt='' width={150} />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <div className=''>
        <div className='flex items-center gap-10 mt-8 max-lg:flex-col md:mt-10 lg:my-20'>
          <AnimationOnScroll
            className='lg:w-1/2'
            animateIn='animate__slideInUp'
            animateOnce={true}
          >
            <ParagraphResponsive className='text-justify'>
              <GrayGradientTypography className='font-main'>
                {t('About_content.paragraph-6')}
                <br></br>
                <br></br>
                {t('About_content.paragraph-7')}
              </GrayGradientTypography>
            </ParagraphResponsive>
          </AnimationOnScroll>
          <AnimationOnScroll
            className='flex items-center justify-center flex-1 '
            animateIn='animate__slideInUp'
            animateOnce={true}
          >
            <div className='min-w-[250px] max-sm:w-[calc(100vw-30px)] md:w-[450px] lg:w-[500px] aspect-square mx-auto'>
              <NormalCircleGroup className='mx-auto' contentType='2' />
            </div>
          </AnimationOnScroll>
        </div>

        <div className='flex items-center w-full max-sm:mt-0 max-md:mt-[120px] max-lg:flex-col-reverse'>
          <AnimationOnScroll
            className='flex-1'
            animateIn='animate__slideInUp '
            animateOnce={true}
          >
            <div className=' relative flex-shrink- border-2 border-primary mx-auto rounded-full aspect-square max-md:mt-6 w-[200px] max-lg:mt-8 lg:max-w-[300px] overflow-hidden flex items-center justify-center'>
              <div className='bg-transparent flex-shrink-0 flex absolute inset-0 z-[2] items-center justify-center rounded-full aspect-square'>
                <Image src={eyeGif} alt='eye' width={150} />
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            className='flex-1'
            animateIn='animate__slideInUp '
            animateOnce={true}
          >
            <ParagraphResponsive className='text-justify'>
              <GrayGradientTypography>
                {t('About_content.paragraph-8')}
              </GrayGradientTypography>
            </ParagraphResponsive>
          </AnimationOnScroll>
        </div>
      </div>
    </Section>
  );
};

export default AboutSecondPoint;

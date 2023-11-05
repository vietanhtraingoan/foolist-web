import React from 'react';
import Section from '../common/section';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import Divider from '../common/divider';
import NormalCircleGroup from '../components/normalCircleGroup';
import ParagraphResponsive from '../common/typography/paragraph-responsive';
import AnimateOnScroll from '../common/animate-on-scroll';
import Balancer from 'react-wrap-balancer';

const AboutFirstPoints = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });
  const { t } = useTranslation('common');

  return (
    <Section fluid className='w-full max-md:overflow-hidden'>
      <div className={`container`}>
        <div
          id='1'
          className={`text-2xl max-md:text-center md:!text-4xl lg:text-h2 font-bold font-heading`}
        >
          <AnimateOnScroll type='slideInLeft' delay={0.2}>
            <GrayGradientTypography className='block mb-4 font-heading'>
              {t('About_content.creative-thinking')}
            </GrayGradientTypography>
          </AnimateOnScroll>
          <AnimateOnScroll type='slideInLeft' delay={0.3}>
            <PinkGradientTypography
              className={`font-bold text-5xl md:text-6xl lg:text-8xl block w-full font-heading leading-[1.4] lg:!leading-[1.6]`}
            >
              {t('About_content.unique')}
            </PinkGradientTypography>
          </AnimateOnScroll>
        </div>
      </div>
      <AnimateOnScroll type='slideInLeft' delay={0.4}>
        <Divider
          className='max-md:!mt-6 mb-10 md:mb-20 max-lg:!mt-10'
          direction={isMobile ? 'center' : 'left'}
        />
      </AnimateOnScroll>
      <AnimateOnScroll type='slideInUp' delay={0.5}>
        <div className='container mt-8 lg:mt-10'>
          <ParagraphResponsive className='flex justify-center text-justify md:max-w-[80%] '>
            <GrayGradientTypography>
              {t('About_content.paragraph-3')}
            </GrayGradientTypography>
          </ParagraphResponsive>
        </div>
      </AnimateOnScroll>
      <div className='container'>
        <div
          className={`flex items-center mt-8 flex-col lg:flex-row justify-end gap-12`}
        >
          <AnimateOnScroll className='flex-1' type='fadeInUp' delay={0.6}>
            <div className='w-[300px] md:w-[450px] lg:w-[500px] aspect-square mx-auto flex justify-center'>
              <NormalCircleGroup contentType='1' />
            </div>
          </AnimateOnScroll>
          <div className={`text-base md:text-2xl flex-1 w-full`}>
            <span>
              <AnimateOnScroll type='fadeInUp' delay={0.6}>
                <ParagraphResponsive className='flex justify-center text-justify'>
                  <GrayGradientTypography>
                    {t('About_content.paragraph-4')}
                  </GrayGradientTypography>
                </ParagraphResponsive>
              </AnimateOnScroll>
              <br />
              <AnimateOnScroll type='fadeInUp' delay={0.6}>
                <ParagraphResponsive className='text-justify'>
                  <GrayGradientTypography>
                    {t('About_content.paragraph-5')}
                  </GrayGradientTypography>
                </ParagraphResponsive>
              </AnimateOnScroll>
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutFirstPoints;

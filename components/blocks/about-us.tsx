import React from 'react';
import Section from '../common/section';
import { ImageNext } from '../common/image-next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTranslation } from 'react-i18next';
import Divider from '../common/divider';
import aboutUsImage from '../../public/images/about.png';
import BorderGradient from '../common/border-gradient';
import AnimateOnScroll from '../common/animate-on-scroll';

const AboutUs = () => {
  const { t } = useTranslation('common');

  return (
    <Section className='relative flex items-center overflow-hidden max-md:flex-col'>
      <div className='absolute top-0 right-0 mr-64 rounded-full -mt-52 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent filter blur-4xl' />
      <div className='container relative px-4 max-md:w-full md:mx-auto'>
        <div className='relative prose max-md:prose:max-w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl md:mx-0'>
          <AnimateOnScroll type='slideInLeft'>
            <Section.Title className='mb-6 text-4xl font-medium tracking-tight text-white md:mb-10 font-heading xs:text-5xl sm:text-6xl md:text-7xl'>
              {t('About_us_home')}
            </Section.Title>
            <Divider direction='left' className='mb-8' />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} type='fadeInLeft'>
            <div className='max-lg:pr-10 '>
              <p className='mb-4 text-lg leading-relaxed tracking-tight text-gray-400'>
                {t('About_content.paragraph-1')}
              </p>
              <p className='mb-6 text-lg leading-relaxed tracking-tight text-gray-400'>
                {t('About_content.paragraph-2')}
              </p>
            </div>
          </AnimateOnScroll>
          <div className='mt-14'>
            <div className='relative flex flex-col sm:flex-row'>
              <div className='pb-8 sm:pb-0 sm:pr-8'>
                <AnimateOnScroll type='fadeInUp' delay={0.1}>
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    {t('About_content.numbers.first')}
                  </span>
                  <span className='block tracking-tight text-gray-500 uppercase'>
                    {t('About_content.numbers.first_label')}
                  </span>
                </AnimateOnScroll>
              </div>
              <div className='relative py-8 sm:py-0 sm:px-8'>
                <AnimateOnScroll type='fadeInUp' delay={0.2}>
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    {t('About_content.numbers.second')}
                  </span>
                  <span className='block tracking-tight text-gray-500 uppercase'>
                    {t('About_content.numbers.second_label')}
                  </span>
                </AnimateOnScroll>
                <div className='absolute top-0 left-0 hidden w-px h-full bg-white sm:block bg-opacity-20' />
                <div className='absolute top-0 right-0 hidden w-px h-full bg-white sm:block bg-opacity-20' />
                <div className='absolute top-0 left-0 w-full h-px bg-white sm:hidden bg-opacity-20' />
                <div className='absolute bottom-0 left-0 w-full h-px bg-white sm:hidden bg-opacity-20' />
              </div>
              <div className='pt-8 sm:pt-0 sm:pl-8'>
                <AnimateOnScroll type='fadeInUp' delay={0.3}>
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    {t('About_content.numbers.third')}
                  </span>
                  <span className='block tracking-tight text-gray-500 uppercase'>
                    {t('About_content.numbers.third_label')}
                  </span>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-shrink-0 w-2/5 max-md:w-2/5 max-md:mt-7'>
        <AnimateOnScroll type='fadeInRight' delay={0.1}>
          <div className='m-[1px]'>
            <ImageNext
              className='block object-contain w-full h-full overflow-hidden transform rounded-xl'
              src={aboutUsImage.src}
              height={aboutUsImage.height}
              width={aboutUsImage.width}
              blurDataURL={aboutUsImage.blurDataURL}
              alt=''
            />
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default AboutUs;

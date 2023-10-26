import React from 'react';
import Section from '../common/section';
import { ImageNext } from '../common/image-next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation('common');

  return (
    <Section className='relative flex items-center overflow-hidden'>
      <div className='absolute top-0 right-0 mr-64 rounded-full -mt-52 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent filter blur-4xl' />
      <div className='container relative px-4 mx-auto'>
        <div className='relative max-w-lg mx-auto prose lg:max-w-xl xl:max-w-2xl md:mx-0'>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOut='animate__fadeOutLeft'
            delay={50}
          >
            <h2 className='mb-10 text-4xl font-medium tracking-tight text-white font-heading xs:text-5xl sm:text-6xl md:text-7xl'>
              {t('About_us_home')}
            </h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOut='animate__fadeOutLeft'
            delay={100}
          >
            <div className='max-lg:pr-10'>
              <p className='mb-4 text-lg leading-relaxed tracking-tight text-gray-400'>
                {t('About_content.paragraph-1')}
              </p>
              <p className='mb-6 text-lg leading-relaxed tracking-tight text-gray-400'>
                {t('About_content.paragraph-2')}
              </p>
            </div>
          </AnimationOnScroll>
          <div className='mt-14'>
            <div className='relative flex flex-col sm:flex-row'>
              <div className='pb-8 sm:pb-0 sm:pr-8'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOut='animate__fadeOutDown'
                  delay={100}
                >
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    300+
                  </span>
                  <span className='block tracking-tight text-gray-500'>
                    PRODUCTS
                  </span>
                </AnimationOnScroll>
              </div>
              <div className='relative py-8 sm:py-0 sm:px-8'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOut='animate__fadeOutDown'
                  delay={200}
                >
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    100+
                  </span>
                  <span className='block tracking-tight text-gray-500'>
                    WEB TEMPLATE
                  </span>
                </AnimationOnScroll>
                <div className='absolute top-0 left-0 hidden w-px h-full bg-white sm:block bg-opacity-20' />
                <div className='absolute top-0 right-0 hidden w-px h-full bg-white sm:block bg-opacity-20' />
                <div className='absolute top-0 left-0 w-full h-px bg-white sm:hidden bg-opacity-20' />
                <div className='absolute bottom-0 left-0 w-full h-px bg-white sm:hidden bg-opacity-20' />
              </div>
              <div className='pt-8 sm:pt-0 sm:pl-8'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  animateOut='animate__fadeOutDown'
                  delay={300}
                >
                  <span className='block text-5xl font-medium text-white lg:text-7xl'>
                    215
                  </span>
                  <span className='block tracking-tight text-gray-500'>
                    MOBILE TEMPLATE
                  </span>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/5 sm:w-2/5'>
        <AnimationOnScroll
          animateIn='animate__fadeInRight'
          animateOut='animate__fadeOutRight'
          delay={100}
        >
          <ImageNext
            className='hidden w-full h-full overflow-hidden transform object- rounded-xl md:block '
            src='https://source.unsplash.com/random'
            alt=''
          />
        </AnimationOnScroll>
      </div>
    </Section>
  );
};

export default AboutUs;

import React from 'react';
import Section from '../common/section';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Divider from '../common/divider';
import { ImageNext } from '../common/image-next';
import threePointsImage from '../../public/images/vecteezy_trident_flat_illustration_clean_icon_design_element_on.png';
import AnimateOnScroll from '../common/animate-on-scroll';
const classNamePrefix = 'about-page';

const ThreePoints = () => {
  const { t } = useTranslation('common');

  return (
    <Section className={`${classNamePrefix}__first-section`}>
      <div
        className={`!text-2xl md:!text-4xl lg:text-h2 text-h2 mb-6 max-md:mb-20 leading-loose text-center font-bold animate__animated animate__fadeInUp`}
      >
        <AnimateOnScroll type='fadeInUp' delay={0.1}>
          <GrayGradientTypography className='block w-full'>
            {t('About_content.title')}
          </GrayGradientTypography>
        </AnimateOnScroll>
        <AnimateOnScroll type='fadeInUpBig' delay={0.2}>
          <PinkGradientTypography className='!text-4xl !leading-[1.3]  max-md:mt-8 font-heading md:!text-6xl lg:text-8xl'>
            {t('About_content.three-points')}
          </PinkGradientTypography>
        </AnimateOnScroll>
      </div>
      <div className='relative'>
        <div className='absolute left-1/2 -translate-y-[50px] md:translate-y-[2%] lg:-translate-y-[30px] before:content-[""] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] before:from-white before:to-black before:blur-2xl before:z-[-2] before:opacity-60 after:content-[""] after:absolute after:w-full after:h-[90%] after:bottom-0 after:bg-gradient-to-t after:from-black after:z-[0] after:via-black after:to-transparent min-w-[200px] md:w-[60%] lg:w-[600px] -translate-x-1/2 z-[-1] top-0 opacity-10'>
          <ImageNext
            className='object-contain w-full h-full'
            src={threePointsImage.src}
            width={threePointsImage.width}
            height={threePointsImage.height}
            blurDataURL={threePointsImage.blurDataURL}
            alt='three point image'
          />
        </div>
        <section className='relative overflow-hidden lg:pt-16'>
          <div className='container mx-auto max-md:px-0'>
            <div className='flex flex-wrap -m-8'>
              <AnimateOnScroll
                type='fadeInUp'
                delay={0.3}
                className='w-full p-4 md:p-6 lg:p-8 md:w-1/3'
              >
                <Link href='#1'>
                  <div className='max-w-xs mx-auto text-center'>
                    <div className='flex flex-col items-center justify-center w-full mb-8 cursor-pointer aspect-video rounded-xl'>
                      <h3 className='mb-4 group text-3xl text-white font-semibold tracking-tight [&>*]:font-heading !font-heading'>
                        <span className=''>
                          {t('About_content.three-points-content.first.top')}{' '}
                        </span>
                        <span className=''>
                          {t('About_content.three-points-content.first.middle')}
                        </span>
                        <span className='block'>
                          {' '}
                          {t('About_content.three-points-content.first.end')}
                        </span>
                      </h3>
                      <Divider direction='center' />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll
                type='fadeInUp'
                delay={0.4}
                className='w-full p-8 md:w-1/3'
              >
                <Link href='#2'>
                  <div className='max-w-xs mx-auto text-center'>
                    <div className='flex flex-col items-center justify-center w-full mb-8 aspect-video rounded-xl'>
                      <h3 className='mb-4 text-3xl font-semibold text-white tracking-tight [&>*]:font-heading !font-heading'>
                        <span>
                          {t('About_content.three-points-content.second.top')}{' '}
                        </span>
                        <span className=''>
                          {t(
                            'About_content.three-points-content.second.middle'
                          )}{' '}
                        </span>
                        <span className='block w-full'>
                          {t('About_content.three-points-content.second.end')}
                        </span>
                      </h3>
                      <Divider direction='center' />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
              <AnimateOnScroll
                type='fadeInUp'
                delay={0.5}
                className='w-full p-8 md:w-1/3'
              >
                <Link href='#3'>
                  <div className='max-w-xs mx-auto text-center'>
                    <div className='flex flex-col items-center justify-center w-full mb-8 aspect-video rounded-xl'>
                      <h3 className='mb-4 text-3xl font-semibold text-white tracking-tight [&>*]:font-heading !font-heading'>
                        <span>
                          {t('About_content.three-points-content.third.top')}{' '}
                        </span>
                        <span className=''>
                          {t('About_content.three-points-content.third.middle')}{' '}
                        </span>
                        <span className=''>
                          {t('About_content.three-points-content.third.end')}
                        </span>
                      </h3>
                      <Divider direction='center' />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        {/* <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12'>
        <div className='relative p-6 border group border-gray-100/20 rounded-xl'>
          <div
            className={`text-4xl font-medium w-full max-w-[50%] animate__animated animate__fadeInUp`}
          >
            <span>
              {t('About_content.three-points-content.first.top')}{' '}
            </span>
            <span className=''>
              {t('About_content.three-points-content.first.middle')}
            </span>
            <span>
              {' '}
              {t('About_content.three-points-content.first.end')}
            </span>
          </div>
          <div className='absolute bottom-4 right-4'>
            <button>
              <span className='inline-block transition duration-100 transform group-hover:rotate-[90deg] opacity-20'>
                <svg
                  width={100}
                  height={100}
                  viewBox='0 0 33 33'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M30 3L3 30'
                    stroke='white'
                    strokeWidth='4.3875'
                    strokeMiterlimit={10}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M30 27.758V3H5.24196'
                    stroke='white'
                    strokeWidth='4.3875'
                    strokeMiterlimit={10}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className='p-6 border border-gray-100/20 rounded-xl'>
          <div
            className={`text-4xl font-medium max-w-[40%] animate__animated animate__fadeInUp`}
          >
            <span>
              {t('About_content.three-points-content.second.top')}{' '}
            </span>
            <span className=''>
              {t('About_content.three-points-content.second.middle')}{' '}
            </span>
            <span>
              {t('About_content.three-points-content.second.end')}
            </span>
          </div>
        </div>
        <div className='p-6 border border-gray-100/20 rounded-xl'>
          <div
            className={`text-4xl font-medium max-w-[40%] animate__animated animate__fadeInUp`}
          >
            <span>
              {t('About_content.three-points-content.third.top')}{' '}
            </span>
            <span className=''>
              {t('About_content.three-points-content.third.middle')}{' '}
            </span>
            <span>{t('About_content.three-points-content.third.end')}</span>
          </div>
        </div>
        <div
          className={`${classNamePrefix}__first-section-subtitle-item animate__animated animate__fadeInUp`}
        >
          <span></span>{' '}
        </div>
      </div> */}
      </div>
    </Section>
  );
};

export default ThreePoints;

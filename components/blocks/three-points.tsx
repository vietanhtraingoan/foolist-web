import React from 'react';
import Section from '../common/section';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Divider from '../common/divider';
const classNamePrefix = 'about-page';

const ThreePoints = () => {
  const { t } = useTranslation('common');

  return (
    <Section className={`${classNamePrefix}__first-section`}>
      <div
        className={`!text-2xl md:!text-4xl lg:text-h2 text-h2 mb-6 max-md:mb-20 leading-loose text-center font-bold animate__animated animate__fadeInUp`}
      >
        <GrayGradientTypography className='block w-full'>
          {t('About_content.title')}
        </GrayGradientTypography>
        <PinkGradientTypography className='!text-4xl  max-md:mt-8 font-heading md:!text-6xl lg:text-8xl'>
          {t('About_content.three-points')}
        </PinkGradientTypography>
      </div>
      <div className=''>
        <section className='overflow-hidden lg:pt-16'>
          <div className='container mx-auto max-md:px-0'>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full p-4 md:p-6 lg:p-8 md:w-1/3'>
                <Link href='#tu-duy-sang-tao-doc-nhat'>
                  <div className='max-w-xs mx-auto text-center'>
                    <div className='flex flex-col items-center justify-center w-full mb-8 cursor-pointer aspect-video rounded-xl'>
                      <h3 className='mb-4 group text-3xl font-semibold tracking-tight [&>*]:font-heading !font-heading'>
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
              </div>
              <div className='w-full p-8 md:w-1/3'>
                <div className='max-w-xs mx-auto text-center'>
                  <div className='flex flex-col items-center justify-center w-full mb-8 aspect-video rounded-xl'>
                    <h3 className='mb-4 text-3xl font-semibold tracking-tight [&>*]:font-heading !font-heading'>
                      <span>
                        {t('About_content.three-points-content.second.top')}{' '}
                      </span>
                      <span className=''>
                        {t('About_content.three-points-content.second.middle')}{' '}
                      </span>
                      <span className='block w-full'>
                        {t('About_content.three-points-content.second.end')}
                      </span>
                    </h3>
                    <Divider direction='center' />
                  </div>
                </div>
              </div>
              <div className='w-full p-8 md:w-1/3'>
                <div className='max-w-xs mx-auto text-center'>
                  <div className='flex flex-col items-center justify-center w-full mb-8 aspect-video rounded-xl'>
                    <h3 className='mb-4 text-3xl font-semibold tracking-tight [&>*]:font-heading !font-heading'>
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
              </div>
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

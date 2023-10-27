import React from 'react';
import Section from '../common/section';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import clsx from 'clsx';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import Divider from '../common/divider';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const FindingValue = () => {
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const values = [
    {
      title: t('finding_values.first.title'),
      description: t('finding_values.first.description'),
    },
    {
      title: t('finding_values.second.title'),
      description: t('finding_values.second.description'),
    },
    {
      title: t('finding_values.third.title'),
      description: t('finding_values.third.description'),
    },
    {
      title: t('finding_values.forth.title'),
      description: t('finding_values.forth.description'),
    },
  ];

  return (
    <Section>
      <h3 className='max-w-5xl font-semibold leading-normal tracking-tight text-2xl md:!text-4xl lg:text-h2 font-main'>
        <GrayGradientTypography className='inline-block'>
          {t('finding_values.title.first')}{' '}
          <PinkGradientTypography className='font-bold'>
            Foolist
          </PinkGradientTypography>{' '}
          <GrayGradientTypography className='max-md:block max-md:w-full'>
            {t('finding_values.title.second')}
          </GrayGradientTypography>
        </GrayGradientTypography>
        <Divider direction='left' />
      </h3>
      <AnimationOnScroll animateOnce animateOut='' animateIn='animate__fadeIn'>
        <div className='grid w-full max-w-3xl grid-cols-1 gap-3 mx-auto mt-20 md:grid-cols-2 md:grid-rows-2'>
          {values.map((item, index: number) => {
            return (
              <AnimationOnScroll
                animateOnce
                animateIn='animate__slideInUp'
                delay={index * 200}
              >
                <div
                  key={item.title + index}
                  className={clsx(
                    'flex bg-[radial-gradient(ellipse_at_center_center,_var(--tw-gradient-stops))] from-neutral-950 to-neutral-black  md:aspect-square overflow-hidden relative flex-col px-8 py-8 text-left !transition-all border cursor-pointer shadow-2xl hover:[box-shadow:#f5a4c0_0px_13px_50px_-26px] bg-black-900/30 border-white/20 rounded-lg md:rounded-[50px]',
                    {
                      ' !rounded-br-xl !rounded-lr-xl !rounded-tr-xl !rounded-bl-xl hover:!-translate-y-4 hover:!-translate-x-4 hover:!rounded-br-xl hover:!rounded-lr-xl hover:!rounded-tr-xl hover:!rounded-bl-xl':
                        index === 0 && !isMobile,
                      ' !rounded-bl-xl !rounded-tl-xl !rounded-br-xl hover:!-translate-y-4 hover:!translate-x-4 ':
                        index === 1 && !isMobile,
                      ' !rounded-tr-xl !rounded-tl-xl !rounded-br-xl hover:!translate-y-4 hover:!-translate-x-4':
                        index === 2 && !isMobile,
                      ' !rounded-tl-xl !rounded-tr-xl !rounded-bl-xl hover:!translate-y-4 hover:!translate-x-4':
                        index === 3 && !isMobile,
                    }
                  )}
                  style={{
                    backdropFilter: 'blur( 10px )',
                    WebkitBackdropFilter: 'blur( 10px )',
                  }}
                >
                  <h3 className='mb-5 md:mb-8'>
                    <GrayGradientTypography className='text-3xl font-bold text-white md:text-4xl lg:text-5xl font-heading'>
                      {item.title}
                    </GrayGradientTypography>
                  </h3>
                  <p className='text-sm md:text-base lg:text-xl text-white/80'>
                    {item.description}
                  </p>
                </div>
              </AnimationOnScroll>
            );
          })}
        </div>
      </AnimationOnScroll>
    </Section>
  );
};

export default FindingValue;

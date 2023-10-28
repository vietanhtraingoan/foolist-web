import React from 'react';
import Section from '../common/section';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import Divider from '../common/divider';
import BorderGradient from '../common/border-gradient';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from '../common/animate-on-scroll';

const CoreValues = () => {
  const { t } = useTranslation('common');
  const coreValues = [
    {
      title: t('core_values.first.title'),
      description: t('core_values.first.description'),
    },
    {
      title: t('core_values.second.title'),
      description: t('core_values.second.description'),
    },
    {
      title: t('core_values.third.title'),
      description: t('core_values.third.description'),
    },
  ];

  return (
    <Section className='relative overflow-hidden'>
      <div className='mx-auto '>
        <div className='max-w-3xl mx-auto text-center'>
          <AnimateOnScroll type='fadeIn'>
            <Section.Title className='md:mb-10 lg:mb-24 font-bold font-heading text-xl md:!text-4xl animate__animated animate__fadeIn lg:text-h2'>
              <GrayGradientTypography className='font-heading'>
                {t('core_values.title')}
              </GrayGradientTypography>
              <Divider direction='center' className='mt-4 md:mt-6' />
            </Section.Title>
          </AnimateOnScroll>
        </div>
        <div className='mx-auto max-w-7xl'>
          <div className='flex gap-3 max-md:flex-wrap lg:gap-10'>
            {coreValues.map((item, index) => (
              <AnimateOnScroll
                className='w-full md:w-1/2 lg:w-1/3'
                key={JSON.stringify(item) + index}
                type='fadeInUp'
                delay={index / 10}
              >
                <div
                  key={JSON.stringify(index)}
                  className='flex overflow-hidden animate__animated animate__fadeIn p-[0.5px] flex-col h-full w-full  text-center transition-all cursor-pointer shadow-2xl bg-gradient-to-bl from-neutral-700 to-neutral-950 hover:[box-shadow:#f5a4c0_0px_13px_50px_-26px] shadow-white/20 hover:-translate-y-6 bg-black-900/30 rounded-xl'
                  style={{
                    animationDelay: `${100 * index}ms`,
                    backdropFilter: 'blur( 10px )',
                    WebkitBackdropFilter: 'blur( 10px )',
                  }}
                >
                  <div className='m-[0.5pxpx] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950 h-full px-6 py-8 rounded-xl'>
                    <h3 className='mb-5 text-3xl font-bold md:mb-8 font-heading md:text-4xl lg:text-5xl'>
                      <GrayGradientTypography className=' font-heading'>
                        {item.title}
                      </GrayGradientTypography>
                    </h3>
                    <p className='text-sm md:text-base lg:text-xl text-white/80'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoreValues;

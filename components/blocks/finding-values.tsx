import React from 'react';
import Section from '../common/section';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import clsx from 'clsx';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import Divider from '../common/divider';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import PuzzleTopLeft from '../icons/puzzle-top-left';
import PuzzleTopRight from '../icons/puzzle-top-right';
import PuzzleBottomLeft from '../icons/puzzle-bottom-left';
import PuzzleBottomRight from '../icons/puzzle-bottom-right';
import BigPuzzle from '../icons/big-puzzle';
import AnimateOnScroll from '../common/animate-on-scroll';

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
          <AnimateOnScroll type='slideInLeft' delay={0.1}>
            {t('finding_values.title.first')}{' '}
            <PinkGradientTypography className='font-bold'>
              Foolist
            </PinkGradientTypography>{' '}
          </AnimateOnScroll>
          <AnimateOnScroll type='slideInLeft' delay={0.2}>
            <GrayGradientTypography className='max-md:block max-md:w-full'>
              {t('finding_values.title.second')}
            </GrayGradientTypography>
          </AnimateOnScroll>
        </GrayGradientTypography>
        <Divider direction='left' />
      </h3>
      <div className='relative flex items-center justify-center mx-auto mt-20 '>
        <AnimateOnScroll
          className='max-sm:hidden max-md:mx-auto '
          type='fadeIn'
        >
          <BigPuzzle className='mx-auto min-w-[500px] w-[70vh] aspect-square' />
        </AnimateOnScroll>
        <div className='sm:absolute sm:aspect-square sm:p-8 md:py-4 md:px-0 sm:inset-0 sm:top-1/2 sm:-translate-y-1/2 sm:z-[2] grid w-[65vh] left-1/2 -translate-y-1/2 mx-auto min-w-[467px] gap-3 sm:grid-cols-2 sm:grid-rows-2'>
          {values.map((item, index: number) => {
            return (
              <AnimateOnScroll
                type='fadeIn'
                delay={index / 15}
                className='relative w-full sm:aspect-square '
                key={JSON.stringify(item) + index}
              >
                <div
                  key={item.title + index}
                  className={clsx(
                    'flex relative max-sm:border max-sm:border-white/20 max-sm:rounded-2xl max-sm:bg-[radial-gradient(ellipse_at_center_center,_var(--tw-gradient-stops))] max-sm:from-neutral-900 max-sm:to-neutral-950 md:!bg-transparent h-full overflow-hidden  flex-col md:p-6 xl:p-8 text-left !transition-all  cursor-pointer shadow-2xl bg-black-900/30 before:border-white/20 rounded-lg md:rounded-[50px]',
                    {
                      ' !rounded-br-xl !rounded-lr-xl !rounded-tr-xl !rounded-bl-xl  hover:!-translate-x-4 hover:!rounded-br-xl hover:!rounded-lr-xl hover:!rounded-tr-xl hover:!rounded-bl-xl':
                        index === 0,
                      ' !rounded-bl-xl sm:items-end sm:text-right !rounded-tl-xl !rounded-br-xl hover:!-translate-x-4 ':
                        index === 1,
                      ' !rounded-tr-xl sm:justify-end sm:items-start text-left !rounded-tl-xl !rounded-br-xl hover:!-translate-x-4 ':
                        index === 2,
                      ' !rounded-tl-xl !rounded-tr-xl !rounded-bl-xl sm:items-end justify-end sm:text-right hover:!-translate-x-4':
                        index === 3,
                    }
                  )}
                >
                  <h3 className='mb-5 md:mb-4 xl:mb-8'>
                    <GrayGradientTypography className='whitespace-nowrap text-3xl !leading-[1.6] font-bold text-white md:text-3xl lg:text-3xl xl:text-4xl font-heading'>
                      {item.title}
                    </GrayGradientTypography>
                  </h3>
                  <p className='text-sm italic md:text-sm lg:text-base xl:text-lg md:max-w-[80%] text-white/80'>
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default FindingValue;

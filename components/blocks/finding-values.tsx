import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import AnimateOnScroll from '../common/animate-on-scroll';
import Divider from '../common/divider';
import Section from '../common/section';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import BigPuzzle from '../icons/big-puzzle';
import Balancer from 'react-wrap-balancer';

const FindingValue = () => {
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const values = [
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
    {
      title: t('finding_values.first.title'),
      description: t('finding_values.first.description'),
    },
  ];

  return (
    <Section>
      <div className='max-w-3xl mx-auto text-center'>
        <AnimateOnScroll type='fadeIn'>
          <Section.Title className='md:mb-10 lg:mb-24 font-bold font-heading text-xl md:!text-4xl animate__animated animate__fadeIn lg:text-h2'>
            <Balancer>
              <GrayGradientTypography className='font-heading'>
                {t('finding_values.title')}
              </GrayGradientTypography>
            </Balancer>
            <Divider direction='center' className='mt-4 md:mt-6' />
          </Section.Title>
        </AnimateOnScroll>
      </div>
      <div className='relative flex items-center justify-center mx-auto mt-20 '>
        <AnimateOnScroll
          className='max-md:hidden max-md:mx-auto '
          type='fadeIn'
        >
          <BigPuzzle className='mx-auto sm:min-w-[500px] md:w-[85vh] aspect-square' />
        </AnimateOnScroll>
        <div className='md:absolute md:-translate-y-[calc(50%+5px)] max-md:w-full md:aspect-square md:p-8 md:py-4 md:px-0 md:inset-0 md:top-1/2  md:z-[2] grid md:w-[75vh]  mx-auto max-w-[800px] md:min-w-[467px] gap-3 md:grid-cols-2 md:grid-rows-2'>
          {values.map((item, index: number) => {
            return (
              <AnimateOnScroll
                type='fadeIn'
                delay={index / 15}
                className='relative w-full md:aspect-square '
                key={JSON.stringify(item) + index}
              >
                <div
                  key={item.title + index}
                  className={clsx(
                    'flex relative max-md:border max-md:border-white/20 max-md:rounded-2xl max-md:bg-[radial-gradient(ellipse_at_center_center,_var(--tw-gradient-stops))] max-md:from-neutral-900 max-md:to-neutral-950 md:!bg-transparent h-full overflow-hidden  flex-col p-6 xl:p-8 text-left !transition-all  cursor-pointer shadow-2xl bg-black-900/30 before:border-white/20 rounded-lg md:rounded-[50px]',
                    {
                      ' !rounded-br-xl md:!pb-20 md:justify-center md:!pr-0 !rounded-lr-xl !rounded-tr-xl !rounded-bl-xl  hover:!-translate-x-4 hover:!rounded-br-xl hover:!rounded-lr-xl hover:!rounded-tr-xl hover:!rounded-bl-xl':
                        index === 0,
                      ' !rounded-bl-xl md:!pb-20 md:justify-center md:!pl-0 md:items-end md:text-right !rounded-tl-xl !rounded-br-xl hover:!-translate-x-4 ':
                        index === 1,
                      ' !rounded-tr-xl md:!pt-20 md:!pr-0 md:justify-center md:items-start text-left !rounded-tl-xl !rounded-br-xl hover:!-translate-x-4 ':
                        index === 2,
                      ' !rounded-tl-xl md:!pt-20  md:!pl-0 !rounded-tr-xl md:justify-center !rounded-bl-xl md:items-end justify-end md:text-right hover:!-translate-x-4':
                        index === 3,
                    }
                  )}
                >
                  <h3 className='mb-5 md:mb-4 xl:mb-8'>
                    <GrayGradientTypography className=' finding-values__title leading-[1.6] font-semibold text-white font-heading'>
                      {item.title}
                    </GrayGradientTypography>
                  </h3>
                  <Balancer>
                    <div
                      className='finding-values__description whitespace-nowrap text-sm italic  lg:text-sm xl:text-lg md:max-w-[95%] text-white/80'
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  </Balancer>
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

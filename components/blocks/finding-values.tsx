import React from 'react';
import Section from '../common/section';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import clsx from 'clsx';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import Divider from '../common/divider';
import { useMediaQuery } from 'react-responsive';

const FindingValue = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const values = [
    {
      title: 'Trung thực',
      description: 'Đặt sự thật vào trong từng hơi thở.',
    },
    { title: 'Trách nhiệm', description: 'Sống chết trong từng bước đi.' },
    {
      title: 'Đam mê',
      description: 'Không ngừng chinh phục khát vọng từng ngày.',
    },
    {
      title: 'Học hỏi',
      description:
        'Không ngần ngại phá vỡ rào cản của năng lực trong từng giây.',
    },
  ];

  return (
    <Section>
      <h3 className='max-w-5xl font-semibold leading-normal tracking-tight text-2xl md:!text-4xl lg:text-h2 font-main'>
        <GrayGradientTypography className='inline-block'>
          Chúng tôi tìm kiếm các mảnh ghép của{' '}
          <PinkGradientTypography className='font-bold'>
            Foolist
          </PinkGradientTypography>{' '}
          <GrayGradientTypography className='max-md:block max-md:w-full'>
            dựa trên 4 yếu tố chính
          </GrayGradientTypography>
        </GrayGradientTypography>
        <Divider direction='left' />
      </h3>
      <div className='grid w-full max-w-3xl grid-cols-1 gap-3 mx-auto mt-20 md:grid-cols-2 md:grid-rows-2'>
        {values.map((item, index: number) => {
          return (
            <div
              key={item.title + index}
              className={clsx(
                'flex md:aspect-square relative flex-col px-8 py-8 text-left transition-all border cursor-pointer shadow-2xl hover:[box-shadow:#f5a4c0_0px_13px_50px_-26px] bg-black-900/30 border-white/20 rounded-lg md:rounded-[50px]',
                {
                  'rounded-br-xl rounded-lr-xl rounded-tr-xl rounded-bl-xl hover:-translate-y-4 hover:-translate-x-4 hover:rounded-br-xl hover:rounded-lr-xl hover:rounded-tr-xl hover:rounded-bl-xl':
                    index === 0 && !isMobile,
                  'rounded-bl-xl rounded-tl-xl rounded-br-xl hover:-translate-y-4 hover:translate-x-4 ':
                    index === 1 && !isMobile,
                  'rounded-tr-xl rounded-tl-xl rounded-br-xl hover:translate-y-4 hover:-translate-x-4':
                    index === 2 && !isMobile,
                  'rounded-tl-xl rounded-tr-xl rounded-bl-xl hover:translate-y-4 hover:translate-x-4':
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
          );
        })}
      </div>
    </Section>
  );
};

export default FindingValue;

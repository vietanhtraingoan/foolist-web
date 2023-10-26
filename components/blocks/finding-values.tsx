import React from 'react';
import Section from '../common/section';
import PinkGradientTypography from '../common/typography/pink-gradient-typography';
import clsx from 'clsx';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import Divider from '../common/divider';

const FindingValue = () => {
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
      <div className='grid w-full max-w-3xl grid-cols-1 md:grid-cols-2 md:grid-rows-2 mx-auto mt-20'>
        {values.map((item, index) => {
          return (
            <div
              className={clsx(
                'flex flex-col px-6 py-8 text-left transition-all border cursor-pointer shadow-2xl hover:[box-shadow:#f5a4c0_0px_13px_50px_-26px] hover:-translate-y-4 bg-black-900/30 border-white/20 rounded-xl'
              )}
              style={{
                backdropFilter: 'blur( 10px )',
                WebkitBackdropFilter: 'blur( 10px )',
                borderRadius: '10px',
              }}
            >
              <h3 className='mb-5 md:mb-8 text-3xl md:text-4xl lg:text-5xl font-bold'>
                {item.title}
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

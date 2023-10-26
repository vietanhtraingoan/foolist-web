import React from 'react';
import Section from '../common/section';
import GrayGradientTypography from '../common/typography/gray-gradient-typography';
import Divider from '../common/divider';

const CoreValues = () => {
  const coreValues = [
    {
      title: 'Đồng hành',
      description:
        'Cùng chung chiến tuyến, cùng chung mục tiêu, cùng chung lý tưởng',
    },
    {
      title: 'Sáng tạo',
      description:
        'không ngừng thả cái tôi vào vô hạn góc nhìn để chạm đến sự khác biệt duy nhất.',
    },
    {
      title: 'Phát triển',
      description: 'là phải được cộng đồng công nhận',
    },
  ];

  return (
    <Section className='relative overflow-hidden'>
      <div className=' mx-auto'>
        <div className='max-w-3xl mx-auto text-center'>
          <Section.Title className='md:mb-10 lg:mb-24 font-bold font-heading text-2xl md:!text-4xl lg:text-h2'>
            <GrayGradientTypography className='font-heading'>
              Giá trị cốt lõi
            </GrayGradientTypography>
            <Divider direction='center' className='mt-4 md:mt-6' />
          </Section.Title>
        </div>
        <div className='mx-auto max-w-7xl'>
          <div className='flex max-md:flex-wrap gap-3 lg:gap-10'>
            {coreValues.map((item) => (
              <div
                className='flex flex-col w-full md:w-1/2 lg:w-1/3 px-6 py-8 text-center transition-all cursor-pointer shadow-2xl border border-gray-100/10 hover:[box-shadow:#f5a4c0_0px_13px_50px_-26px] shadow-white/20 hover:-translate-y-6 bg-black-900/30 rounded-xl'
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
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoreValues;

import React, { useEffect, useState } from 'react';
import Section from '../common/section';
import { BaseComponent } from '../../utils/types/clientTypes';
import { useTranslation } from 'react-i18next';
import IntroductionCarousel from '../../pages/components/introductionCarousel';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

const HeroSection = ({
  classNamePrefix,
}: BaseComponent & { classNamePrefix?: string }) => {
  const isLaptopOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const [paragraph, setParagraph] = useState('');
  const { t } = useTranslation('common');

  useEffect(() => {
    setParagraph(t('About_content.paragraph-1'));
  }, [t('About_content.paragraph-1')]);

  return (
    <Section id='first-section' className={``}>
      <div
        className={clsx(
          '  grid items-center w-full grid-cols-1 lg:grid-cols-2 justify-center lg:justify-start'
        )}
      >
        <div className='flex flex-col max-lg:items-center max-md:mb-12'>
          <div
            className={`${classNamePrefix}__introduction-title-brand text-center md:text-left text-[72px] md:text-[90px] lg:text-[120px] xl:text-[156px] font-specialHeading mb-8 animate__animated animate__fadeInUp`}
          >
            Foolist
            {!isLaptopOrMobile && <br />} Creative
          </div>
          <div
            className={clsx(
              'max-w-xl leading-relaxed animate__animated animate__fadeInUp tracking-tight text-center md:text-left text-gray-400 text-lg prose  max-lg:pr-0 max-xl:pr-10'
            )}
          >
            <p>{paragraph}</p>
          </div>
        </div>

        <div className='relative xl:ml-auto xl:pl-8 max-lg:mt-8 rounded-xl animate__animated animate__zoomIn'>
          <IntroductionCarousel />
          <div className='absolute inset-0 z-0 w-full h-full opacity-100 translate-x-3 -translate-y-3 scale-[0.88] md:scale-[0.7] lg:scale-[0.88] transform bg-pink-300 rounded-full bg-gradient-to-r from-purple-200 to-primary blur-3xl'></div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

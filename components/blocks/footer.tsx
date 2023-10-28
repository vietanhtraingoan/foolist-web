import React from 'react';
import Section from '../common/section';
import MenuContactSection from '../components/menuContactSection';
import Link from 'next/link';
import { PrivateRoutes } from '../../routers';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  const filterPrivateRoutes = PrivateRoutes.filter(
    (route) => route.path !== '/'
  );
  return (
    <Section className='relative !pb-0 !mb-0 overflow-hidden bg-black'>
      <img
        className='absolute bottom-0 h-full transform -translate-x-1/2 left-1/2'
        src='https://shuffle.dev/flaro-assets/images/footers/gradient.svg'
        alt=''
      />
      <div className='container relative z-10 mx-auto'>
        <div className='pb-24 border-b border-gray-900'>
          <div className='flex flex-wrap justify-between -m-8'>
            <div className='w-full pt-8 md:p-8 sm:w-1/2 lg:w-6/12'>
              <div className='lg:max-w-sm'>
                <div
                  className={`home-page__introduction-title-brand max-w-[60%] md:text-left text-4xl font-specialHeading mb-8 animate__animated animate__fadeInUp`}
                >
                  Foolist Creative
                </div>
                <span className={`text-sm block lg:text-base font-main mb-8`}>
                  Foolist.vn
                </span>
                <div className='mb-20 font-medium leading-relaxed text-gray-400 md:max-w-xs'>
                  <MenuContactSection />
                </div>
              </div>
            </div>
            <div className='w-full md:p-8 sm:w-1/2 lg:w-2/12'>
              <h3 className='mb-8 text-sm font-semibold leading-normal text-gray-400 uppercase tracking-px'>
                {t(`About us`)}
              </h3>
              <ul>
                <li className='mb-5'>
                  <Link
                    href={t('capacity.first.slug')}
                    className='font-medium leading-relaxed text-white hover:text-gray-200'
                  >
                    {t('capacity.first.title')}
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link
                    href={t('capacity.second.slug')}
                    className='font-medium leading-relaxed text-white hover:text-gray-200'
                  >
                    {t('capacity.second.title')}
                  </Link>
                </li>

                <li className='mb-5'>
                  <Link
                    href={t('capacity.third.slug')}
                    className='font-medium leading-relaxed text-white hover:text-gray-200'
                  >
                    {t('capacity.third.title')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-full md:p-8 sm:w-1/2 lg:w-2/12'>
              <h3 className='mb-8 text-sm font-semibold leading-normal text-gray-400 uppercase tracking-px'>
                Company
              </h3>
              <ul>
                {filterPrivateRoutes.map((item) => {
                  return (
                    <li className='mb-5' key={item?.path}>
                      <Link
                        href={t(`topmenu.${item.path}`)}
                        className='font-medium leading-relaxed text-white hover:text-gray-200'
                      >
                        <span>{t(`${item.name}`)}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <p className='py-5 text-sm font-medium leading-normal text-center text-gray-300'>
          <span>
            © 2023 <strong>Foolist Creative</strong>
          </span>
        </p>
      </div>
    </Section>
  );
};

export default Footer;

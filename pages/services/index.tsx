import React, { useEffect, useState } from 'react';
import MiniFooter from '../../components/components/miniFooter';
import { ServicesMock, services } from '../../mocks/servicesMock';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import Head from 'next/head';
import { ImageNext } from '../../components/common/image-next';
import Section from '../../components/common/section';
import clsx from 'clsx';
import ParagraphResponsive from '../../components/common/typography/paragraph-responsive';
import Link from 'next/link';
import Divider from '../../components/common/divider';
import GrayGradientTypography from '../../components/common/typography/gray-gradient-typography';
import BorderGradient from '../../components/common/border-gradient';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Empty } from 'antd';

type Props = {
  // Add custom props here
};

const classNamePrefix = 'service-page';

const ServicesPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const [viewingService, setViewingService] = useState<any | null>(null);
  const router = useRouter();
  const { t } = useTranslation();

  const handleChangeViewService = (service: any) => {
    setViewingService(service);
  };

  const handleResetViewingService = () => setViewingService(null);

  return (
    <div className={classNamePrefix}>
      <Head>
        <title>{t('Services')}</title>
      </Head>
      <Section className='w-full'>
        <Section.Title className='text-center max-lg:!mb-4 !mb-6 max-lg:!text-5xl animate__animated animate__slideInUp'>
          <GrayGradientTypography className='font-heading'>
            {t('Services')}
          </GrayGradientTypography>
        </Section.Title>
        <Divider
          direction='center'
          className='mx-auto max-w-[400px] !mt-0 !mb-10 lg:!mt-8 lg:!mb-20'
        />
        <div className='grid w-full md:grid-cols-2 grid-rows-[300px_300px] gap-8'>
          {services.map((item, index: number) => {
            return (
              <div
                onClick={() => handleChangeViewService(item)}
                className={clsx(
                  'relative p-[1px] group z-[1] before:absolute before:blur-[10px] before:translate-y-2 before:content-[""] hover:before:bg-primary/30 transition-all before:bg-gray-500/20 before:z-[-2] before:inset-[-8px] bg-gradient-to-t from-gray-100 to-gray-500 h-full rounded-2xl',
                  {
                    'md:row-span-2 md:row-start-1 md:row-end-3 md:col-span-1':
                      index === 0,
                    'row-span-1': index !== 0,
                  }
                )}
              >
                <div className='w-full h-full overflow-hidden bg-transparent rounded-2xl'>
                  <div className='absolute z-[-1] overflow-hidden w-full h-full'>
                    <ImageNext
                      className='object-cover w-full h-full rounded-2xl'
                      src={item?.image}
                      alt={item.title}
                    />
                  </div>
                  <div className='relative bg-gradient-to-t from-black/40 to-transparent z-[1] flex flex-col justify-end h-full p-8'>
                    <h3
                      className={clsx(
                        '',
                        index === 0 ? 'text-4xl' : 'text-2xl'
                      )}
                    >
                      {item?.title}
                    </h3>
                    <p
                      className={clsx(
                        'mb-0 line-clamp-2',
                        index === 0 ? 'text-lg max-w-md' : 'text-sm max-w-sm'
                      )}
                    >
                      {item?.description}
                    </p>
                    <div
                      className={clsx(
                        ' font-semibold text-primary',
                        index === 0 ? 'mt-5 text-xl' : 'mt-3 text-base'
                      )}
                    >
                      Xem thêm
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      {viewingService && (
        <div
          className='fixed inset-0 z-[9999] Modal bg-black/40 backdrop-blur-lg flex items-center justify-center'
          onClick={handleResetViewingService}
        >
          <BorderGradient
            className='!w-[800px] h-full md:h-[80vh]'
            commonClassName='rounded-xl'
            borderClassName='bg-gradient-to-br m-[1.2px] from-neutral-600 to-neutral-800'
            type='contain'
            bgClassName='bg-neutral-950 h-full'
          >
            <div className='relative h-full ModalCard'>
              <div className='absolute top-0 left-0 flex h-[60px] items-center justify-end w-full p-4 bg-transparent ModalHeader'>
                <button
                  onClick={handleResetViewingService}
                  className='w-[45px] aspect-square rounded-full bg-neutral-800 flex items-center justify-center'
                >
                  <XMarkIcon height={30} width={30} className='fill-gray-200' />
                </button>
              </div>
              <div className='h-full pt-[45px] p-4 overflow-x-auto'>
                <div className='max-w-full mx-8 prose prose-h2:text-white [&>h2>span]:font-heading prose-p:md:text-xl prose-p:text-justify'>
                  <h1 className='text-center text-white'>
                    <GrayGradientTypography className='font-bold font-heading'>
                      {viewingService?.title}
                    </GrayGradientTypography>
                    <Divider direction='center' className='!mt-6' />
                  </h1>
                  {viewingService?.content && viewingService?.content !== '' ? (
                    <div className='max-w-full mb-8 prose prose-h2:text-white prose-p:md:text-lg'>
                      {viewingService?.content}
                    </div>
                  ) : (
                    <Empty />
                  )}
                </div>
              </div>
            </div>
          </BorderGradient>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ServicesPage;

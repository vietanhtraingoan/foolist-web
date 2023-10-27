import { XMarkIcon } from '@heroicons/react/24/outline';
import { Empty } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next/types';
import { useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import BorderGradient from '../../components/common/border-gradient';
import Divider from '../../components/common/divider';
import { ImageNext } from '../../components/common/image-next';
import Section from '../../components/common/section';
import GrayGradientTypography from '../../components/common/typography/gray-gradient-typography';
import { services } from '../../mocks/servicesMock';

type Props = {
  // Add custom props here
};

const classNamePrefix = 'service-page';

const ServicesPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const viewingSlug = router.query?.serviceSlug.slice(-1)[0];
  console.log('🚀 ~ file: index.tsx:34 ~ viewingSlug:', viewingSlug);
  const [viewingService, setViewingService] = useState<any | null>(() => {
    return viewingSlug
      ? services.find(
          (item) => item.slug == viewingSlug || item.enSlug == viewingSlug
        )
      : null;
  });
  const { t } = useTranslation();
  useEffect(() => {
    const currentLocale = getCurrentLocale();
    if (
      viewingService &&
      currentLocale == 'en' &&
      viewingSlug !== viewingService.enSlug
    ) {
      router.push('/en/services/' + viewingService?.enSlug);
    }
  }, [viewingService, (_props as any)?._nextI18Next, router]);

  useEffect(() => {
    if (!router.query?.serviceSlug || router.query?.serviceSlug?.length === 0) {
      const currentLocale = getCurrentLocale();
      router.push(currentLocale == 'en' ? '/en/services' : 'dich-vu');
    }
  }, [(_props as any)?._nextI18Next, router]);

  const getCurrentLocale = () => {
    const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
    return currentLocale;
  };

  const handleChangeViewService = (service: any) => {
    setViewingService(service);
    const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
    const baseLocale = currentLocale == 'en' ? '/services' : 'dich-vu';
    router.push(baseLocale + '/' + service?.slug);
  };

  const handleResetViewingService = () => {
    const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
    router.push(currentLocale == 'en' ? '/services' : 'dich-vu');
    setViewingService(null);
  };

  const isEnglish = getCurrentLocale() == 'en';
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
                      alt={isEnglish ? item?.titleEn : item.title}
                    />
                  </div>
                  <div className='relative bg-gradient-to-t from-black/40 to-transparent z-[1] flex flex-col justify-end h-full p-8'>
                    <h3
                      className={clsx(
                        '',
                        index === 0 ? 'text-4xl' : 'text-2xl'
                      )}
                    >
                      {isEnglish ? item?.titleEn : item.title}
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
                      {isEnglish ? 'Read more' : 'Xem thêm'}
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
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className='relative h-full ModalCard'
            >
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
                      {isEnglish
                        ? viewingService?.titleEn || viewingService?.title
                        : viewingService?.title}
                    </GrayGradientTypography>
                    <Divider direction='center' className='!mt-6' />
                  </h1>
                  {viewingService?.content && viewingService?.content !== '' ? (
                    <div className='max-w-full mb-8 prose prose-h2:text-white prose-p:md:text-lg'>
                      {isEnglish
                        ? viewingService?.contentEn
                        : viewingService?.content}
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          serviceSlug: 'services/brand-strategy'.split('/'),
        },
        locale: 'en',
      },
      {
        params: {
          serviceSlug: 'services/media-production'.split('/'),
        },
        locale: 'en',
      },
      {
        params: {
          serviceSlug: 'services/the-media'.split('/'),
        },
        locale: 'en',
      },

      {
        params: {
          serviceSlug: ['en', 'dich-vu'],
        },
        locale: 'en',
      },
      {
        params: {
          serviceSlug: ['en', 'services'],
        },
        locale: 'en',
      },
      {
        params: {
          serviceSlug: 'dich-vu/chien-luoc-thuong-hieu'.split('/'),
        },
        locale: 'en',
      },
      {
        params: {
          serviceSlug: 'dich-vu/san-xuat-media'.split('/'),
        },
        locale: 'en',
      },
      {
        params: {
          serviceSlug: 'dich-vu/truyen-thong'.split('/'),
        },
        locale: 'en',
      },
    ],
    fallback: false,
  };
};

export default ServicesPage;

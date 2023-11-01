import {
  ArrowLeftIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Empty } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import BorderGradient from '../../components/common/border-gradient';
import Divider from '../../components/common/divider';
import { ImageNext } from '../../components/common/image-next';
import Section from '../../components/common/section';
import GrayGradientTypography from '../../components/common/typography/gray-gradient-typography';
import { services } from '../../mocks/servicesMock';
import { FullscreenOutlined } from '@ant-design/icons';
import AnimateOnScroll from '../common/animate-on-scroll';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  // Add custom props here
  viewingService?: any;
};

const classNamePrefix = 'service-page';

const ViewService = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [fullScreen, setFullScreen] = useState(
    router.query?.full_screen === 'true'
  );
  const [viewingService, setViewingService] = useState<any | null>(() => {});
  const { t } = useTranslation();
  const getCurrentLocale = () => {
    const currentLocale = router?.locale;
    return currentLocale;
  };
  const isEnglish = getCurrentLocale() == 'en';

  useEffect(() => {
    const currentLocale = getCurrentLocale();

    if (currentLocale === 'en' && viewingService) {
      if (router.query?.s !== viewingService?.titleEn) {
        router.push({
          query: {
            ...router.query,
            s: viewingService?.titleEn,
          },
        });
      } else if (router.query?.s !== viewingService?.title) {
        router.push({
          query: {
            ...router.query,
            s: viewingService?.title,
          },
        });
      }
    }

    if (currentLocale === 'en' && router.asPath !== '/services') {
      router.push('/services', {
        ...router.query,
      });
    } else {
      router.push('/dich-vu', {
        ...router.query,
      });
    }
  }, [router?.locale]);

  useEffect(() => {
    if (router?.query?.s) {
      const service = services.find(
        (item) =>
          item?.slug == router?.query?.s || item?.enSlug === router?.query?.s
      );
      setViewingService(service);
      setShowModal(true);
    }
  }, [router]);

  const handleChangeViewService = (service: any) => {
    setViewingService(service);
    const currentLocale = getCurrentLocale();
    const slug = currentLocale == 'en' ? service?.enSlug : service?.slug;
    router.push({
      query: {
        s: slug,
      },
    });
    setShowModal(true);
  };

  const handlePreloadServiceDetail = (service: any) => {
    setViewingService(service);
  };

  const handleResetViewingService = () => {
    router.push(router.basePath);
    setViewingService(null);
    setShowModal(false);
  };

  const handleToggleFullScreen = () => {
    setFullScreen(!fullScreen);
    router.push({
      query: {
        ...router.query,
        full_screen: !fullScreen,
      },
    });
  };

  return (
    <div className={classNamePrefix}>
      <Head>
        <title>{t('Services')}</title>
      </Head>
      <Section className='w-full'>
        <AnimateOnScroll type='fadeIn'>
          <Section.Title className='text-center max-lg:!mb-4 !mb-6 max-lg:!text-5xl animate__animated animate__slideInUp'>
            <GrayGradientTypography className='font-heading'>
              {t('Services')}
            </GrayGradientTypography>
          </Section.Title>
        </AnimateOnScroll>
        <AnimateOnScroll type='fadeIn' delay={0.1}>
          <Divider
            direction='center'
            className='mx-auto max-w-[400px] !mt-0 !mb-10 lg:!mt-8 lg:!mb-20'
          />
        </AnimateOnScroll>
        <div className='grid w-full md:grid-cols-2 md:grid-rows-[400px_400px] gap-8'>
          {services.map((item, index: number) => {
            return (
              <AnimateOnScroll
                type='fadeInUp'
                delay={index / 10}
                onClick={() => handleChangeViewService(item)}
                onMouseEnter={() => {
                  handlePreloadServiceDetail(item);
                }}
                onMouseLeave={() => {
                  if (viewingService && !showModal) setViewingService(null);
                }}
                className={clsx(
                  'relative p-[1px] max-md:h-[300px]  cursor-pointer group z-[1] before:absolute before:blur-[10px] before:translate-y-2 before:content-[""] hover:before:bg-primary/30 transition-all before:bg-gray-500/20 before:z-[-2] before:inset-[-8px] bg-gradient-to-t from-gray-100 to-gray-500 h-full rounded-2xl',
                  {
                    'md:row-span-2 md:row-start-1 md:row-end-3 md:col-span-1':
                      index === 0,
                    'md:row-span-1': index !== 0,
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
                  <AnimateOnScroll
                    type='fadeInUp'
                    delay={index / 5}
                    className='relative z-[1] flex flex-col justify-end h-full p-2 md:p-4'
                  >
                    <div className='flex flex-col p-3 md:p-6 rounded-xl h-fit bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neutral-700 opacity-90 to-black'>
                      <h3
                        className={clsx(
                          'cursor-pointer bg-neu text-white font-heading',
                          index === 0 ? 'text-2xl md:text-4xl' : 'text-2xl'
                        )}
                      >
                        {isEnglish ? item?.titleEn : item.title}
                      </h3>
                      <p
                        className={clsx(
                          'mb-0 line-clamp-2 text-white font-main',
                          index === 0
                            ? 'text-sm md:text-lg max-w-md'
                            : 'text-sm max-w-sm'
                        )}
                      >
                        {isEnglish ? item?.descriptionEn : item.description}
                      </p>
                      <div
                        className={clsx(
                          ' font-semibold text-primary',
                          index === 0
                            ? 'mt-5 text-base md:text-xl'
                            : 'mt-3 text-base'
                        )}
                      >
                        {isEnglish ? 'Read more' : 'Xem thêm'}
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>
      <AnimatePresence>
        {viewingService && (
          <motion.div
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            exit={{
              opacity: 0,
              translateY: 100,
              transition: {
                duration: 0.05,
              },
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                duration: 0.2,
                delay: 0.2,
              },
            }}
            className={clsx(
              showModal ? 'opacity-100 visible' : 'opacity-0 invisible',
              'fixed  inset-0 z-[9999] Modal bg-black/40 backdrop-blur-lg flex items-center justify-center'
            )}
            onClick={handleResetViewingService}
          >
            <BorderGradient
              className={clsx(
                'transition-all w-full md:w-[800px] h-full md:h-[80vh]',
                {
                  'md:h-full md:!w-full': fullScreen,
                  'md:h-[80vh]': !fullScreen,
                }
              )}
              commonClassName='md:rounded-xl'
              borderClassName='bg-gradient-to-br md:m-[1.2px] from-neutral-600 to-neutral-800'
              type='contain'
              bgClassName='bg-neutral-950 h-full'
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className='relative h-full ModalCard'
              >
                <div className='absolute top-0 left-0 flex h-[60px] items-center justify-end p-4 bg-transparent ModalHeader'>
                  <button
                    onClick={() => {
                      setViewingService(null);
                      setShowModal(false);
                      router.back();
                    }}
                    className='md:hidden w-[45px] aspect-square hover:bg-neutral-700 rounded-full mr-3 bg-neutral-800 flex items-center justify-center'
                  >
                    <ArrowLeftIcon
                      height={30}
                      width={30}
                      className='fill-gray-200'
                    />
                  </button>
                </div>
                <div className='absolute top-0 left-0 flex h-[60px] pointer-events-none items-center justify-end w-full p-4 bg-transparent ModalHeader'>
                  <button
                    onClick={handleToggleFullScreen}
                    className='max-md:hidden w-[45px] pointer-events-auto aspect-square hover:bg-neutral-700 rounded-full mr-3 bg-neutral-800 flex items-center justify-center'
                  >
                    {fullScreen ? (
                      <ArrowsPointingInIcon
                        height={30}
                        width={30}
                        className='fill-gray-200'
                      />
                    ) : (
                      <ArrowsPointingOutIcon
                        height={30}
                        width={30}
                        className='fill-gray-200'
                      />
                    )}
                  </button>
                  <button
                    onClick={handleResetViewingService}
                    className='w-[45px] aspect-square rounded-full pointer-events-auto  hover:bg-neutral-700 bg-neutral-800 flex items-center justify-center'
                  >
                    <XMarkIcon
                      height={30}
                      width={30}
                      className='fill-gray-200'
                    />
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
                    {viewingService?.content &&
                    viewingService?.content !== '' ? (
                      <div className='max-w-full mb-8 prose prose-h2:text-white prose-ul:md:text-lg prose-p:md:text-lg'>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  params,
}) => ({
  props: {
    params,
    viewingService: null,
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ViewService;

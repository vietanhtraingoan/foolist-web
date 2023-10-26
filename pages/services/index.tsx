import React, { useEffect, useState } from 'react';
import MiniFooter from '../components/miniFooter';
import { ServicesMock } from '../../mocks/servicesMock';
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

type Props = {
  // Add custom props here
};

const classNamePrefix = 'service-page';

const ServicesPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const { t } = useTranslation();
  const services = [
    {
      title: 'Chiến lược thương hiệu',
      description:
        'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin, dữ liệu, phân tích, báo cáo. Từ đó, rút ra “Insight Findings” trả lời cho câu hỏi mà doanh nghiệp đặt ra. ',
      slug: 'chien-luoc-thuong-hieu',
      image: 'https://source.unsplash.com/random',
    },
    {
      title: 'Chiến lược thương hiệu',
      description:
        'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin, dữ liệu, phân tích, báo cáo. Từ đó, rút ra “Insight Findings” trả lời cho câu hỏi mà doanh nghiệp đặt ra. ',
      slug: 'chien-luoc-thuong-hieu',
      image: 'https://source.unsplash.com/random',
    },
    {
      title: 'Chiến lược thương hiệu',
      description:
        'Foolist sẽ đưa ra cho khách hàng và đối tác những thông tin, dữ liệu, phân tích, báo cáo. Từ đó, rút ra “Insight Findings” trả lời cho câu hỏi mà doanh nghiệp đặt ra. ',
      slug: 'chien-luoc-thuong-hieu',
      image: 'https://source.unsplash.com/random',
    },
  ];
  // const [windowSize, setWindowSize] = useState<number>();

  // useEffect(() => {
  //   setWindowSize(window.innerWidth);
  // }, []);

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
          {services.map((item, index: number) => (
            <div
              className={clsx(
                'relative p-[1px] group z-[1] before:absolute before:blur-[10px] before:translate-y-2 before:content-[""] hover:before:bg-primary/30 transition-all before:bg-gray-500/20 before:z-[-2] before:inset-[-8px] bg-gradient-to-t from-gray-100 to-gray-500 h-full rounded-2xl',
                {
                  'md:row-span-2 md:row-start-1 md:row-end-3 md:col-span-1':
                    index === 0,
                  'row-span-1': index !== 0,
                }
              )}
            >
              <Link
                href={item.slug}
                className='w-full h-full overflow-hidden bg-transparent rounded-2xl'
              >
                <div className='absolute z-[-1] overflow-hidden w-full h-full'>
                  <ImageNext
                    className='object-cover w-full h-full rounded-2xl'
                    src={item?.image}
                    alt={item.title}
                  />
                </div>
                <div className='relative bg-gradient-to-t from-black/40 to-transparent z-[1] flex flex-col justify-end h-full p-8'>
                  <h3
                    className={clsx('', index === 0 ? 'text-4xl' : 'text-2xl')}
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
                  <Link
                    href='#'
                    className={clsx(
                      ' font-semibold text-primary',
                      index === 0 ? 'mt-5 text-xl' : 'mt-3 text-base'
                    )}
                  >
                    Xem thêm
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>
      {/* <div className={`${classNamePrefix}__list`}>
        {ServicesMock
          ? ServicesMock.map((s) => (
              <div
                className={`${classNamePrefix}__list-item animate__animated animate__zoomIn`}
                key={s.id}
                onClick={() => router.push(`/serviceDetail?id=${s.id}`)}
              >
                {windowSize < 768 ? (
                  <div className={`${classNamePrefix}__list-item-image`}>
                    {(
                      <LazyLoadImage
                        src={s.imgeUrl.src}
                        placeholderSrc={s.imgeUrl.src}
                        effect='blur'
                        width='100%'
                        height='100%'
                      />
                    ) || <Skeleton />}
                  </div>
                ) : (
                  <div className={`${classNamePrefix}__list-item-image`}>
                    {(
                      <LazyLoadImage
                        src={s.presentImg.src}
                        placeholderSrc={s.presentImg.src}
                        effect='blur'
                        width='100%'
                        height='100%'
                      />
                    ) || <Skeleton />}
                  </div>
                )}

                <div className={`${classNamePrefix}__list-item-title`}>
                  {t(s.title)}
                </div>
              </div>
            ))
          : ''}
      </div> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ServicesPage;

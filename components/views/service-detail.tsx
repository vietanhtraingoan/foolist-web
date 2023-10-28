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
import ViewService from '../../components/views/service';

type Props = {
  // Add custom props here
};

const classNamePrefix = 'service-page';

const ViewServiceDetail = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter();
  const viewingSlug = router.query?.serviceSlug;
  const [viewingService, setViewingService] = useState<any | null>(() => {
    return viewingSlug
      ? services.find(
          (item) => item.slug == viewingSlug || item.enSlug == viewingSlug
        )
      : null;
  });
  const { t } = useTranslation();

  useEffect(() => {
    if (!router.query?.serviceSlug) {
      const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
      router.push(currentLocale == 'en' ? './en/services' : './dich-vu');
    }
  }, [(_props as any)?._nextI18Next, router]);

  const handleChangeViewService = (service: any) => {
    setViewingService(service);
    const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
    const baseLocale = currentLocale == 'en' ? './services' : './dich-vu';
    router.push(baseLocale + '/' + service?.slug);
  };

  const handleResetViewingService = () => {
    const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
    router.push(currentLocale == 'en' ? './services' : './dich-vu');
    setViewingService(null);
  };

  const getCurrentLocale = () => {
    const currentLocale = (_props as any)?._nextI18Next?.initialLocale;
    return currentLocale;
  };

  const isEnglish = getCurrentLocale() == 'en';
  return <ViewService viewingService={viewingService} />;
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  params,
}) => {
  return {
    props: {
      params: params,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          serviceSlug: 'chien-luoc-thuong-hieu',
        },
        locale: 'vn',
      },
      {
        params: {
          serviceSlug: 'san-xuat-media',
        },
        locale: 'vn',
      },
      {
        params: {
          serviceSlug: 'truyen-thong',
        },
        locale: 'vn',
      },
    ],
    fallback: false,
  };
};

export default ViewServiceDetail;

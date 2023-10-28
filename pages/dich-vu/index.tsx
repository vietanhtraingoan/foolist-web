import { XMarkIcon } from '@heroicons/react/24/outline';
import { Empty } from 'antd';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { useState } from 'react';
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

const ServicesPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <ViewService />;
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ServicesPage;

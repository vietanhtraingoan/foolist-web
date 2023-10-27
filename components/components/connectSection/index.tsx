import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import Section from '../../common/section';
import GrayGradientTypography from '../../common/typography/gray-gradient-typography';
import CustomNavigationButton from '../customNavigationButton';

const classNamePrefix = 'connect-section';

type Props = {
  // Add custom props here
};

const ConnectSection = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const serviceList = [
    {
      id: 1,
      title: t('service.tvc'),
      onClick: () => router.push(`/serviceDetail?id=1`),
    },
    {
      id: 2,
      title: t('service.product-design'),
      onClick: () => router.push(`/serviceDetail?id=2`),
    },
    {
      id: 3,
      title: t('service.website-development'),
      onClick: () => router.push(`/serviceDetail?id=3`),
    },
    {
      id: 4,
      title: t('service.mobile-app-development'),
      onClick: () => router.push(`/serviceDetail?id=3`),
    },
    {
      id: 5,
      title: t('service.erp'),
      onClick: () => router.push(`/serviceDetail?id=4`),
    },
  ];

  return (
    <Section className='!pb-0'>
      <div className='flex flex-wrap items-center justify-between w-full'>
        <div className={`text-2xl lg:text-4xl font-main font-medium `}>
          <GrayGradientTypography>{t('connect-with')} </GrayGradientTypography>
          <GrayGradientTypography className='block w-full text-4xl font-bold md:text-5xl max-md:mb-8 lg:text-7xl'>
            Foolist Creative
          </GrayGradientTypography>
        </div>
        <div className={`${classNamePrefix}__top-button`}>
          <CustomNavigationButton
            size='large'
            onClick={() => router.push('/contact')}
          />
        </div>
      </div>
    </Section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ConnectSection;

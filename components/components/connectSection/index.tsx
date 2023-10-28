import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import Section from '../../common/section';
import GrayGradientTypography from '../../common/typography/gray-gradient-typography';
import CustomNavigationButton from '../customNavigationButton';
import AnimateOnScroll from '../../common/animate-on-scroll';

const classNamePrefix = 'connect-section';

type Props = {
  // Add custom props here
};

const ConnectSection = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Section className='!pb-0'>
      <div className='flex flex-wrap items-center justify-between w-full'>
        <div className={`text-2xl lg:text-4xl font-main font-medium `}>
          <AnimateOnScroll type='fadeInUp'>
            {' '}
            <GrayGradientTypography>
              {t('connect-with')}{' '}
            </GrayGradientTypography>
          </AnimateOnScroll>
          <AnimateOnScroll type='fadeInUp' delay={0.1}>
            <GrayGradientTypography className='block w-full text-4xl font-bold md:text-5xl max-md:mb-8 lg:text-7xl'>
              Foolist Creative
            </GrayGradientTypography>
          </AnimateOnScroll>
        </div>
        <div className={`${classNamePrefix}__top-button`}>
          <AnimateOnScroll type='fadeIn'>
            <CustomNavigationButton
              size='large'
              onClick={() => router.push('/contact')}
            />
          </AnimateOnScroll>
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

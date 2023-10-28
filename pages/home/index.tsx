import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Marquee from 'react-fast-marquee';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import AboutUs from '../../components/blocks/about-us';
import HeroSection from '../../components/blocks/hero-section';
import Section from '../../components/common/section';
import ClientItem from '../../components/components/clientItem';
import ConnectSection from '../../components/components/connectSection';
import ProjectCarousel from '../../components/components/projectCarousel';
import ResponsiveClient from '../../components/components/responsiveClient';
import { ClientMocks } from '../../mocks/clientMocks';
import { DEFAULT_LANG } from '../../utils/constants';
import { IClient } from '../../utils/types/clientTypes';
import AnimateOnScroll from '../../components/common/animate-on-scroll';

const NewServiceSection = dynamic(
  () => import('../../components/blocks/new-service-section'),
  { ssr: false }
);
const classNamePrefix = 'home-page';

type Props = {};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('common');

  return (
    <div className={clsx(classNamePrefix)} id='scrolly-div'>
      <Head>
        <title>{t('Home')}</title>
      </Head>
      <HeroSection classNamePrefix={classNamePrefix} />
      <AboutUs />
      <Section>
        <AnimateOnScroll type='fadeIn'>
          <Section.Title className='mb-12 text-center'>
            {t('Section_label.product')}
          </Section.Title>
        </AnimateOnScroll>
        <AnimateOnScroll type='fadeIn' delay={0.1}>
          <ProjectCarousel />
        </AnimateOnScroll>
      </Section>
      <NewServiceSection />
      <Section className={`${classNamePrefix}__responsive-client-container`}>
        <ResponsiveClient />
      </Section>
      <Section className={`${classNamePrefix}__client-container`}>
        <Section.Title className='!text-2xl w-full font-medium text-white uppercase border-b font-heading mb-12 md:mb-14 lg:mb-28'>
          {t('Section_label.client')}
        </Section.Title>
        {ClientMocks ? (
          <div style={{ width: 1500 }}>
            <Marquee pauseOnHover>
              {ClientMocks?.map((c: IClient) => (
                <ClientItem key={c.id} data={c} />
              ))}
            </Marquee>
          </div>
        ) : (
          <></>
        )}
      </Section>
      <section className={`${classNamePrefix}__divider-container`} />
      <section className={`${classNamePrefix}__connection-container`}>
        <ConnectSection />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ['common'])),
  },
});

export default HomePage;

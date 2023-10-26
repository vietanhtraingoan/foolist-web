import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Marquee from 'react-fast-marquee';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import AboutUs from '../../components/blocks/about-us';
import HeroSection from '../../components/blocks/hero-section';
import Section from '../../components/common/section';
import { ClientMocks } from '../../mocks/clientMocks';
import { DEFAULT_LANG } from '../../utils/constants';
import { IClient } from '../../utils/types/clientTypes';
import ClientItem from '../components/clientItem';
import ConnectSection from '../components/connectSection';
import ProjectCarousel from '../components/projectCarousel';
import ResponsiveClient from '../components/responsiveClient';
const NewServiceSection = dynamic(
  () => import('../../components/blocks/new-service-section'),
  { ssr: false }
);
const classNamePrefix = 'home-page';

type Props = {};

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation('common');

  return (
    <div className={classNamePrefix} id='scrolly-div'>
      <Head>
        <title>{t('Home')}</title>
      </Head>
      <HeroSection classNamePrefix={classNamePrefix} />
      <AboutUs />
      {/* <Section className={`${classNamePrefix}__grid-project`}>
        <Section.Title className='mb-12'>{t('feature-project')}</Section.Title>
        <GridProject />
      </Section> */}
      <Section>
        <Section.Title className='mb-12 text-center'>
          {t('Section_label.product')}
        </Section.Title>
        <ProjectCarousel />
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
          <div style={{ width: 1800 }}>
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
      {/* <section className={`${classNamePrefix}__footer-container`}>
        <div className={`${classNamePrefix}__footer-left`}>
          <div className={`${classNamePrefix}__footer-left-title`}>
            <span>“LET ART</span>
            <div className={`${classNamePrefix}__footer-left-title-highlight`}>
              UNLOCK
            </div>
            <span> YOUR BUSINESS “</span>
          </div>
        </div>
        <div className={`${classNamePrefix}__footer-right font-main`}>
          <div
            className={`${classNamePrefix}__introduction-title-brand text-center md:text-left text-3xl font-specialHeading mb-8 animate__animated animate__fadeInUp`}
          >
            Foolist Creative
          </div>
          <span
            className={`${classNamePrefix}__footer-info-group-text font-main`}
          >
            Foolist.vn
          </span>

          <div className={`${classNamePrefix}__menu-contact`}>
            <MenuContactSection />
          </div>

          <div className={`${classNamePrefix}__footer-info-group`}>
            {infoMocks.map((i) => (
              <span key={i.id}>{t(i.text)}</span>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ['common'])),
  },
});

export default HomePage;

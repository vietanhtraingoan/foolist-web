import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { useMediaQuery } from 'react-responsive';
import ViewAboutUs from '../../components/views/about';

const classNamePrefix = 'about-page';

type Props = {
  // Add custom props here
};

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  return <ViewAboutUs />;
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AboutPage;

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ViewContact from '../../components/views/contact';

type Props = {};

const ContactPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <ViewContact />;
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ContactPage;

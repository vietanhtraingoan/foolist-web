import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Router } from 'next/router';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-phone-number-input/style.css';

import { useRouter } from 'next/router';
import 'swiper/css';
import '../components/components/circleGroup/styles.scss';
import '../components/components/circleProjectSlider/styles.scss';
import '../components/components/clientItem/styles.scss';
import CustomDialog from '../components/components/customDialog';
import '../components/components/customHamburgMenu/styles.scss';
import '../components/components/introductionCarousel/styles.scss';
import '../components/components/languageChange/styles.scss';
import TopMenu from '../components/components/menu/TopMenu';
import '../components/components/menu/styles.scss';
import '../components/components/normalCircleGroup/styles.scss';
import '../components/components/projectCarousel/styles.scss';
import '../components/components/projectDetail/styles.scss';
import '../components/components/socialGroup/styles.scss';
import '../components/components/textSlider/styles.scss';
import SEO from '../next-seo.config';
// import "../components/components/employeeSlider/styles.scss";
import '../components/components/connectSection/styles.scss';
import '../components/components/customCheckbox/styles.scss';
import '../components/components/customDialog/styles.scss';
import '../components/components/customNavigationButton/styles.scss';
import '../components/components/menuContactSection/styles.scss';
import '../components/components/miniFooter/styles.scss';
import '../components/components/responsiveClient/styles.scss';
import '../components/components/serviceSection/styles.scss';

import '../pages/about/styles.scss';
import '../pages/contact/styles.scss';
import '../pages/home/styles.scss';
import '../pages/loadingView/styles.scss';
import '../pages/posts/styles.scss';
import '../pages/project/styles.scss';
import '../pages/projectDetail/styles.scss';
import '../pages/serviceDetail/styles.scss';
import '../pages/services/styles.scss';
import '../pages/wordDetail/styles.scss';
import '../pages/words/styles.scss';

import '../pages/views/erpView/styles.scss';
import '../pages/views/productDesignView/styles.scss';
import '../pages/views/tvcView/styles.scss';
import '../pages/views/webDevelopmentView/styles.scss';

import { useEffect, useState } from 'react';
import { PrivateRoutes } from '../routers';
import './globalStyle.scss';

import { Provider } from 'react-redux';
import { wrapper } from '../store/store';

import 'animate.css';
import 'antd/dist/reset.css';
import { appWithTranslation } from 'next-i18next';
import Footer from '../components/blocks/footer';
import LanguageChange from '../components/components/languageChange';
import nextI18NextConfig from '../next-i18next.config.js';
import { DEFAULT_LANG, KEY_LANGUAGE } from '../utils/constants';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();
  const [isPrivateMenu, setisPrivateMenu] = useState(null);

  const [loading, setLoading] = useState(false);

  const updateLanguage = (lang) => {
    const { pathname, asPath, query } = router;
    localStorage.setItem(KEY_LANGUAGE, lang);
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  useEffect(() => {
    if (!isPrivateMenu) {
      let menuPrivate = PrivateRoutes.find((it) => it.path === router.pathname);
      if (menuPrivate) {
        setisPrivateMenu(true);
      } else {
        setisPrivateMenu(false);
      }
    }
    let language = localStorage.getItem(KEY_LANGUAGE);
    const { locale } = router;
    if (!language) {
      updateLanguage(DEFAULT_LANG);
    } else if (language !== locale) {
      updateLanguage(language);
    }
    return () => {};
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () =>
      setTimeout(() => {
        setLoading(false);
      }, 700)
    );
    return () => {
      Router.events.on('routeChangeStart', () => setLoading(true));
      Router.events.on('routeChangeComplete', () =>
        setTimeout(() => {
          setLoading(false);
        }, 700)
      );
    };
  }, [Router.events]);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <DefaultSeo {...SEO} />
      {/* {loading ? (
        <LoadingView />
      ) : ( */}
      <Provider store={store}>
        <div className='relative layout'>
          <TopMenu />
          {/* <div className='container relative'>
            <div
              className='absolute w-[700px] aspect-square top-0 left-0 z-10'
              style={{
                background:
                  'radial-gradient(21% 37.55% at 27% -5%, rgb(255 255 255 / 40%) -100%, rgb(256 255 255 / 0%) 139%)',
              }}
            ></div>
          </div> */}

          <Component {...pageProps} />
          <Footer />

          <div className='floated-language-change'>
            <LanguageChange />
          </div>
          <CustomDialog />
        </div>
      </Provider>
      {/* )} */}
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

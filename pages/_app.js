import { DefaultSeo } from 'next-seo';
import 'animate.css';
import 'animate.css/animate.min.css';
import 'react-phone-number-input/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Head from 'next/head';
import { Router } from 'next/router';

import SEO from '../next-seo.config';
import TopMenu from './components/menu/TopMenu';
import { useRouter } from 'next/router';
import CustomDialog from './components/customDialog';
import 'swiper/css';

import './components/menu/styles.scss';
import './components/customHamburgMenu/styles.scss';
import './components/socialGroup/styles.scss';
import './components/languageChange/styles.scss';
import './components/projectCarousel/styles.scss';
import './components/clientItem/styles.scss';
import './components/circleProjectSlider/styles.scss';
import './components/introductionCarousel/styles.scss';
import './components/projectDetail/styles.scss';
import './components/animatedNextButton/styles.scss';
import './components/animatedGraph/styles.scss';
import './components/circleGroup/styles.scss';
import './components/normalCircleGroup/styles.scss';
import './components/textSlider/styles.scss';
// import "./components/employeeSlider/styles.scss";
import './components/connectSection/styles.scss';
import './components/customNavigationButton/styles.scss';
import './components/gridProject/styles.scss';
import './components/gridCustomer/styles.scss';
import './components/gridProject/projectList/styles.scss';
import './components/customDialog/styles.scss';
import './components/miniFooter/styles.scss';
import './components/responsiveClient/styles.scss';
import './components/serviceSection/styles.scss';
import './components/customCheckbox/styles.scss';
import './components/menuContactSection/styles.scss';

import '../pages/home/styles.scss';
import '../pages/contact/styles.scss';
import '../pages/project/styles.scss';
import '../pages/about/styles.scss';
import '../pages/posts/styles.scss';
import '../pages/services/styles.scss';
import '../pages/words/styles.scss';
import '../pages/wordDetail/styles.scss';
import '../pages/loadingView/styles.scss';
import '../pages/serviceDetail/styles.scss';
import '../pages/projectDetail/styles.scss';

import '../pages/views/tvcView/styles.scss';
import '../pages/views/productDesignView/styles.scss';
import '../pages/views/webDevelopmentView/styles.scss';
import '../pages/views/erpView/styles.scss';

import './globalStyle.scss';
import { useEffect, useState } from 'react';
import { PrivateRoutes } from '../routers';

import { Provider } from 'react-redux';
import { wrapper } from '../store/store';

import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import 'antd/dist/reset.css';
import { DEFAULT_LANG, KEY_LANGUAGE } from '../utils/constants';
import LanguageChange from './components/languageChange';
import LoadingView from './loadingView';
import Footer from '../components/blocks/footer';

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

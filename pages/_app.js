import { DefaultSeo } from "next-seo";
import "animate.css";
import "animate.css/animate.min.css";
import "react-phone-number-input/style.css";
import Head from "next/head";
import { Router } from "next/router";

import SEO from "../next-seo.config";
import TopMenu from "./components/menu/TopMenu";
import { useRouter } from "next/router";
import CustomDialog from "./components/customDialog";

import "./components/menu/styles.scss";
import "./components/customHamburgMenu/styles.scss";
import "./components/socialGroup/styles.scss";
import "./components/languageChange/styles.scss";
import "./components/productSider/styles.scss";
import "./components/projectCarousel/styles.scss";
import "./components/clientItem/styles.scss";
import "./components/circleProjectSlider/styles.scss";
import "./components/introductionCarousel/styles.scss";
import "./components/projectDetail/styles.scss";
import "./components/animatedNextButton/styles.scss";
import "./components/animatedGraph/styles.scss";
import "./components/circleGroup/styles.scss";
import "./components/normalCircleGroup/styles.scss";
import "./components/textSlider/styles.scss";
import "./components/employeeSlider/styles.scss";
import "./components/connectSection/styles.scss";
import "./components/customNavigationButton/styles.scss";
import "./components/gridProject/styles.scss";
import "./components/gridCustomer/styles.scss";
import "./components/gridProject/projectList/styles.scss";
import "./components/customDialog/styles.scss";
import "./components/miniFooter/styles.scss";
import "./components/responsiveClient/styles.scss";
import "./components/serviceSection/styles.scss";
import "./components/customCheckbox/styles.scss";
import "./components/menuContactSection/styles.scss";

import "../pages/home/styles.scss";
import "../pages/contact/styles.scss";
import "../pages/project/styles.scss";
import "../pages/about/styles.scss";
import "../pages/posts/styles.scss";
import "../pages/services/styles.scss";
import "../pages/words/styles.scss";
import "../pages/wordDetail/styles.scss";
import "../pages/loadingView/styles.scss";

import "./globalStyle.scss";
import { useEffect, useState } from "react";
import { PrivateRoutes } from "../routers";

import { Provider } from "react-redux";
import { wrapper } from "../store/store";

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import "antd/dist/reset.css";
import { DEFAULT_LANG, KEY_LANGUAGE } from "../utils/constants";
import LanguageChange from "./components/languageChange";
import LoadingView from "./loadingView";

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
    console.log("language", language);
    if (!language) {
      updateLanguage(DEFAULT_LANG);
    } else if (language !== locale) {
      updateLanguage(language);
    }
    return () => {};
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () =>
      setTimeout(() => {
        setLoading(false);
      }, 1500)
    );
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () =>
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      );
    };
  }, [Router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>

      {loading ? (
        <LoadingView />
      ) : (
        <Provider store={store}>
          <div className="layout">
            <TopMenu />
            <Component {...pageProps} />
            <div className="floated-language-change">
              <LanguageChange />
            </div>
            <CustomDialog />
          </div>
        </Provider>
      )}
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

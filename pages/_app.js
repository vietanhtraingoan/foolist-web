/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { DefaultSeo } from "next-seo";
import 'animate.css';

import SEO from "../next-seo.config";
// import LeftMenu from "./components/menu/LeftMenu";
import TopMenu from "./components/menu/TopMenu";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

import "./components/menu/styles.scss";
import "./components/Footer/styles.scss"

import "./globalStyle.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import { PrivateRoutes } from "../routers";

import { Provider } from "react-redux";
import { wrapper } from "../store/store";

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import "antd/dist/reset.css";
import { DEFAULT_LANG, KEY_LANGUAGE } from "../utils/constants";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();
  const [isPrivateMenu, setisPrivateMenu] = useState(null);

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

  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        {isPrivateMenu && <TopMenu />}
        <div className="layout">
          <Component {...pageProps} />
        </div>
        {isPrivateMenu && <Footer />}
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

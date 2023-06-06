import { DefaultSeo } from "next-seo";
import "animate.css";
import "animate.css/animate.min.css";

import SEO from "../next-seo.config";
// import LeftMenu from "./components/menu/LeftMenu";
import TopMenu from "./components/menu/TopMenu";
import Footer from "./components/Footer";
import { useRouter } from "next/router";
import CustomDialog from "./components/customDialog";

import "./components/menu/styles.scss";
import "./components/Footer/styles.scss";
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
import "./components/mansoryItemCard/styles.scss";
import "./components/customNavigationButton/styles.scss";
import "./components/gridProject/styles.scss";
import "./components/gridCustomer/styles.scss";
import "./components/gridProject/projectList/styles.scss";
import "./components/customDialog/styles.scss";
import "./components/miniFooter/styles.scss";
import "./components/responsiveClient/styles.scss";

import "../pages/home/styles.scss";
import "../pages/contact/styles.scss";
import "../pages/project/styles.scss";
import "../pages/about/styles.scss";
import "../pages/posts/styles.scss";
import "../pages/services/styles.scss";
import "../pages/words/styles.scss";
import "./wordDetail/styles.scss";

import "./globalStyle.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import { PrivateRoutes } from "../routers";

import { Provider } from "react-redux";
import { wrapper } from "../store/store";

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import "antd/dist/reset.css";
import { DEFAULT_LANG, KEY_LANGUAGE } from "../utils/constants";
import LanguageChange from "./components/languageChange";

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
          <div className="floated-language-change">
            <LanguageChange />
          </div>
          <CustomDialog />
        </div>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

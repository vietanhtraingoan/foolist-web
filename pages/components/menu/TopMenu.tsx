import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PrivateRoutes } from "../../../routers";

import foolistLogo from "../../../public/static/foolistLogo.png";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG, KEY_LANGUAGE } from "../../../utils/constants";
import Image from "next/image";

import CustomHamburgMenu from "../customHamburgMenu";
import SocialGroup from "../socialGroup";
import LanguageChange from "../languageChange";

type Props = {
  // Add custom props here
};

export interface MenuObj {
  path: string;
  element: any;
  name: string;
  index: number;
}

const TopMenu = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMenuItem, setShowMenuItem] = useState<boolean>(false);

  const [color, setColor] = useState("#ffffff");
  const [menuBg, setMenuBg] = useState("none");
  const [menuButtonBg, setMenuNButtonBg] = useState("none");

  const [activeMenu, setactiveMenu] = useState(null);

  const filterPrivateRoutes = PrivateRoutes.filter(
    (route) => route.path !== "/"
  );

  const scrollListener = () => {
    const scroll = window.scrollY;

    if (scroll > 105) {
      setMenuBg(" rgba(100, 100, 100, 0.55)");
      setMenuNButtonBg("#f6a5c1");
    } else {
      setMenuBg("");
      setMenuNButtonBg("none");
    }
  };

  const handleMenuClick = () => {
    setIsMenuClick(true);
    setShowMenu(true);

    setTimeout(() => {
      setShowMenuItem(true);
    }, 900);
  };

  const handleCloseMenu = () => {
    setShowMenuItem(false);

    setTimeout(() => {
      setShowMenu(false);
    }, 800);
    setIsMenuClick(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <div
      className="top-menu"
      style={{ background: showMenu ? "rgba(0, 0, 0, 0.9)" : "none" }}
    >
      <div className="second" style={{ background: menuBg }}>
        <div className="content">
          <div className="logo-group" onClick={() => router.push("/")}>
            <Image src={foolistLogo} className="logo" alt="logo" priority={false}/>
          </div>

          <div className="left-menu">
            <div className="responsive-floated-language-change">
              <LanguageChange />
            </div>

            <div
              className="left-menu-responsive-button"
              style={{ background: menuButtonBg }}
            >
              <CustomHamburgMenu
                isMenuClick={isMenuClick}
                handleMenuClick={handleMenuClick}
                handleCloseMenu={handleCloseMenu}
                spanBgColor={color}
              />
            </div>

            <div className="left-menu-responsive-grid">
              {router.pathname !== "/" ? (
                <div className="menu-grid-wrapper">
                  {filterPrivateRoutes.map((menuItem, key) => {
                    return (
                      <div
                        key={key}
                        onClick={() => {
                          router.push(menuItem.path);
                        }}
                        className={`menu-grid-item ${
                          router.pathname === menuItem.path
                            ? "menu-grid-item-active"
                            : ""
                        }`}
                      >
                        <span>{t(`${menuItem.name}`)}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <CustomHamburgMenu
                  isMenuClick={isMenuClick}
                  handleMenuClick={handleMenuClick}
                  handleCloseMenu={handleCloseMenu}
                  spanBgColor={color}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {showMenu ? (
        <div className="navigation-menu-wrapper animate__animated animate__fadeIn">
          <div
            className={`${showMenuItem ? "item-wrapper-show" : "item-wrapper"}`}
          >
            {PrivateRoutes.map((menuItem, key) => {
              return (
                <div
                  key={key}
                  onClick={() => {
                    router.push(menuItem.path);
                    setactiveMenu(menuItem.index);
                    handleCloseMenu();
                  }}
                  className={`item ${
                    activeMenu === menuItem.index ? "active" : ""
                  } ${
                    showMenuItem
                      ? "animate__animated animate__slideInDown"
                      : "animate__animated animate__animate__fadeOut"
                  }  `}
                >
                  {t(`${menuItem.name}`)}
                </div>
              );
            })}
            <SocialGroup />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default TopMenu;

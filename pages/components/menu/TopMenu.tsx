import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PrivateRoutes } from "../../../routers";

import foolistLogo from "../../../public/static/foolistLogo.png";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG } from "../../../utils/constants";
import Image from "next/image";

import CustomHamburgMenu from "../customHamburgMenu";
import SocialGroup from "../socialGroup";
import LanguageChange from "../languageChange";
import MenuContactSection from "../menuContactSection";

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
      style={{ background: showMenu ? "rgba(0, 0, 0)" : "#000000" }}
    >
      <div
        className="second"
        style={{ background: showMenu ? "#000000" : menuBg }}
      >
        <div className="content">
          <div className="logo-group" onClick={() => router.push("/")}>
            <Image
              src={foolistLogo}
              className="logo"
              alt="logo"
              priority={false}
            />
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
                spanBgColor="#ffffff"
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
                  spanBgColor="#ffffff"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {showMenu ? (
        <>
          <div
            className={`responsive-navigation-menu-wrapper animate__animated $animate__slideInRight`}
          >
            <div className="menu-dropdown-container">
              <div className="navigation-group-container">
                {PrivateRoutes.map((menuItem, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => {
                        router.push(menuItem.path);
                        setactiveMenu(menuItem.index);
                        handleCloseMenu();
                      }}
                      className="item animate__animated animate__slideInRight"
                    >
                      <span>{t(`${menuItem.name}`)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="social-group-container">
                <div className="social-group-container-title">
                  <span>Social media</span>
                </div>

                <div className="social-group-wrapper">
                  <SocialGroup />
                </div>
              </div>

              <div className="menu-contact-section">
                <MenuContactSection />
              </div>
            </div>
          </div>

          <div className="navigation-menu-wrapper animate__animated animate__slideInDown">
            <div
              className={`${
                showMenuItem ? "item-wrapper-show" : "item-wrapper"
              }`}
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
        </>
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

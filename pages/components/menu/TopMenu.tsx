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

  const [activeMenu, setactiveMenu] = useState(null);

  const listenScrollEvent = () => {
    window.scrollY > 2000 ? setColor("#000000") : setColor("#ffffff");
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
    window.addEventListener("scroll", listenScrollEvent);
  });


  return (
    <div
      className="top-menu"
      style={{ background: showMenu ? "rgba(0, 0, 0, 0.9)" : "none" }}
    >
      <div className="second">
        <div className="content">
          <div className="logo-group">
            <Image
              src={foolistLogo}
              className="logo"
              alt="logo"
              width={55}
              height={55}
            />
          </div>

          <div className="left-menu">
            <div
              className="left-menu-text"
              style={{ color: isMenuClick ? "#ffffff" : color }}
            >
              Get in Touch
            </div>
            <CustomHamburgMenu
              isMenuClick={isMenuClick}
              handleMenuClick={handleMenuClick}
              handleCloseMenu={handleCloseMenu}
              spanBgColor={color}
            />
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
                  {menuItem.name}
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

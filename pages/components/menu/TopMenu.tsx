import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PrivateRoutes } from "../../../routers";

import foolistLogo from "../../../public/images/foolistLogo.png";
import menu from "../../../public/images/menu.png";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LANG, KEY_LANGUAGE } from "../../../utils/constants";
import Image from "next/image";

import { SearchOutlined } from "@ant-design/icons";

// import nextI18NextConfig from "../../../next-i18next.config.js";
import { Input } from "antd";
const Search = Input.Search;

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
  const [activeMenu, setactiveMenu] = useState(null);
  const router = useRouter();

  const { t } = useTranslation("common");

  useEffect(() => {
    if (!activeMenu) {
      let targetMenu = PrivateRoutes.find(
        (it: MenuObj) => it.path == router.pathname
      );

      setactiveMenu(targetMenu?.index || 0);
    }

    return () => {};
  }, []);

  const changeTo = router.locale === "en" ? "ko" : "en";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    localStorage.setItem(KEY_LANGUAGE, newLocale);
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="top-menu">
      <div className="second">
        <div className="content">
          <div className="logo-group">
            <Image
              src={foolistLogo}
              className="logo"
              alt="logo"
              width={40}
              height={40}
            />

            <div>Foolist Creative</div>
          </div>

          <div className="secont-middle-menu">
            {PrivateRoutes.map((menuItem, key) => {
              return (
                <div
                  key={key}
                  onClick={() => {
                    router.push(menuItem.path);
                    setactiveMenu(menuItem.index);
                  }}
                  className={`item ${
                    activeMenu === menuItem.index ? "active" : ""
                  }`}
                >
                  {menuItem.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="third">
        <div className="content">
          <div className="left-menu">
            <Image src={menu} className="menu" alt="menu" />
          </div>
          <div className="right-menu">
            <Input
              placeholder="Basic usage"
              className="search-box"
              suffix={<SearchOutlined />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ["common"])),
  },
});

export default TopMenu;

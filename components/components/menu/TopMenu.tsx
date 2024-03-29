import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PrivateRoutes } from '../../../routers';

import foolistLogo from '../../../public/static/foolistLogo.png';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LANG } from '../../../utils/constants';
import Image from 'next/image';

import CustomHamburgMenu from '../customHamburgMenu';
import SocialGroup from '../socialGroup';
import LanguageChange from '../languageChange';
import MenuContactSection from '../menuContactSection';
import clsx from 'clsx';
import Link from 'next/link';

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
  const { t } = useTranslation('common');

  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);
  const [menuScrolling, setMenuScrolling] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMenuItem, setShowMenuItem] = useState<boolean>(false);
  const [menuButtonBg, setMenuNButtonBg] = useState('none');

  const [activeMenu, setactiveMenu] = useState(null);

  const filterPrivateRoutes = PrivateRoutes.filter(
    (route) => route.path !== '/'
  );

  const scrollListener = () => {
    const scroll = window.scrollY;

    if (scroll > 105) {
      setMenuNButtonBg('#f6a5c1');
      setMenuScrolling(true);
    } else {
      setMenuScrolling(false);
      setMenuNButtonBg('none');
    }
  };

  const handleMenuClick = () => {
    setIsMenuClick(true);
    setShowMenu(true);

    setTimeout(() => {
      setShowMenuItem(true);
    }, 300);
  };

  const handleCloseMenu = () => {
    setShowMenuItem(false);

    setTimeout(() => {
      setShowMenu(false);
    }, 300);
    setIsMenuClick(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollListener);
  }, []);

  return (
    <>
      <header
        className={clsx(
          'top-menu before:content-[""] before:opacity-0 before:absolute before:inset-0 before:backdrop-blur-md',
          {
            'bg-black/70 border-b border-b-white/20 before:transition-all before:opacity-100 shadow-2xl':
              menuScrolling && !showMenu,
            'bg-black': showMenu,
          }
        )}
      >
        <div className='container second'>
          <div className='content'>
            <div className='logo-group' onClick={() => router.push('/')}>
              <Image src={foolistLogo} className='logo' alt='logo' priority />
            </div>
            <div className='left-menu'>
              <div
                className='cursor-pointer left-menu-responsive-button'
                style={{ background: 'transparent' }}
                onClick={handleMenuClick}
              >
                <CustomHamburgMenu
                  isMenuClick={isMenuClick}
                  handleMenuClick={handleMenuClick}
                  handleCloseMenu={handleCloseMenu}
                  spanBgColor='#ffffff'
                />
              </div>
              <div className='left-menu-responsive-grid'>
                {router.pathname !== '/' ? (
                  <div className='menu-grid-wrapper'>
                    {filterPrivateRoutes.map((menuItem, key) => {
                      return (
                        <Link
                          key={key}
                          href={t(`topmenu.${menuItem.path}`)}
                          className={`menu-grid-item font-main ${
                            router.pathname === menuItem.path
                              ? 'menu-grid-item-active'
                              : ''
                          }`}
                        >
                          <span>{t(`${menuItem.name}`)}</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <CustomHamburgMenu
                    isMenuClick={isMenuClick}
                    handleMenuClick={handleMenuClick}
                    handleCloseMenu={handleCloseMenu}
                    spanBgColor='#ffffff'
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className='absolute inset-0 z-[-1] blur-2xl backdrop-blur-xl bg-black/70'></div> */}
      </header>

      {showMenu ? (
        <>
          <div
            className={`responsive-navigation-menu-wrapper bg-black/80 backdrop-blur-2xl animate__animated animate__slideInRight `}
          >
            <div className='navigation-group-container'>
              {PrivateRoutes.map((menuItem, key) => {
                return (
                  <Link
                    href={t(`topmenu.${menuItem.path}`)}
                    key={key}
                    onClick={() => {
                      handleCloseMenu();
                    }}
                    className='item font-main group'
                  >
                    <span className='!text-base group-hover:underline'>
                      {t(`${menuItem.name}`)}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className='menu-contact-section'>
              <div className='social-group-container'>
                <div className='social-group-container-title'>
                  <span>Social media</span>
                </div>

                <div className='social-group-wrapper'>
                  <SocialGroup />
                </div>
              </div>

              <MenuContactSection />

              <div
                className='responsive-floated-language-change'
                style={{ marginTop: 20 }}
              >
                <LanguageChange />
              </div>
            </div>
          </div>

          <div className='navigation-menu-wrapper bg-black/80 backdrop-blur-xl animate__animated animate__slideInDown'>
            <div
              className={`${
                showMenuItem ? 'item-wrapper-show' : 'item-wrapper'
              }`}
            >
              {PrivateRoutes.map((menuItem, key) => {
                return (
                  <Link
                    href={t(`topmenu.${menuItem.path}`)}
                    key={key}
                    onClick={() => {
                      handleCloseMenu();
                    }}
                    className={`item ${
                      activeMenu === menuItem.index ? 'active' : ''
                    } ${
                      showMenuItem
                        ? 'animate__animated animate__slideInDown'
                        : 'animate__animated animate__animate__fadeOut'
                    }  `}
                  >
                    {t(`${menuItem.name}`)}
                  </Link>
                );
              })}
              <SocialGroup />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ['common'])),
  },
});

export default TopMenu;

import React, { useEffect, useState } from "react";
import vnFlag from "../../../public/images/vnFlag.png";
import usaFlag from "../../../public/static/usaFlag.png";
import Image from "next/image";
import { KEY_LANGUAGE } from "../../../utils/constants";
import { useRouter } from "next/router";

const classNamePrefix = "language-change";

const LanguageChange = () => {
  const router = useRouter();

  const [languageChange, setLanguageChange] = useState<boolean>(false);

  const changeTo = router.locale === "vn" ? "en" : "vn";

  const onToggleLanguageClick = (newLocale: string) => {
    setLanguageChange(!languageChange);

    localStorage.setItem(KEY_LANGUAGE, newLocale);
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  useEffect(() => {
    const localLanguage = localStorage.getItem(KEY_LANGUAGE);
    if (localLanguage !== "vn") setLanguageChange(true);
  }, []);

  return (
    <div
      className={classNamePrefix}
      onClick={() => onToggleLanguageClick(changeTo)}
      style={{
        background: languageChange ? "#ffffff" : "#000000",
        borderColor: languageChange ? "none" : "#ffffff",
      }}
    >
      <div
        className={`${classNamePrefix}__button ${
          languageChange ? "button-move-left" : "button-move-right"
        }`}
      >
        <Image
          className={`${classNamePrefix}__icon`}
          src={languageChange ? usaFlag : vnFlag}
          alt=""
        />
      </div>

      <span
        className={`${classNamePrefix}__title  ${
          languageChange ? "title-move-right" : "title-move-left"
        }`}
        style={{
          color: languageChange ? "#000000" : "#ffffff",
          // left: languageChange ? 47 : 15,
        }}
      >
        {languageChange ? "ENG" : "VNI"}
      </span>
    </div>
  );
};

export default LanguageChange;

import React, { useState } from "react";
import vnFlag from "../../../public/images/vnFlag.png";
import Image from "next/image";
import {
  DEFAULT_LANG,
  KEY_LANGUAGE,
  LANG_EN,
  LANG_VN,
} from "../../../utils/constants";
import { useRouter } from "next/router";

const classNamePrefix = "language-change";

const LanguageChange = () => {
  const router = useRouter();

  const [languageChange, setLanguageChange] = useState<boolean>(false);

  const handleLanguageChange = () => {
    const language = localStorage.getItem(KEY_LANGUAGE);
    setLanguageChange(!languageChange);

    if (language === LANG_VN) {
      localStorage.setItem(KEY_LANGUAGE, LANG_EN);
    }
    localStorage.setItem(KEY_LANGUAGE, DEFAULT_LANG);
  };

  const changeTo = router.locale === "vn" ? "en" : "vn";

  const onToggleLanguageClick = (newLocale: string) => {
    setLanguageChange(!languageChange);

    localStorage.setItem(KEY_LANGUAGE, newLocale);
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

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
        className={`${classNamePrefix}__button`}
        style={{
          right: languageChange ? 95 : 10,
        }}
      >
        <Image src={vnFlag} alt="" width={23} height={23} />
      </div>

      <span
        style={{
          color: languageChange ? "#000000" : "#ffffff",
        }}
      >
        {languageChange ? "ENG" : "VNI"}
      </span>
    </div>
  );
};

export default LanguageChange;

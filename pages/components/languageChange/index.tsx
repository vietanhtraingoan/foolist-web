import React, { useState } from "react";
import vnFlag from "../../../public/images/vnFlag.png";
import Image from "next/image";
import { KEY_LANGUAGE, LANG_EN } from "../../../utils/constants";
import { useRouter } from "next/router";

const classNamePrefix = "language-change";

const LanguageChange = () => {
  const router = useRouter();

  const [languageChange, setLanguageChange] = useState<boolean>(false);

  const handleLanguageChange = () => {
    setLanguageChange(!languageChange);
    localStorage.setItem(KEY_LANGUAGE, LANG_EN);
  };

  return (
    <div
      className={classNamePrefix}
      onClick={handleLanguageChange}
      style={{
        background: languageChange ? "#ffffff" : "#000000",
        borderColor: languageChange ? "#000000" : "#ffffff",
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

import Image from "next/image";
import React from "react";
import { ServicesMock } from "../../../mocks/servicesMock";
import { useTranslation } from "next-i18next";

const classNamePrefix = "tvc-view";

const TVCView = () => {
  const { t } = useTranslation();

  const { subImg, content } = ServicesMock[0];

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content-first`}>
          <Image
            style={{ borderRadius: 15 }}
            src={subImg[0].item.src}
            alt=""
            width={550}
            height={500}
          />

          <div
            className={`${classNamePrefix}__content-section-title`}
            style={{ margin: "32px 0" }}
          >
            {t(content.paragraphTitle1)}
          </div>

          <div className={`${classNamePrefix}__content-section-text`}>
            {t(content.first)}
          </div>

          <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.second)}
            </div>
        </div>

        <div className={`${classNamePrefix}__content-second`}>
          <div className={`${classNamePrefix}__content-second-item`}>
            <div
              className={`${classNamePrefix}__content-section-title`}
              style={{ marginBottom: 32 }}
            >
              {t(content.paragraphTitle2)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.third)}
            </div>

            <Image
              style={{ borderRadius: 15, margin: "20px 0" }}
              src={subImg[1].item.src}
              alt=""
              width={400}
              height={400}
            />

            <div
              className={`${classNamePrefix}__content-section-title`}
              style={{ margin: "32px 0" }}
            >
              {t(content.paragraphTitle3)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.fourth)}
            </div>
          </div>

          <div className={`${classNamePrefix}__content-second-item`}>
            <Image
              style={{ borderRadius: 15, margin: "20px 0" }}
              src={subImg[2].item.src}
              alt=""
              width={400}
              height={400}
            />

            <div
              className={`${classNamePrefix}__content-section-title`}
              style={{ margin: "32px 0" }}
            >
              {t(content.paragraphTitle4)}
            </div>

            <div className={`${classNamePrefix}__content-section-text`}>
              {t(content.fifth)}
            </div>

            <Image
              style={{ borderRadius: 15, margin: "20px 0" }}
              src={subImg[3].item.src}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <iframe
            src="https://drive.google.com/file/d/1vGTzb3bhbq74xBh2gKV0SxSb_De4PT-o/view?pli=1"
            title="W3Schools Free Online Web Tutorials"
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <div
          className={`${classNamePrefix}__content-section-text`}
          style={{ marginTop: 32 }}
        >
          {t(content.sixth)}
        </div>
      </div>
    </div>
  );
};

export default TVCView;

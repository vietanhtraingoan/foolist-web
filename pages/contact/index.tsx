import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/customDialog/dialogSlice";
import MiniFooter from "../components/miniFooter";
import CustomCheckbox from "../components/customCheckbox";

const classNamePrefix = "contact-page";

type Props = {};

const ContactPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [secondCheck, setSecondCheck] = useState<boolean>(false);

  const resetInput = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && phone && name && message) {
      const res = await fetch("./api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: name,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAIL_API_KEY}`,
        },
        method: "POST",
        mode: "no-cors",
      });

      console.log(res);

      const { error } = await res.json();
      if (res.status !== 200) {
        console.log(error);
        return;
      } else {
        resetInput();
        dispatch(
          openDialog({
            content: t("send-success"),
          })
        );
      }
    } else {
      dispatch(
        openDialog({
          content: t("field-required"),
        })
      );
    }
  };

  const onChangeCheckbox1 = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeCheckbox2 = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={classNamePrefix}>
      <section className={`${classNamePrefix}__introduction-wrapper`}>
        <div className={`${classNamePrefix}__introduction-wrapper-text`}>
          {t("connect-with")} <span> FOOLIST</span>
        </div>
        <div>{t("create-story")}</div>
      </section>

      <div className={`${classNamePrefix}__content-wrapper`}>
        <section className={`${classNamePrefix}__form-wrapper`}>
          <form onSubmit={handleSubmit}>
            <div className={`${classNamePrefix}__form-title`}>
              {t("user-info")}
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("your-name")}
              />
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("your-email")}
              />
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <input
                value={phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("your-phone")}
              />
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("your-message")}
              />
            </div>

            <div className={`${classNamePrefix}__form-bottom`}>
              <div className={`${classNamePrefix}__service-wrapper`}>
                <div className={`${classNamePrefix}__service-item`}>
                  <CustomCheckbox checked={firstCheck} onChange={e => setFirstCheck(e.target.value)}/>
                  <div onClick={() => setFirstCheck(!firstCheck)}>
                    Website design & Development
                  </div>
                </div>

                <div className={`${classNamePrefix}__service-item`}>
                  <CustomCheckbox checked={secondCheck} onChange={e => setSecondCheck(e.target.value)}/>
                  <div onClick={() => setSecondCheck(!secondCheck)}>Media</div>
                </div>
              </div>

              <button
                className={`${classNamePrefix}__confirm-button`}
                type="submit"
              >
                <span>{t("submit-button")}</span>
              </button>
            </div>
          </form>
        </section>
      </div>

      <section className={`${classNamePrefix}__map-wrapper`}>
        <div className={`${classNamePrefix}__map`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2851052268124!2d106.69073647469737!3d10.789462089360077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3352c0b0f7%3A0xc02c9f5547aad84c!2zNjQgxJAuIFbDtSBUaOG7iyBTw6F1LCBQaMaw4budbmcgVMOibiDEkOG7i25oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1685602569429!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className={`map-layer`}></div>
        </div>

        <div className={`${classNamePrefix}__map-title`}>
          <div>64 VO THI SAU</div>
          <div>TAN DINH WARD</div>
          <div>DISTRICT 1 - TP.HCM CITY</div>
        </div>
      </section>

      <section className={`${classNamePrefix}__footer`}>
        <MiniFooter />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ContactPage;

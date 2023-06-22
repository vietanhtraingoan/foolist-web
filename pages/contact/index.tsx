import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { openDialog } from "../../store/customDialog/dialogSlice";
import MiniFooter from "../components/miniFooter";
import CustomCheckbox from "../components/customCheckbox";
import { InfoCircleOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-number-input";
import vn from "react-phone-number-input/locale/vi.json";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const classNamePrefix = "contact-page";

type Props = {};

const ContactPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const form = useRef();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState("");

  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [secondCheck, setSecondCheck] = useState<boolean>(false);
  const [thirdCheck, setThirdCheck] = useState<boolean>(false);
  const [fourthCheck, setFourthCheck] = useState<boolean>(false);
  const [fifthCheck, setFifthCheck] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showNameError, setShowNameError] = useState<boolean>(false);
  const [showEmailError, setShowEmailError] = useState<boolean>(false);

  const [captchaKey, setCaptchaKey] = useState<string>();

  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const resetInput = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const templateParams = {
    to_name: "Foolist",
    from_name: name,
    message: `
      You Got a message from ${name}, whose email is ${email}, phone number is ${phone}. ${
      message ? message : "They may want to know more about the service"
    }. ${firstCheck ? `they want to know more about TVC and` : ""} ${
      secondCheck ? `they want to know more about Product Design and` : ""
    } ${thirdCheck ? `they want to know more about Website and` : ""} ${
      fourthCheck ? `they want to know more about Mobile Phone and` : ""
    } ${fifthCheck ? `they want to know more about ERP and` : ""}  
    `,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && phone) {
      emailjs
        .send(
          "service_n7g124k",
          "template_0a1ax4n",
          templateParams,
          "Y3xJNc3cSlGbnq0zl"
        )
        .then(
          function (response) {
            resetInput();
            dispatch(
              openDialog({
                content: t("send-success"),
              })
            );
          },
          function (error) {
            dispatch(
              openDialog({
                content:
                  "Oops somethig was wrong with the connection, please come back later or contact directly to",
              })
            );
          }
        );
    } else {
      dispatch(
        openDialog({
          content: t("field-required"),
        })
      );
    }
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY)
      setCaptchaKey(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY);
  }, []);

  return (
    <div className={classNamePrefix}>
      <section className={`${classNamePrefix}__introduction-wrapper animate__animated animate__slideInUp`}>
        <div className={`${classNamePrefix}__introduction-wrapper-text`}>
          {t("connect-with")} <span> FOOLIST</span>
        </div>
        <div>{t("create-story")}</div>
      </section>

      <form
        onSubmit={handleSubmit}
        className={`${classNamePrefix}__form-wrapper animate__animated animate__slideInUp`}
        ref={form}
      >
        <div className={`${classNamePrefix}__form-title`}>{t("user-info")}</div>

        <div className={`${classNamePrefix}__form-item`}>
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setShowNameError(false);
              setName(e.target.value);
            }}
            placeholder={t("your-name")}
            style={{
              borderColor: errorMessage !== "" && !name ? "red" : "1px solid #d9d9d933",
            }}
            onBlur={(e) => setShowNameError(true)}
          />

          {errorMessage !== "" && !name ? (
            <div className={`${classNamePrefix}__form-error`}>
              <InfoCircleOutlined
                className={`${classNamePrefix}__form-error-icon`}
                rev="true"
              />
              <span>{errorMessage}</span>
            </div>
          ) : (
            ""
          )}

          {name && name.length < 3 && showNameError ? (
            <div className={`${classNamePrefix}__form-error`}>
              <InfoCircleOutlined
                className={`${classNamePrefix}__form-error-icon`}
                rev="true"
              />
              <span>{t("name-format")}</span>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={`${classNamePrefix}__form-item`}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setShowEmailError(false);
              setEmail(e.target.value);
            }}
            placeholder={t("your-email")}
            style={{
              borderColor: errorMessage !== "" && !email ? "red" : "1px solid #d9d9d933",
            }}
            onBlur={(e) => setShowEmailError(true)}
          />
          {errorMessage !== "" && !email ? (
            <div className={`${classNamePrefix}__form-error`}>
              <InfoCircleOutlined
                className={`${classNamePrefix}__form-error-icon`}
                rev="true"
              />
              <span>{errorMessage}</span>
            </div>
          ) : (
            ""
          )}

          {email && !isValidEmail.test(email) && showEmailError ? (
            <div className={`${classNamePrefix}__form-error`}>
              <InfoCircleOutlined
                className={`${classNamePrefix}__form-error-icon`}
                rev="true"
              />
              <span>{t("email-format")}</span>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={`${classNamePrefix}__form-item-phone`}>
          <PhoneInput
            defaultCountry="VN"
            placeholder={t("your-phone")}
            international
            labels={vn}
            value={phone}
            onChange={setPhone}
            limitMaxLength
          />

          {errorMessage !== "" && !phone ? (
            <div className={`${classNamePrefix}__form-error`}>
              <InfoCircleOutlined
                className={`${classNamePrefix}__form-error-icon`}
                rev="true"
              />
              <span>{errorMessage}</span>
            </div>
          ) : (
            ""
          )}
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
              <CustomCheckbox
                checked={firstCheck}
                onChange={(e) => setFirstCheck(e.target.value)}
                onClick={() => setFirstCheck(!firstCheck)}
              />
              <div onClick={() => setFirstCheck(!firstCheck)}>
                {t("service.tvc")}
              </div>
            </div>

            <div className={`${classNamePrefix}__service-item`}>
              <CustomCheckbox
                checked={secondCheck}
                onChange={(e) => setSecondCheck(e.target.value)}
                onClick={() => setSecondCheck(!secondCheck)}
              />
              <div onClick={() => setSecondCheck(!secondCheck)}>
                {t("service.product-design")}
              </div>
            </div>

            <div className={`${classNamePrefix}__service-item`}>
              <CustomCheckbox
                checked={thirdCheck}
                onChange={(e) => setThirdCheck(e.target.value)}
                onClick={() => setThirdCheck(!thirdCheck)}
              />
              <div onClick={() => setThirdCheck(!thirdCheck)}>
                {t("service.website-development")}
              </div>
            </div>

            <div className={`${classNamePrefix}__service-item`}>
              <CustomCheckbox
                checked={fourthCheck}
                onChange={(e) => setFourthCheck(e.target.value)}
                onClick={() => setFourthCheck(!fourthCheck)}
              />
              <div onClick={() => setFourthCheck(!fourthCheck)}>
                {t("service.mobile-app-development")}
              </div>
            </div>

            <div className={`${classNamePrefix}__service-item`}>
              <CustomCheckbox
                checked={fifthCheck}
                onChange={(e) => setFifthCheck(e.target.value)}
                onClick={() => setFifthCheck(!fifthCheck)}
              />
              <div onClick={() => setFifthCheck(!fifthCheck)}>
                {t("service.erp")}
              </div>
            </div>
          </div>

          <div>
            <div>
              <ReCAPTCHA
                size="normal"
                sitekey="6Lf-NZImAAAAAOI40zC4yrGbjAcieRkDPf_IkcO7"
              />
            </div>

            <button
              className={`${classNamePrefix}__confirm-button`}
              type="submit"
            >
              <span>{t("submit-button")}</span>
            </button>
          </div>
        </div>
      </form>

      <section className={`${classNamePrefix}__map-wrapper`}>
        <div className={`${classNamePrefix}__map`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2851052268124!2d106.69073647469737!3d10.789462089360077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d23231570cd5969%3A0xf9fd7b52c321aa11!2sFoolist%20Creative!5e0!3m2!1sen!2s!4v1686302783330!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className={`map-layer`}></div>
        </div>

        <div className={`${classNamePrefix}__map-title`}>
          <div>{t("info.floor3-vietphone-building")}</div>
          <div>{t("info.64vothisau-tandinhward-district1")}</div>
          <div>{t("info.hochiminhcity-vietnam")}</div>
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

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { openDialog } from '../../store/customDialog/dialogSlice';
import MiniFooter from '../../components/components/miniFooter';
import CustomCheckbox from '../../components/components/customCheckbox';
import { InfoCircleOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-number-input';
import vn from 'react-phone-number-input/locale/vi.json';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import Head from 'next/head';
import Section from '../../components/common/section';
import PinkGradientTypography from '../../components/common/typography/pink-gradient-typography';
import GrayGradientTypography from '../../components/common/typography/gray-gradient-typography';
import Divider from '../../components/common/divider';
import BorderGradient from '../../components/common/border-gradient';
import clsx from 'clsx';

const classNamePrefix = 'contact-page';

type Props = {};

const ContactPage = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const form = useRef();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState('');

  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [secondCheck, setSecondCheck] = useState<boolean>(false);
  const [thirdCheck, setThirdCheck] = useState<boolean>(false);
  const [fourthCheck, setFourthCheck] = useState<boolean>(false);
  const [fifthCheck, setFifthCheck] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showNameError, setShowNameError] = useState<boolean>(false);
  const [showEmailError, setShowEmailError] = useState<boolean>(false);

  const [captchaKey, setCaptchaKey] = useState<string>();

  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const resetInput = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const templateParams = {
    to_name: 'Foolist',
    from_name: name,
    message: `
      You Got a message from ${name}, whose email is ${email} , phone number is ${phone}. ${
      message ? message : 'They may want to know more about the service'
    }. ${firstCheck ? `TVC and` : ''} ${
      secondCheck ? `Product Design and` : ''
    } ${thirdCheck ? `Website and` : ''} ${
      fourthCheck ? `Mobile Phone and` : ''
    } ${fifthCheck ? `ERP and` : ''}  
    `,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && phone) {
      emailjs
        .send(
          'service_n7g124k',
          'template_0a1ax4n',
          templateParams,
          'Y3xJNc3cSlGbnq0zl'
        )
        .then(
          function (response) {
            resetInput();
            dispatch(
              openDialog({
                content: t('send-success'),
              })
            );
          },
          function (error) {
            dispatch(
              openDialog({
                content:
                  'Oops somethig was wrong with the connection, please come back later or contact directly to',
              })
            );
          }
        );
    } else {
      dispatch(
        openDialog({
          content: t('field-required'),
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
      <Head>
        <title>{t('Contact Us')}</title>
      </Head>

      <Section>
        <Section.Title
          className={`!text-3xl md:!text-4xl !mb-0 animate__animated text-center animate__slideInUp`}
        >
          <GrayGradientTypography className='font-semibold '>
            {t('connect-with')}{' '}
            <PinkGradientTypography className='font-bold'>
              {' '}
              FOOLIST
            </PinkGradientTypography>
          </GrayGradientTypography>
          <GrayGradientTypography className='block !leading-[1.5] w-full mt-4 text-4xl font-bold md:text-5xl '>
            {t('create-story')}
          </GrayGradientTypography>
        </Section.Title>
        <Divider
          direction='center'
          className='mt-8 mb-8 opacity-40 md:mb-14 lg:mb-20'
        />
        <BorderGradient
          commonClassName='rounded-2xl'
          borderClassName='bg-gradient-to-br transition-all to-neutral-900 from-neutral-600  animate__animated text-center animate__fadeIn'
          bgClassName='py-8 px-4 md:py-20 md:px-10 bg-neutral-950'
          type='contain'
        >
          <form
            onSubmit={handleSubmit}
            className={` max-w-2xl mx-auto `}
            ref={form}
          >
            <GrayGradientTypography className='block w-full mx-auto mb-10 text-xl font-semibold text-center md:text-3xl font-heading'>
              {t('user-info')}
            </GrayGradientTypography>

            <div className={`${classNamePrefix}__form-item`}>
              <BorderGradient
                className='mb-4 '
                borderClassName='bg-gradient-to-br  hover:bg-gradient-to-br transition-all  hover:from-gray-600 hover:to-pink-500 to-neutral-900 from-neutral-600'
                commonClassName='rounded-lg group transition-all'
                type='contain'
              >
                <input
                  className='w-full max-lg:!px-4 max-md:!my-1'
                  name='name'
                  value={name}
                  onChange={(e) => {
                    setShowNameError(false);
                    setName(e.target.value);
                  }}
                  placeholder={t('your-name')}
                  style={{
                    borderColor:
                      errorMessage !== '' && !name ? 'red' : '#ffffff',
                  }}
                  onBlur={(e) => setShowNameError(true)}
                />
              </BorderGradient>

              {errorMessage !== '' && !name ? (
                <div className={`${classNamePrefix}__form-error`}>
                  <InfoCircleOutlined
                    className={`${classNamePrefix}__form-error-icon`}
                    rev='true'
                  />
                  <span>{errorMessage}</span>
                </div>
              ) : (
                ''
              )}

              {name && name.length < 3 && showNameError ? (
                <div className={`${classNamePrefix}__form-error`}>
                  <InfoCircleOutlined
                    className={`${classNamePrefix}__form-error-icon`}
                    rev='true'
                  />
                  <span>{t('name-format')}</span>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <BorderGradient
                type='contain'
                borderClassName='bg-gradient-to-br hover:bg-gradient-to-br transition-all  hover:from-gray-600 hover:to-pink-500 to-neutral-900 from-neutral-600'
                commonClassName='rounded-lg group transition-all'
                className='mb-4'
              >
                <input
                  className='w-full max-lg:!px-4 max-md:!my-1'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => {
                    setShowEmailError(false);
                    setEmail(e.target.value);
                  }}
                  placeholder={t('your-email')}
                  style={{
                    borderColor:
                      errorMessage !== '' && !email ? 'red' : '#ffffff',
                  }}
                  onBlur={(e) => setShowEmailError(true)}
                />
              </BorderGradient>
              {errorMessage !== '' && !email ? (
                <div className={`${classNamePrefix}__form-error`}>
                  <InfoCircleOutlined
                    className={`${classNamePrefix}__form-error-icon`}
                    rev='true'
                  />
                  <span>{errorMessage}</span>
                </div>
              ) : (
                ''
              )}

              {email && !isValidEmail.test(email) && showEmailError ? (
                <div className={`${classNamePrefix}__form-error`}>
                  <InfoCircleOutlined
                    className={`${classNamePrefix}__form-error-icon`}
                    rev='true'
                  />
                  <span>{t('email-format')}</span>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className={`${classNamePrefix}__form-item-phone`}>
              <BorderGradient
                type='contain'
                borderClassName='bg-gradient-to-br hover:bg-gradient-to-br transition-all  hover:from-gray-600 hover:to-pink-500 to-neutral-900 from-neutral-600'
                commonClassName='rounded-lg group transition-all'
                className='mb-4'
              >
                <PhoneInput
                  className='w-full max-lg:!px-4 max-md:!my-1'
                  defaultCountry='VN'
                  placeholder={t('your-phone')}
                  international
                  labels={vn}
                  value={phone}
                  onChange={setPhone}
                  limitMaxLength
                />
              </BorderGradient>

              {errorMessage !== '' && !phone ? (
                <div className={`${classNamePrefix}__form-error`}>
                  <InfoCircleOutlined
                    className={`${classNamePrefix}__form-error-icon`}
                    rev='true'
                  />
                  <span>{errorMessage}</span>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <BorderGradient
                type='contain'
                borderClassName='bg-gradient-to-br hover:bg-gradient-to-br transition-all  hover:from-gray-600 hover:to-pink-500 to-neutral-900 from-neutral-600'
                commonClassName='rounded-lg group transition-all'
                className='mb-4'
              >
                <textarea
                  className='w-full max-lg:!px-4 max-md:!my-1'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('your-message')}
                />
              </BorderGradient>
            </div>

            <div className={`${classNamePrefix}__form-bottom`}>
              <div className={`${classNamePrefix}__service-wrapper`}>
                <div className={`${classNamePrefix}__service-item`}>
                  <CustomCheckbox
                    checked={firstCheck}
                    onChange={(e) => setFirstCheck(e.target.value)}
                    onClick={() => setFirstCheck(!firstCheck)}
                  />
                  <GrayGradientTypography
                    className='text-xl font-semibold'
                    onClick={() => setFirstCheck(!firstCheck)}
                  >
                    {t('service.first')}
                  </GrayGradientTypography>
                </div>

                <div className={`${classNamePrefix}__service-item`}>
                  <CustomCheckbox
                    checked={secondCheck}
                    onChange={(e) => setSecondCheck(e.target.value)}
                    onClick={() => setSecondCheck(!secondCheck)}
                  />
                  <GrayGradientTypography
                    className='text-xl font-semibold'
                    onClick={() => setSecondCheck(!secondCheck)}
                  >
                    {t('service.second')}
                  </GrayGradientTypography>
                </div>

                <div className={`${classNamePrefix}__service-item`}>
                  <CustomCheckbox
                    checked={thirdCheck}
                    onChange={(e) => setThirdCheck(e.target.value)}
                    onClick={() => setThirdCheck(!thirdCheck)}
                  />
                  <GrayGradientTypography
                    className='text-xl font-semibold'
                    onClick={() => setThirdCheck(!thirdCheck)}
                  >
                    {t('service.third')}
                  </GrayGradientTypography>
                </div>
              </div>

              <div>
                <div>
                  <ReCAPTCHA
                    size='normal'
                    sitekey='6Lf-NZImAAAAAOI40zC4yrGbjAcieRkDPf_IkcO7'
                  />
                </div>
              </div>
            </div>
            <button
              className={clsx(
                `bg-pink-800 hover:bg-pink-700 active:scale-95 text-white rounded-xl mt-4 py-4 px-6 w-full transition-all`
              )}
              type='submit'
            >
              <span>{t('submit-button')}</span>
            </button>
          </form>
        </BorderGradient>
      </Section>
      <div className={`${classNamePrefix}__map-wrapper container`}>
        <div className={`${classNamePrefix}__map`}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2851052268124!2d106.69073647469737!3d10.789462089360077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d23231570cd5969%3A0xf9fd7b52c321aa11!2sFoolist%20Creative!5e0!3m2!1sen!2s!4v1686302783330!5m2!1sen!2s'
            width='100%'
            height='100%'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>

          <div className={`map-layer`}></div>
        </div>

        <GrayGradientTypography
          className={`${classNamePrefix}__map-title font-semibold text-xl space-y-4`}
        >
          <div>{t('info.floor3-vietphone-building')}</div>
          <div>{t('info.64vothisau-tandinhward-district1')}</div>
          <div>{t('info.hochiminhcity-vietnam')}</div>
        </GrayGradientTypography>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ContactPage;

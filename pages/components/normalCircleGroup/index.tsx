import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from '../../../public/static/foolistLogo.png';
import Image from 'next/image';
import { GetStaticProps } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LANG } from '../../../utils/constants';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';
import { BaseComponent } from '../../../utils/types/clientTypes';

type IContentCircleType = '1' | '2' | '3';

type Props = {
  // contentType?: IContentCircleType;
};
interface INormalCircleProps extends BaseComponent {
  contentType?: IContentCircleType;
}

const classNamePrefix = 'normal-circle-group';

const NormalCircleGroup: React.FC<INormalCircleProps> = (props) => {
  const { t } = useTranslation();
  const { contentType } = props;

  return (
    <div className={clsx(classNamePrefix, props?.className)}>
      <AnimationOnScroll animateIn='animate__slideInDown' animateOnce={true}>
        <div className={`${classNamePrefix}__item-wrapper-1`}>
          <div className={`${classNamePrefix}__item circle-1`}></div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__slideInLeft' animateOnce={true}>
        <div className={`${classNamePrefix}__item-wrapper-2`}>
          <div className={`${classNamePrefix}__item circle-2`}></div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__slideInRight' animateOnce={true}>
        <div className={`${classNamePrefix}__item-wrapper-3`}>
          <div className={`${classNamePrefix}__item circle-3`}></div>
        </div>
      </AnimationOnScroll>

      {contentType === '3' && (
        <>
          <AnimationOnScroll
            animateIn='animate__zoomIn'
            animateOnce={true}
            delay={2}
          >
            <div className={`${classNamePrefix}__text-wrapper`}>
              <div className={`${classNamePrefix}__text`}>
                <div className={`${classNamePrefix}__text-item text-5`}>
                  <span>{t('circle.eyesight')}</span>
                </div>
                <div className={`${classNamePrefix}__text-item text-6`}>
                  <span>{t('circle.unique')}</span>
                </div>
                <div className={`${classNamePrefix}__text-item text-7`}>
                  <span>{t('circle.vision')}</span>
                </div>
              </div>
            </div>
            <div className={`${classNamePrefix}__text-wrapper`}>
              <div className={`${classNamePrefix}__text`}>
                <div className={`${classNamePrefix}__text-item text-1`}>
                  <span>{t('circle.creative')}</span>
                </div>
                <div className={`${classNamePrefix}__text-item text-2`}>
                  <Image
                    className={`${classNamePrefix}__icon`}
                    src={logo}
                    alt=''
                  />
                </div>
                <div className={`${classNamePrefix}__text-item text-3`}>
                  <span>{t('circle.mindset')}</span>
                </div>
                <div className={`${classNamePrefix}__text-item text-4`}>
                  <span>{t('circle.art')}</span>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </>
      )}

      {contentType === '2' && (
        <AnimationOnScroll
          animateIn='animate__zoomIn'
          animateOnce={true}
          delay={2}
        >
          <div className={`${classNamePrefix}__text-wrapper`}>
            <div className={`${classNamePrefix}__text`}>
              <div className={`${classNamePrefix}__text-item text-5`}>
                <span>{t('circle.eyesight')}</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-2`}>
                <Image
                  src={logo}
                  alt=''
                  className={`${classNamePrefix}__icon`}
                />
              </div>
              <div className={`${classNamePrefix}__text-item text-6`}>
                <span>{t('circle.unique')}</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-7`}>
                <span>{t('circle.vision')}</span>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      )}

      {contentType === '1' && (
        <AnimationOnScroll
          animateIn='animate__zoomIn'
          animateOnce={true}
          delay={2}
        >
          <div className={`${classNamePrefix}__text-wrapper`}>
            <div className={`${classNamePrefix}__text`}>
              <div className={`${classNamePrefix}__text-item text-1`}>
                <span>{t('circle.creative')}</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-2`}>
                <Image
                  src={logo}
                  alt=''
                  className={`${classNamePrefix}__icon`}
                />
              </div>
              <div className={`${classNamePrefix}__text-item text-3`}>
                <span>{t('circle.mindset')}</span>
              </div>
              <div className={`${classNamePrefix}__text-item text-4`}>
                <span>{t('circle.art')}</span>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LANG, ['common'])),
  },
});

export default NormalCircleGroup;

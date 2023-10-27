import React from 'react';
import { getUrlParams } from '../../utils/commonFunctions';
import CustomNavigationButton from '../../components/components/customNavigationButton';
import MiniFooter from '../../components/components/miniFooter';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WordsMock } from '../../mocks/wordsMock';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../store/selector/rootSelector';

type Props = {};

const classNamePrefix = 'word-detail';

const WordDetail = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const id = getUrlParams('id');

  const language = useSelector(getLanguage);

  console.log(language);

  const selectedWord = WordsMock.find((item) => item.id === id);

  const relateWordList =
    selectedWord &&
    WordsMock.filter(
      (item) => item.label.charAt(0) === selectedWord.label.charAt(0)
    );

  return (
    <>
      <div className={classNamePrefix}>
        {selectedWord ? (
          <>
            <div className={`${classNamePrefix}__top-container`}>
              <div className={`${classNamePrefix}__top-title`}>
                {selectedWord.label}
              </div>

              <div className={`${classNamePrefix}__top-tab`}>
                {relateWordList &&
                  relateWordList.map((r) => (
                    <div className={`${classNamePrefix}__top-tab-item`}>
                      <span>{r.label}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className={`${classNamePrefix}__brief-description`}>
              <div>{selectedWord.brief}</div>
            </div>

            <div className={`${classNamePrefix}__content`}>
              <span>
                {selectedWord.first_title ? selectedWord.first_title : ''}
              </span>
              <div>
                {selectedWord.first_content ? selectedWord.first_content : ''}
              </div>
              <span>
                {selectedWord.second_title ? selectedWord.second_title : ''}
              </span>
              <div>
                {selectedWord.second_content ? selectedWord.second_content : ''}
              </div>
              <span>
                {selectedWord.third_title ? selectedWord.third_title : ''}
              </span>
              <div>
                {selectedWord.third_content ? selectedWord.third_content : ''}
              </div>
            </div>

            <div className={`${classNamePrefix}__navigation-group`}>
              <div className={`${classNamePrefix}__navigation-button`}>
                <CustomNavigationButton size='small' type='backward' />
                <CustomNavigationButton size='small' />
              </div>
            </div>
          </>
        ) : (
          <div className={`${classNamePrefix}__no-data`}>
            <span>Updating...</span>
          </div>
        )}
      </div>
      <MiniFooter />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default WordDetail;

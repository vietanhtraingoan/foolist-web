import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React, { useEffect, useRef, useState } from "react";
import CustomNavigationButton from "../components/customNavigationButton";
import MiniFooter from "../components/miniFooter";
import { useRouter } from "next/router";
import { WordsMock } from "../../mocks/wordsMock";

const classNamePrefix = "words-page";

type Props = {};

const WordsPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const container = useRef(null);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [collapse, setCollapse] = useState<boolean>(false);
  const [itemClickId, setItemClickId] = useState<number>(null);

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((c, index) => ({ id: index + 1, label: c.toUpperCase() }));

  const renderFilterWordArray = (character: string): Array<any> => {
    const filterArray = WordsMock.filter(
      (item) => item.label.charAt(0) === character
    );

    return filterArray;
  };

  const handleItemClick = (id: number) => {
    setCollapse(!collapse);

    setItemClickId(id);
  };

  const handleClickOutside = (event) => {
    if (container.current && container.current.contains(event.target)) {
      setCollapse(false);
    }
  };

  const handleSearchWord = () => {
    const searchItemId = WordsMock.find((item) => item.label.toLowerCase() === searchTerm.toLowerCase())

    if(searchItemId) {
      router.push(`/wordDetail?id=${searchItemId.id}`)
    } else {
      console.log("word not found")
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchWord()
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={classNamePrefix} ref={container}>
      <div className={`${classNamePrefix}__top-container`}>
        <div className={`${classNamePrefix}__top-title`}>
          <span>Words</span>
        </div>

        <div className={`${classNamePrefix}__search-container`} onKeyDown={handleKeyDown}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <SearchOutlined
            onClick={handleSearchWord}
            className={`${classNamePrefix}__search-icon`}
            rev="true"
          />
        </div>
      </div>
      <div className={`${classNamePrefix}__content-wrapper`}>
        {alphabet
          ? alphabet.map((item) => (
              <div className={`${classNamePrefix}__item-wrapper`}>
                <div className={`${classNamePrefix}__item`} key={item.id}>
                  <div
                    className={`${classNamePrefix}__content`}
                    style={{
                      background:
                        itemClickId === item.id
                          ? "#F8A5C2"
                          : "rgba(255, 255, 255, 0.2)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(item.id);
                    }}
                  >
                    <div>{item.label}</div>
                  </div>
                </div>

                <div
                  className={`${classNamePrefix}__collapse`}
                  style={{
                    display:
                      collapse && itemClickId === item.id ? "block" : "none",
                  }}
                >
                  {renderFilterWordArray(item.label) &&
                  renderFilterWordArray(item.label).length > 0 ? (
                    renderFilterWordArray(item.label).map((c) => (
                      <div
                        className={`${classNamePrefix}__collapse-item`}
                        onClick={() => router.push(`/wordDetail?id=${c.id}`)}
                      >
                        <span>{c.label}</span>
                      </div>
                    ))
                  ) : (
                    <div className={`${classNamePrefix}__no-data`}>
                      <span> Updating.....</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          : ""}
      </div>

      <Modal
        title=""
        open={openModal}
        closable={false}
        onCancel={() => setOpenModal(false)}
        footer={null}
        width={800}
        centered={true}
        zIndex={2000}
        className={`${classNamePrefix}__modal`}
        closeIcon={<CloseOutlined rev={true} />}
      >
        <div className={`${classNamePrefix}__modal-content`}>
          <div className={`${classNamePrefix}__modal-content-title`}>
            <div className={`${classNamePrefix}__modal-content-title-text`}>
              <span>B</span>
            </div>
          </div>

          <div className={`${classNamePrefix}__modal-content-body`}>
            <div className={`${classNamePrefix}__word-content`}>
              <div className={`${classNamePrefix}__word-title`}>BRAN-DING</div>

              <div className={`${classNamePrefix}__word-body`}>
                Chúng tôi áp dụng tư duy sáng tạo vào mọi dự án mà chúng tôi làm
                việc, không quan trọng lớn hay nhỏ. Chúng tôi luôn cố gắng tìm
                ra những giải pháp độc đáo và hiệu quả phù hợp với nhu cầu và
                mong đợi của khách hàng.Chúng tôi cũng luôn tiếp thu ý kiến và
                hợp tác từ khách hàng và đối tác của mình, vì chúng tôi tin rằng
                sáng tạo được nuôi dưỡng bởi sự đa dạng và trao đổi ý tưởng.
              </div>
            </div>
          </div>

          <div
            className={`${classNamePrefix}__modal-close`}
            onClick={() => setOpenModal(false)}
          >
            <CloseOutlined
              rev={true}
              className={`${classNamePrefix}__modal-close-icon`}
            />
          </div>

          <div className={`${classNamePrefix}__modal-navigation-button`}>
            <CustomNavigationButton size="small" />
            <CustomNavigationButton size="small" />
          </div>
        </div>
      </Modal>

      <MiniFooter />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default WordsPage;

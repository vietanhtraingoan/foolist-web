import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import React, { useState } from "react";
import CustomNavigationButton from "../components/customNavigationButton";

const classNamePrefix = "words-page";

type Props = {};

const WordsPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const items = Array.from(Array(40), () => {
    let i = 0;

    return {
      id: i++,
      title: `A-${i}`,
      subtitle: "Words",
    };
  });

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content-wrapper`}>
        {items
          ? items.map((item) => (
              <div
                className={`${classNamePrefix}__item`}
                key={item.id}
                onClick={() => setOpenModal(true)}
              >
                <div className={`${classNamePrefix}__content`}>
                  <div>{item.title}</div>
                  <span>{item.subtitle}</span>
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
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default WordsPage;

import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getActionCancel,
  getActionConfirm,
  getDialogCloseText,
  getDialogConfirmText,
  getDialogContent,
  getDialogStatus,
  getDialogTitle,
  getDialogType,
  getActionAfterClose,
} from "../../../store/selector/rootSelector";
import { closeDialog } from "../../../store/customDialog/dialogSlice";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
  // Add custom props here
};

const CustomDialog = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const type = useSelector(getDialogType);
  const isOpen = useSelector(getDialogStatus);
  const dialogContent = useSelector(getDialogContent);
  const dialogTitle = useSelector(getDialogTitle);
  const dialogConfirmText = useSelector(getDialogConfirmText);
  const dialogCloseText = useSelector(getDialogCloseText);
  const dialogActionConfirm = useSelector(getActionConfirm);
  const dialogActionCancel = useSelector(getActionCancel);
  const dialogActionAfterClose = useSelector(getActionAfterClose);
  const dispatch = useDispatch<any>();
  const handleClose = () => {
    dispatch(closeDialog());
  };

  const handleConfirm = () => {
    dialogActionConfirm();
    dispatch(closeDialog());
  };

  const handleCancel = () => {
    dialogActionCancel();
    dispatch(closeDialog());
  };
  const handleAfterClose = () => {
    dialogActionAfterClose();
  };
  return (
    <Modal
      title=""
      open={isOpen}
      closable={false}
      onCancel={handleClose}
      afterClose={handleAfterClose}
      okText="Confirm"
      cancelText="Cancel"
      footer={null}
      centered={true}
      zIndex={2000}
      className="custom-dialog"
    >
      {type === "info" ? (
        <div className="dialog-info">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: dialogContent }}
          ></div>

          {dialogConfirmText !== "none" && (
            <div className="footer" onClick={handleConfirm}>
              {dialogConfirmText}
            </div>
          )}
        </div>
      ) : (
        <div className="dialog-confirm">
          <div className="title-wrapper">
            <div className="title">{dialogTitle}</div>
            <div className="content">{dialogContent}</div>
          </div>

          <div className="btn">
            <Button className="bt-cancel" onClick={handleCancel}>
              {dialogCloseText}
            </Button>
            <Button className="bt-confirm" onClick={handleConfirm}>
              {dialogConfirmText}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default CustomDialog;

export const getUserLogin = (state: any) => state.auth.isUserLogin;
export const getAccessToken = (state: any) => state.auth.accessToken;

// project
export const getProjectId = (state: any) => state.project.projectId;

// custom đialog
export const getDialogContent = (state: any) => state.dialog.content;
export const getDialogTitle = (state: any) => state.dialog.title;
export const getDialogStatus = (state: any) => state.dialog.isOpen;
export const getDialogMaskClosable = (state: any) => state.dialog.maskClosable;
export const getDialogConfirmText = (state: any) => state.dialog.confirmText;
export const getDialogCloseText = (state: any) => state.dialog.closeText;
export const getActionConfirm = (state: any) => state.dialog.actionConfirm;
export const getActionCancel = (state: any) => state.dialog.actionCancel;
export const getActionAfterClose = (state: any) =>
  state.dialog.actionAfterClose;
export const getDialogType = (state: any) => state.dialog.type;

// language
export const getLanguage = (state: any) => state.language.language;

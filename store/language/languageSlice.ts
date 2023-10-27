import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILanguage } from "../../utils/types/languageTypes";

const initialState: ILanguage = {
  language: ""
};

const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state: ILanguage, action: PayloadAction<ILanguage>) => {
      state.language = action.payload.language;
    },
  },
});

const { reducer, actions } = language;
export const { setLanguage } = actions;
export default reducer;

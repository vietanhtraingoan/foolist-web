import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProjects } from "../../utils/types/projectTypes";

const initialState: IProjects = {
  projectId: undefined,
};

const project = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectId: (state: IProjects, action: PayloadAction<IProjects>) => {
      state.projectId = action.payload.projectId;
    },
  },
});

const { reducer, actions } = project;
export const { setProjectId } = actions;
export default reducer;

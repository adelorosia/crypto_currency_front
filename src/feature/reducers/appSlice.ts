import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isMenuOpen: boolean;
  isUserPanelOpen: boolean;
  isDarkMode: boolean;
  isSidebarMenuOpen: boolean;
}

const initialState: IAppState = {
  isMenuOpen: false,
  isUserPanelOpen: false,
  isDarkMode: false,
  isSidebarMenuOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setIsUserPanelOpen: (state, action) => {
      state.isUserPanelOpen = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    setIsSidebarMenuOpen: (state, action) => {
      state.isSidebarMenuOpen = action.payload;
    },
  },
});

export const {
  setIsMenuOpen,
  setIsUserPanelOpen,
  setIsDarkMode,
  setIsSidebarMenuOpen,
} = appSlice.actions;
export default appSlice.reducer;

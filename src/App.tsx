import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  setIsDarkMode,
  setIsSidebarMenuOpen,
  setIsUserPanelOpen,
} from "./feature/reducers/appSlice";
import { AppDispatch, RootState } from "./feature/store";
import SidebarMenu from "./components/navbar/menu/SidebarMenu";
import { useEffect } from "react";
import { displayUsers } from "./feature/reducers/authSlice";
const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isUserPanelOpen, isSidebarMenuOpen, isDarkMode } = useSelector(
    (state: RootState) => state.app
  );
  const users = useSelector(displayUsers);
  useEffect(() => {}, [users]);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "true") {
      dispatch(setIsDarkMode(true));
    } else {
      dispatch(setIsDarkMode(false));
    }
  }, [isDarkMode]);
  // useEffect(() => {
  //   if (userInfo.userId) {
  //     const exp = userInfo.exp;
  //     const currentTime = Math.floor(Date.now() / 1000);
  //     if (exp && exp < currentTime) {
  //       localStorage.removeItem("userInfo");
  //       dispatch(setUserInfo(localStorage.getItem("userInfo")));
  //     }
  //   }
  // }, []);
  return (
    // <PersistGate loading={null} persistor={persistor}>
    <div
      className={`w-full min-h-screen relative ${
        isDarkMode ? "dark-theme" : " light-theme"
      }`}
    >
      <div
        className={`${
          isDarkMode
            ? " bg-SECONDARY_BLACK text-PRIMARY_WHITE"
            : " bg-SECONDARY_WHITE text-PRIMARY_BLACK"
        }`}
      >
        <SidebarMenu />
      </div>
      <div
        className={`ease-in-out duration-300 z-20 backdrop-blur-sm ${
          isSidebarMenuOpen
            ? "w-full min-h-screen absolute inset-0 lg:hidden"
            : "hidden"
        } ${isDarkMode ? " bg-SECONDARY_WHITE/70" : " bg-SECONDARY_BLACK/70"}`}
        onClick={() =>
          isSidebarMenuOpen && dispatch(setIsSidebarMenuOpen(false))
        }
      ></div>
      <div
        className={`min-h-screen z-10`}
        onClick={() => {
          isUserPanelOpen && dispatch(setIsUserPanelOpen(false));
        }}
      >
        <header
          className={`py-3 mb-6 shadow-sm ${
            isDarkMode
              ? " bg-SECONDARY_BLACK text-PRIMARY_WHITE"
              : " bg-SECONDARY_WHITE text-PRIMARY_BLACK"
          }`}
        >
          <Navbar />
        </header>
        <main className=" min-h-screen w-full">
          <Outlet />
        </main>
        <footer>footer</footer>
      </div>
      <ToastContainer />
    </div>
    // </PersistGate>
  );
};
export default App;








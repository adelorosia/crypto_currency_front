import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../feature/store";
import { setIsUserPanelOpen } from "../../../feature/reducers/appSlice";
import { IoIosArrowDown, IoMdLogOut, IoMdRadioButtonOn } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaCalculator, FaUser } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { displayUser, fetchUsers, logoutApiUser } from "../../../feature/reducers/authSlice";
import { NotificationService } from "../../../services/notificationServices";
import { useEffect } from "react";

// Start User Panel
const panelItem = [
  {
    title: "Profile",
    icon: <FaUser className="w-6 h-6" />,
    active: <IoMdRadioButtonOn />,
  },
  {
    title: "Home",
    icon: <AiFillHome className="w-6 h-6" />,
    active: <IoMdRadioButtonOn />,
  },
  {
    title: "My Journal",
    icon: <FaChartColumn className="w-6 h-6" />,
    active: <IoMdRadioButtonOn />,
  },
  {
    title: "Calculator",
    icon: <FaCalculator className="w-6 h-6" />,
    active: <IoMdRadioButtonOn />,
  },
  {
    title: "Logout",
    icon: <IoMdLogOut className="w-7 h-7" />,
    active: <IoMdRadioButtonOn />,
  },
];
// End User Panel
const UserControllPanel = () => {
  const navigate = useNavigate();
  const { isUserPanelOpen, isDarkMode } = useSelector(
    (state: RootState) => state.app
  );
const userId=localStorage.getItem("userId")

  const user = useSelector((state: RootState) =>
    displayUser(state, userId || "")
  );
  useEffect(() => {dispatch(fetchUsers())}, [userId]);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        className={`${
          isDarkMode
            ? " lg:bg-PRIMARY_WHITE lg:text-PRIMARY_BLACK"
            : " lg:bg-PRIMARY_BLACK hover:bg-SECONDARY_BLACK lg:text-PRIMARY_WHITE"
        } flex items-center gap-2 bg-transparent p-2 rounded-lg cursor-pointer`}
        onClick={(event) => {
          dispatch(setIsUserPanelOpen(!isUserPanelOpen));
          event.isPropagationStopped();
        }}
      >
        <img className="icon" src={user?.profile_photo} alt="" />
        <div
          className={`hidden lg:flex text-lg gap-1 font-FONT_VIGA ${
            isDarkMode ? "  text-PRIMARY_GRAY" : "text-PRIMARY_WHITE"
          }`}
        >
          <p>{user?.firstName}</p>
          <p>{user?.lastName}</p>
        </div>
        <IoIosArrowDown
          className={`hidden lg:flex w-6 h-6  transition-all duration-300 ${
            isUserPanelOpen ? "rotate-180" : "rotate-0"
          }
            `}
        />
      </div>

      {/* Start User  Box Menu */}
      <div
        className={`absolute top-14 md:top-16 rounded-lg right-0 transition-all duration-300 z-50 overflow-hidden border${
          isUserPanelOpen
            ? "  w-64 h-fit   opacity-100"
            : "h-0 w-64 border-none opacity-0"
        } box-theme`}
      >
        {panelItem.map((item) => (
          <div
            key={item.title}
            className={`py-4 px-5 flex items-center gap-4 cursor-pointer transition-all duration-300 uppercase justify-between group ${
              !isUserPanelOpen && "hidden"
            }  hover:bg-PRIMARY_ORANGE`}
          >
            <div
              className="flex items-center gap-4"
              onClick={async () => {
                switch (item.title) {
                  case "Profile":
                    break;
                  case "Home":
                    break;
                  case "My Journal":
                    break;
                  case "Calculator":
                    navigate("/calc");
                    break;
                  case "Logout":
                    try {
                      const response = await dispatch(logoutApiUser()).unwrap();
                      localStorage.removeItem("userId");
                      localStorage.removeItem("exp");
                      localStorage.removeItem("verify")
                      NotificationService.success(response.message);
                      setTimeout(() => {
                        navigate("/home");
                      }, 3000);
                    } catch (error: any) {
                      NotificationService.error(error.message);
                    }
                    break;
                }
              }}
            >
              <span> {item.icon}</span>
              <p>{item.title}</p>
            </div>
            <span className=" hidden group-hover:flex"> {item.active}</span>
          </div>
        ))}
      </div>
      {/* End User Box Menu */}
    </>
  );
};

export default UserControllPanel;

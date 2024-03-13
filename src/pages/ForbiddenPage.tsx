import { FaUserLock } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../feature/store";
import { verifyApiUserEmail } from "../feature/reducers/userSlice";


const ForbiddenPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 font-FONT_VIGA items-center  py-6 rounded-lg  ${
        isDarkMode ? "light-theme" : "dark-theme"
      } px-6`}
    >
      <div className="flex items-center text-9xl bg-PRIMARY_ORANGE w-fit py-6 px-2 rounded-lg  gap-5 justify-center">
        <FaUserLock className=" text-PRIMARY_GRAY" />
        <p>403</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-3xl text-SECONDARY_ORANGE">Ooops...</p>
        <p
          className={`${
            isDarkMode ? " text-PRIMARY_BLACK" : " text-PRIMARY_WHITE"
          }`}
        >
          My apologies for the confusion. To access this page, you need to
          confirm your account by clicking on the confirmation link sent to your
          email. Please check your email and click on the confirmation link.
        </p>
        <button
          className="btn btn-primary"
          onClick={async () => {
            try {
              const response = await dispatch(verifyApiUserEmail()).unwrap();
              localStorage.setItem("verify",response.verificationToken)
              console.log(response);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Send confirmation link{" "}
        </button>
      </div>
    </div>
  );
};

export default ForbiddenPage;

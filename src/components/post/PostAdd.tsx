import { HiPhoto } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayUser } from "../../feature/reducers/userSlice";

const PostAdd = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  const userId = localStorage.getItem("userId");
  const user = useSelector((state: RootState) => displayUser(state, userId!));

  return (
    <div
      className={`w-full h-36 my-4 rounded-lg ${
        isDarkMode ? " bg-SECONDARY_BLACK" : " bg-SECONDARY_WHITE "
      }`}
    >
      <div>
        <div className="flex gap-2 px-3 py-5 ">
          <img
            className=" w-[46px] h-[46px] rounded-full"
            src={user?.profile_photo}
            alt=""
          />
          <input
            className={`w-full h-[46px] rounded-full px-5 font-FONT_VIGA text-lg ${
              isDarkMode ? " bg-PRIMARY_BLACK" : " bg-PRIMARY_WHITE"
            }`}
            type="text"
            placeholder={`Whats on your mind , ${user.firstName}?`}
          />
        </div>
        <div className="border border-b-1  mx-3 " />
      </div>

      <div className="flex items-center justify-between mt-3 gap-2 px-5">
       <div className="flex items-center gap-2">
       <HiPhoto
          className={`text-3xl ${
            isDarkMode ? "text-PRIAMRY_WHITE " : "text-PRIMARY_BLACK"
          }`}
        />
        <p
          className={` ${
            isDarkMode ? "text-PRIAMRY_WHITE " : "text-PRIMARY_BLACK"
          }`}
        >
          Photo
        </p>
       </div>
              <button className="py-1 px-14 bg-SECONDARY_GRAY rounded-xl hover:bg-PRIMARY_BLUE hover:text-SECONDARY_BLACK">post</button>
      </div>
    </div>
  );
};

export default PostAdd;

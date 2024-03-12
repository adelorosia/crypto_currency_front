import { IoMdSettings } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayUser } from "../../feature/reducers/authSlice";

const HeaderProfile = () => {
  const userId = localStorage.getItem("userId");
  const user = useSelector((state: RootState) => displayUser(state, userId!));
  return (
<div className="my-4 ">
<div className="flex gap-4 font-FONT_VIGA justify-start">
        <img
          className="w-[80px] h-[80px] rounded-full"
          src={user?.profile_photo}
          alt=""
        />
    
      <div className="flex flex-col gap-3 w-full">
          <div className=" flex gap-3 items-center w-full justify-between">
            <p className=" font-FONT_VIGA ">{`${user?.firstName} ${user?.lastName}`}</p>
            <IoMdSettings className="cursor-pointer icon btn-icon" />
          </div>
          <div className="hidden md:flex items-center gap-4 ">
            <p>
              <span>3</span>Beitrag
            </p>
            <p>
              <span>180</span>Follower
            </p>
            <p>
              <span>465</span>Gefolgt
            </p>
          </div>
          <div>
            <p>{user?.email}</p>
          </div>
        </div>
      <div>{user?.bio}</div>
    

    </div>
    <div className=" flex mt-2 items-center justify-evenly md:hidden">
        <div className=" flex flex-col items-center gap-2">
          <span>3</span>
          <span>Beitrag</span>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <span>180</span>
          <span>Follower</span>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <span>465</span>
          <span>Gefolgt</span>
        </div>
      </div>
</div>
  );
};

export default HeaderProfile;

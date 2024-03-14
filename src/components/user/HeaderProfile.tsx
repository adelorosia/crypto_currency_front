import { IoMdSettings } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { AppDispatch, RootState } from "../../feature/store";
import { useSelector } from "react-redux";
import { changeProfilePhotoApiUser, displayUser } from "../../feature/reducers/userSlice";
import { IoIosCamera } from "react-icons/io";

const HeaderProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = localStorage.getItem("userId");
  const [selectedFile, setSelectedFile] = useState<string>("");

  const user = useSelector((state: RootState) => displayUser(state, userId!));

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const fileName = fileList[0].name;
 
     dispatch(changeProfilePhotoApiUser(fileName))
    }
  };
  



  return (
    <div className="my-4">
      <div className="flex gap-4 font-FONT_VIGA justify-start items-center ">
        <div className="relative">
          <img
            className="w-40 h-40 rounded-full"
            src={user?.profile_photo}
            alt=""
          />
          <div className="bg-SECONDARY_GRAY absolute p-1.5 rounded-full right-0 bottom-3 cursor-pointer ">
            <input
              id="fileInput"
              className="hidden cursor-pointer"
              type="file"
              onChange={handleFileChange}
            />
            <label className="cursor-pointer" htmlFor="fileInput">
              <IoIosCamera className="icon text-2xl" />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3 items-center w-full justify-between">
            <p className="font-FONT_VIGA text-2xl font-bold">{`${user?.firstName} ${user?.lastName}`}</p>
            <IoMdSettings className="cursor-pointer icon btn-icon" />
          </div>
          <div className="hidden md:flex items-center gap-4">
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
            <p className="text-sm text-PRIMARY_GRAY">{user?.email}</p>
          </div>
        </div>
        <div>{user?.bio}</div>
      </div>
      <div className="flex mt-2 items-center justify-evenly md:hidden">
        <div className="flex flex-col items-center gap-2">
          <span>3</span>
          <span>Beitrag</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>180</span>
          <span>Follower</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>465</span>
          <span>Gefolgt</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;

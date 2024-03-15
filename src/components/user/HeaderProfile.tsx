import { IoMdSettings } from "react-icons/io";
import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";

import { AppDispatch, RootState } from "../../feature/store";
import { useSelector } from "react-redux";
import {
  profilePhotoUploadApi,
  displayUser,
} from "../../feature/reducers/userSlice";
import { IoIosCamera } from "react-icons/io";

const HeaderProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = localStorage.getItem("userId");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);

  const [showBtn, setShowBtn] = useState(false);
  const user = useSelector((state: RootState) => displayUser(state, userId!));
  const { token } = useSelector((state: RootState) => state.users);
  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
      setShowBtn(true);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };
  console.log("token: ", token);
  const loadImage = async () => {
    if (file !== null) {
      console.log("file: ", file);
      try {
        const response = await dispatch(profilePhotoUploadApi(file)).unwrap();
        console.log(response.message);
        setShowBtn(false);
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      console.log("no file");
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
          <div className="flex items-center bg-SECONDARY_GRAY/80 absolute p-1.5 rounded-full right-0 bottom-3 cursor-pointer ">
            <button onClick={loadImage}>Upload</button>

            <div>
              <button onClick={handleClick}>
                <IoIosCamera className="icon text-2xl" />
              </button>
              <input
                name="file"
                className="cursor-pointer"
                type="file"
                hidden
                ref={inputRef}
                onChange={handleChange}
              />
            </div>
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

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../feature/store";
import { profilePhotoUploadApi } from "../feature/reducers/userSlice";
import { useNavigate } from "react-router-dom";

export const ShowImage = () => {
    const dispatch=useDispatch<AppDispatch>()
    const { file } = useSelector((state: RootState) => state.users);
    const imageURL = URL.createObjectURL(file!);
    const navigate=useNavigate()
    const loadImage = async () => {
        if (file !== null) {
          console.log("file: ", file);
          try {
            const response = await dispatch(profilePhotoUploadApi(file)).unwrap();
            console.log(response.message);
            navigate("/profile")
          } catch (error: any) {
            console.log(error.message);
          }
        } else {
          console.log("no file");
        }
      };

  console.log("ShoeImage", file);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-96 dark-theme h-96 gap-4">
        <img className=" rounded-lg" width={145}  src={imageURL} alt="" />
        <button onClick={loadImage}>Upload</button>
      </div>
    </div>
  );
};


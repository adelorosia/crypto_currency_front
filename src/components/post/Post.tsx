import { IoMdClose } from "react-icons/io";
import { BiDotsHorizontalRounded, BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayUser } from "../../feature/reducers/userSlice";
const Post = () => {

  const userId= localStorage.getItem("userId")
  const user = useSelector((state: RootState) => displayUser(state, userId!))
 
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayUser } from "../../feature/reducers/userSlice";
 

const Post = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.app);
const userId = localStorage.getItem("userId");
const user = useSelector((state:RootState)=> displayUser(state,userId!))
 

  return (
    <div className={` rounded-xl py-2  ${isDarkMode ? "bg-SECONDARY_BLACK":"bg-SECONDARY_WHITE"}`}>
      <div className=" flex justify-between items-center px-2">
        <div className="flex gap-2">
        <div>
          <img className="w-[50px] h-[50px] rounded-full" src={user.profile_photo} alt="" />
        </div>
        <div className="flex flex-col">
          <p>{user.firstName}</p>
          <p className="text-slate-400 text-xs">March 8 at 5:00 AM</p>
        </div>
        </div>
        <div className="flex items-center text-2xl gap-2">
        <BiDotsHorizontalRounded />
          <IoMdClose />
        </div>
      </div>
      <p className="my-2 px-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum praesentium saepe delectus magni voluptatem laudantium. Voluptas, culpa eveniet? Nesciunt, voluptatum iusto a sapiente quae voluptatibus ut, ipsam eum illum distinctio voluptatem non atque porro harum? Error aspernatur aliquid voluptatum repellendus.</p>
      <div>
        <img className="w-full h-[70vh]" src="/bild2.jpg" alt="" />
      </div>
      <div className="flex justify-between items-center px-3 mt-2">
        <div className="flex items-center gap-2">
        <BiSolidLike />
        <p>like</p>
        </div>
        <div className="flex gap-2">
       <span className="flex items-center gap-2">
       <FaComment />
        <p>6</p>
       </span>
       <span className="flex items-center gap-2">
       <IoMdShareAlt />
        <p>6</p>
       </span>
        </div>
      </div>
      <div className="border border-b-1 border-gray-200  my-2 mx-3"/>
      <div>
        <div className=" flex justify-around">
            <BiLike className="text-2xl hover:animate-bounce" />
            <FaRegComment className="text-2xl hover:animate-bounce" />
        </div>
        <div className="border border-b-1 my-2 border-gray-200 mx-3" />
      </div>
      <div className="flex w-full px-3 gap-2">
        <img className="w-[40px] h-[40px] rounded-full" src={user.profile_photo} alt="" />
 
        <input className="w-full pl-2 rounded-full bg-gray-200" type="text" placeholder="comment..." />
 
        <input className={`w-full pl-2 rounded-full ${isDarkMode ? "bg-PRIMARY_BLACK":"bg-PRIMARY_WHITE"}`} type="text" placeholder="comment..." />
 
      </div>
    </div>
  );
};
export default Post;
import { IoMdSettings } from "react-icons/io";
import { RiUserFollowFill } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";
import { GiShadowFollower } from "react-icons/gi";
const MainProfile = () => {
  return (
    <div className="my-4 container px-5 flex flex-col gap-4">
      <div className="flex gap-6 items-center">
        <img
          className="w-[80px] h-[80px] rounded-full"
          src="/bild1.jpg"
          alt=""
        />
        <div>
          <div className=" flex gap-3">
            <p>Khalil haouas</p>
            <button className="md:flex hidden">Profil Bearbeiten</button>
            <IoMdSettings className="md:hidden flex" />
          </div>
          <div className="hidden md:flex items-center gap-4 justify-center">
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
            <p>Email:khalil.haouas@gmail.com</p>
          </div>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
        dignissimos nesciunt expedita dicta delectus amet, sapiente animi,
        quibusdam autem iure ad atque explicabo fugit enim?
      </div>
      <div className=" border border-bottom-2 "></div>
      <div className=" flex gap-32 mt-2 items-center justify-center md:hidden">
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

export default MainProfile;

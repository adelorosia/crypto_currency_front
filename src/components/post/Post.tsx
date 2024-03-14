import { IoMdClose } from "react-icons/io";
import { BiDotsHorizontalRounded, BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayUser } from "../../feature/reducers/userSlice";
import { IUser } from "../../interface";
const Post = () => {
  // Selektiere den aktuellen Dark-Mode-Status aus dem Redux-Store
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  // Hole die Benutzer-ID aus dem lokalen Speicher
  const userId = localStorage.getItem("userId");
  // Selektiere den Benutzer anhand der Benutzer-ID aus dem Redux-Store
  const user: IUser = useSelector((state: RootState) =>
    displayUser(state, userId!)
  );
  return (
    <div
      className={`rounded-xl py-3 font-FONT_VIGA ${
        // Dynamische Klasse für den Hintergrund basierend auf dem Dark-Mode-Status
        isDarkMode ? "bg-SECONDARY_BLACK" : "bg-SECONDARY_WHITE"
      }`}
    >
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-2">
          {/* Profilbild des Benutzers */}
          <div>
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={user?.profile_photo}
              alt=""
            />
          </div>
          {/* Benutzername und Zeitstempel */}
          <div className="flex flex-col">
            <p>{user?.firstName}</p>
            <p className="text-slate-400 text-xs">March 8 at 5:00 AM</p>
          </div>
        </div>
        {/* Optionen-Menü */}
        <div className="flex items-center text-2xl gap-2">
          <BiDotsHorizontalRounded />
          <IoMdClose />
        </div>
      </div>
      {/* Beitragstext */}
      <p className="my-3 mx-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
        praesentium saepe delectus magni voluptatem laudantium. Voluptas, culpa
        eveniet? Nesciunt, voluptatum iusto a sapiente quae voluptatibus ut,
        ipsam eum illum distinctio voluptatem non atque porro harum? Error
        aspernatur aliquid voluptatum repellendus.
      </p>
      {/* Bild */}
      <div className="mx-3 rounded-sm">
        <img className="w-full h-[70vh] rounded-lg" src="/bild2.jpg" alt="" />
      </div>
      {/* Interaktionsbereich */}
      <div className="flex justify-between items-center px-3 mt-2">
        {/* Like- und Teilen-Buttons */}
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
      {/* Trennlinie */}
      <div className="border border-b-1 border-gray-200 my-2 mx-3" />
      {/* Like- und Kommentar-Buttons */}
      <div>
        <div className="flex justify-start gap-8 px-3 font-FONT_VIGA">
          <span className="flex items-center gap-2">
            <p>Like</p>
            <BiLike className="text-2xl hover:animate-bounce" />
          </span>
          <span className="flex items-center gap-2">
            <p className="flex items-center gap-2">comment</p>
            <FaRegComment className="text-2xl hover:animate-bounce" />
          </span>
        </div>
        {/* Trennlinie */}
        <div className="border border-b-1 my-2 border-gray-200 mx-3" />
      </div>
      {/* Kommentarbereich */}
      <div className="flex w-full px-3 gap-2">
        {/* Profilbild und Kommentareingabefeld */}
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={user?.profile_photo}
          alt=""
        />
        <input
          className={`w-full h-[46px] rounded-full px-5 text-lg ${
            isDarkMode ? "bg-PRIMARY_BLACK" : "bg-PRIMARY_WHITE"
          }`}
          type="text"
          placeholder="comment..."
        />
      </div>
    </div>
  );
};
export default Post;
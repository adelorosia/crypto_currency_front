import { HiPhoto } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { displayUser } from "../../feature/reducers/userSlice";

const PostAdd = () => {
  // Selektiere den aktuellen Dark-Mode-Status aus dem Redux-Store
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  // Hole die Benutzer-ID aus dem lokalen Speicher
  const userId = localStorage.getItem("userId");




  // Selektiere den Benutzer anhand der Benutzer-ID aus dem Redux-Store
  const user = useSelector((state: RootState) => displayUser(state, userId!));

  return (
    <div

      className={`w-full h-36 my-4 rounded-lg font-FONT_VIGA ${
        // Dynamische Klasse für den Hintergrund basierend auf dem Dark-Mode-Status
        isDarkMode ? "bg-SECONDARY_BLACK" : "bg-SECONDARY_WHITE"
      }`}
    >
      <div>
        <div className="flex gap-2 px-3 py-5">
          {/* Profilfoto des Benutzers */}
          <img
            className="w-[46px] h-[46px] rounded-full"
            src={user?.profile_photo}
            alt=""
          />
          {/* Eingabefeld für den Beitrag */}
          <input
            className={`w-full h-[46px] rounded-full px-5 text-lg ${
              // Dynamische Klasse für das Eingabefeld basierend auf dem Dark-Mode-Status
              isDarkMode ? "bg-PRIMARY_BLACK" : "bg-PRIMARY_WHITE"
            }`}
            type="text"
            // Platzhaltertext für das Eingabefeld
            placeholder={`What's on your mind, ${user.firstName}?`}
          />
        </div>
        {/* Trennlinie */}
        <div className="border border-b-1 mx-3" />
      </div>

      <div className="flex items-center justify-between mt-3 gap-2 px-5">
        <div className="flex items-center gap-2">
          
          {/* Symbol für das Hochladen von Fotos */}
          <HiPhoto
            className={`text-3xl ${
              // Dynamische Farbe für das Symbol basierend auf dem Dark-Mode-Status
              isDarkMode ? "text-PRIAMRY_WHITE" : "text-PRIMARY_BLACK"
            }`}
          />
          {/* Text "Photo" */}
          <p
            className={`${
              // Dynamische Farbe für den Text basierend auf dem Dark-Mode-Status
              isDarkMode ? "text-PRIAMRY_WHITE" : "text-PRIMARY_BLACK"
            }`}
          >
            Photo
          </p>
        </div>
        {/* Button zum Posten */}
        <button className="py-1 px-14 bg-SECONDARY_GRAY rounded-xl hover:bg-PRIMARY_BLUE hover:text-SECONDARY_BLACK">
          post
        </button>

      </div>
    </div>
  );
};

export default PostAdd;

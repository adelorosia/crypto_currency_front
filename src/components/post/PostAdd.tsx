import { HiPhoto } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const items = [
  {
    id: "1",
    image: "/bild1.jpg",
    firstName: "Hasan",
  },
];

const PostAdd = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.app);

  return (
    <div className="w-full h-36 my-4 bg-bg-PRIMARY_WHITE rounded-lg">
      {items.map((item) => (
        <div key={item.id}>
          <div className="flex gap-2 px-3 py-5 ">
            <img
              className=" w-[46px] h-[46px] rounded-full"
              src={item.image}
              alt=""
            />
            <input
              className="w-full h-[46px] rounded-full pl-2"
              type="text"
              placeholder={`Whats on your mind , ${item.firstName}?`}
            />
          </div>
          <div className="border border-b-1  mx-3 " />
        </div>
      ))}
      <div
        className="flex items-center justify-center mt-3 gap-2"
      >
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
    </div>
  );
};

export default PostAdd;

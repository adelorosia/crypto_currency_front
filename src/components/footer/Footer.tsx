import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import logo from "../../assets/images/logo.png";
import MaxWithWrapper from "../MaxWithWrapper";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.app);
  return (
    <div
      className={` mt-4 font-FONT_VIGA ${
        isDarkMode ? "bg-SECONDARY_BLACK" : "bg-SECONDARY_WHITE"
      }`}
    >
      <MaxWithWrapper className="py-4">
        <div className="flex flex-col gap-4 md:flex md:flex-row justify-between border-b-2 pb-2">
          <div>
            <div className="flex items-center gap-3">
              <img className="w-8" src={logo} alt="" />
              <p className="text-2xl">Crypto</p>
            </div>
            <div className="flex items-center gap-4 my-4 cursor-pointer">
              <p className="text-xl">Let's talk! </p>
              <FaPhoneFlip className="text-xl text-yellow-500 hover:animate-bounce " />
            </div>

            <p className="my-2 text-PRIMARY_GRAY cursor-pointer"> +49 744 666 8582</p>
            <p className="mb-2  text-PRIMARY_GRAY cursor-pointer">
              Info.acctive.cryptoqgmail.com
            </p>

            <p className=" text-PRIMARY_GRAY">Van-Topo-str , 66</p>
            <p className=" text-PRIMARY_GRAY">Fantasy City 66664</p>
            <p className="text-PRIMARY_GRAY">Germany</p>
          </div>

          <div>
            <p className="text-2xl">Newletters</p>
            <div className="py-4">
                <p className=" text-PRIMARY_GRAY">Subscribe Our Newsletter To Get More</p>
                <p className=" text-PRIMARY_GRAY">Free Infos and Resource </p>
            </div>
            <div className={`flex justify-between rounded-full w-full py-3 px-4 ${ isDarkMode ? "bg-PRIMARY_BLACK" : "bg-PRIMARY_WHITE"}`}>
                <input
                placeholder="Enter Your Email"
                className={`rounded-full outline-none w-full  ${ isDarkMode ? "bg-PRIMARY_BLACK" : "bg-PRIMARY_WHITE"}`} type="email" />
                <button className="bg-PRIMARY_BLUE py-1  px-3 rounded-full">submit</button>
            </div>
            <div className="flex gap-8 text-xl mt-4 ">
            <FaFacebookF className="hover:text-PRIMARY_BLUE" />
            <FaInstagram className="hover:text-PRIMARY_BLUE" />
            <IoLogoYoutube className="hover:text-PRIMARY_BLUE" />
            <FaTwitter className="hover:text-PRIMARY_BLUE" />
            </div>
            
          </div>
        </div>

        
        <p className="w-full text-center pt-2">
          ©2022 Rockie.Com. All Rights Reserved. Terms Of Service | Privacy
          Terms
        </p>
      </MaxWithWrapper>
    </div>
  );
};

export default Footer;

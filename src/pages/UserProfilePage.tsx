import MaxWithWrapper from "../components/MaxWithWrapper";
import Post from "../components/post/Post";
import HeaderProfile from "../components/user/HeaderProfile";



const UserProfilePage = () => {
  return (
    <MaxWithWrapper>
      <HeaderProfile />
      <Post />
    </MaxWithWrapper>
  );
};

export default UserProfilePage;

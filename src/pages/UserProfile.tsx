import MaxWithWrapper from "../components/MaxWithWrapper";
import Post from "../components/post/Post";
import HeaderProfile from "../components/user/HeaderProfile";



const UserProfile = () => {
  return (
    <MaxWithWrapper>
      <HeaderProfile />
      <Post />
    </MaxWithWrapper>
  );
};

export default UserProfile;

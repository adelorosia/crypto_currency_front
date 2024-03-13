import MaxWithWrapper from "../components/MaxWithWrapper";
import Post from "../components/post/Post";
import PostAdd from "../components/post/PostAdd";
import HeaderProfile from "../components/user/HeaderProfile";



const UserProfilePage = () => {
  return (
    <MaxWithWrapper>
      <HeaderProfile />
      <PostAdd />
      <Post />
    </MaxWithWrapper>
  );
};

export default UserProfilePage;

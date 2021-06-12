import { Post } from "../components/Post";
import { PostContainer } from "../modules/post/post.container";

export const PostPage = () => {
  return (
    <>
      <h1>One Post</h1>
      <PostContainer>
        {({ post }) => (post ? <Post {...post} /> : <>Post not Found</>)}
      </PostContainer>
    </>
  );
};

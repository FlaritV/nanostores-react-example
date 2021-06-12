import { Posts } from "../components/Posts";
import { PostsContainer } from "../modules/posts/posts.container";

export const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostsContainer>{({ posts }) => <Posts data={posts} />}</PostsContainer>
    </div>
  );
};

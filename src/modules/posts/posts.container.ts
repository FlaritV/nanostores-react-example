import { useStore } from "nanostores/react";
import { useEffect } from "react";
import { Post } from "../post/post";
import { fetchPosts } from "./posts.service";
import { postsStore } from "./posts.store";

export interface Props {
  children: (data: {
    posts: readonly Post[];
    loading?: boolean;
  }) => JSX.Element;
}

export const PostsContainer: React.FC<Props> = ({ children }) => {
  const posts = useStore(postsStore);

  useEffect(() => {
    fetchPosts().then((posts) => postsStore.set(posts));
  }, []);

  return children({ posts });
};

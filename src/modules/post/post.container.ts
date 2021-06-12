import { useStore } from "nanostores/react";
import { useEffect } from "react";
import { router } from "../router";
import { Post } from "./post";
import { fetchPost } from "./post.service";
import { postStore } from "./post.store";

export interface Props {
  children: (data: {
    post: Readonly<Post> | null;
    loading?: boolean;
  }) => JSX.Element;
}

export const PostContainer: React.FC<Props> = ({ children }) => {
  const page = useStore(router);
  const post = useStore(postStore);

  //sad
  const { id } = page?.params as unknown as { id: string };

  useEffect(() => {
    if (id) {
      fetchPost(id).then((post) => postStore.set(post));
    }
  }, [id]);

  return children({ post });
};

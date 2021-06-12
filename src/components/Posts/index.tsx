import React from "react";
import { Post as IPost } from "../../modules/post/post";
import { Post } from "../Post";

export type Props = {
  data: readonly IPost[];
};

export const Posts: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

import { Post } from "../post/post";

export const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json() as Promise<Post[]>
  );
};

import { Post } from "./post";

export const fetchPost = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (res) => res.json() as Promise<Post>
  );
};

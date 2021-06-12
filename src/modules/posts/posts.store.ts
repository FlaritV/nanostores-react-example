import { createStore } from "nanostores";
import { Post } from "../post/post";

export type StoreType = Post[];

export const postsStore = createStore<StoreType>(() => {
  postsStore.set([]);
});

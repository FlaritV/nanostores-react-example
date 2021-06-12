import { createStore } from "nanostores";
import { Post } from "./post";

export type StoreType = Post | null;

export const postStore = createStore<StoreType>(() => {
  postStore.set(null);
});

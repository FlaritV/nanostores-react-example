import { PostsPage } from "./../../pages/Posts";
import { MainPage } from "../../pages/Main";
import { PostPage } from "../../pages/Post";
import { Page } from "./router";

export interface Routes {
  home: void;
  posts: void;
  post: "id";
}

export const pages: Record<keyof Routes, Page> = {
  home: { path: "/", component: MainPage },
  posts: { path: "/posts", component: PostsPage },
  post: { path: "/posts/:id", component: PostPage },
};

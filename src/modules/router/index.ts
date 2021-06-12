import { createRouter } from "nanostores";
import { Entries, Page } from "./router";
import { Routes as TRoutes } from "nanostores/create-router";
import { MainPage } from "../../pages/Main";
import { PostPage } from "../../pages/Post";
import { PostsPage } from "../../pages/Posts";

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

export const router = createRouter<Routes>(
  (Object.entries(pages) as Entries<Record<keyof Routes, Page>>).reduce(
    (acc, [key, route]) => ({ ...acc, [key]: route.path }),
    {} as TRoutes<Routes>
  )
);

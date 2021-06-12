import { getPagePath } from "nanostores";
import { router, Routes } from "../..";

export type Props = {
  name: keyof Routes;
  params?: any;
};

export const Link: React.FC<Props> = ({ name, children, params }) => {
  return <a href={getPagePath(router, name, params)}>{children}</a>;
};

import { useStore } from "nanostores/react";
import { pages, router } from "../../index";

export type Props = {
  notFound?: JSX.Element;
};

export const Root: React.FC<Props> = ({ notFound }) => {
  const page = useStore(router);
  const route = page?.route;

  if (!route) return notFound || <h1>NotFound</h1>;

  const Component = pages[route].component;

  return <Component />;
};

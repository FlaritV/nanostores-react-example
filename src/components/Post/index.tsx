import { Post as IPost } from "../../modules/post/post";
import { Link } from "../../modules/router/components/Link";

export const Post: React.FC<IPost> = ({ id, title, body }) => {
  return (
    <article>
      <Link name='post' params={{ id }}>
        <h4>{title}</h4>
      </Link>
      <p>{body}</p>
    </article>
  );
};

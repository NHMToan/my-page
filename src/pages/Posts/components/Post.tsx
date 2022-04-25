import { Post as PostData } from 'generated/graphql';
import moment from 'moment';
import { FC } from 'react';
import { Link } from 'react-router-dom';
interface PostProps {
  postData: PostData;
}
const Post: FC<PostProps> = ({ postData }) => {
  const { id, category, title, createdAt, user } = postData;
  const image = `images/blog/${Math.floor(Math.random() * 2) + 1}.svg`;
  return (
    <div className="blog-item rounded bg-white shadow-dark">
      <div className="thumb">
        <a href="!#">
          <span className="category">{category}</span>
        </a>
        <Link to={`/posts/${id}/`}>
          <img src={image} alt="blog-title" />
        </Link>
      </div>
      <div className="details">
        <h4 className="my-0 title">
          <Link to={`/posts/${id}/`}>{title}</Link>
        </h4>
        <ul className="list-inline meta mb-0 mt-2">
          <li className="list-inline-item">{moment(createdAt).format('LL')}</li>
          <li className="list-inline-item">{user.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Post;

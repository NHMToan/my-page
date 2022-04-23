import Pagetitle from 'components/elements/Pagetitle';
import Post from 'pages/Posts/components/Post';
import { fakeBlogsData } from 'pages/Posts/_mock';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface PostsSectionProps {}

const PostsSection: FC<PostsSectionProps> = (props) => {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {fakeBlogsData.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Post blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/posts" className="btn btn-default">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostsSection;

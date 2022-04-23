import Button from 'components/Button';
import { AuthContext } from 'contexts/AuthContext';
import { FC, useContext } from 'react';
import Post from '../components/Post';
import { fakeBlogsData } from '../_mock';

interface PostsListProps {}
const PostsList: FC<PostsListProps> = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <div className="blog-page-section" style={{ marginBottom: 6 }}>
        <div className="container">
          <div className="blog-single shadow-dark p-30">
            <h4 style={{ margin: 0 }}>Posts</h4>
            <Button
              link="/posts/new"
              icon="plus"
              label="Add new"
              className="pull-right"
              style={{ bottom: 30, display: !isAuthenticated && 'none' }}
            />
          </div>
        </div>
      </div>

      <div className="blog-page-section">
        <div className="container">
          <div
            className="row blog-wrapper fix-spacing"
            style={{ display: 'inline-flex' }}
          >
            {fakeBlogsData.map((blogItem) => (
              <div className="col-md-4" key={blogItem.id}>
                <Post blogData={blogItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsList;

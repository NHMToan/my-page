import Button from 'components/Button';
import Loading from 'components/Loading';
import { AuthContext } from 'contexts/AuthContext';
import { usePostsQuery } from 'generated/graphql';
import { FC, useContext } from 'react';
import Post from '../components/Post';
import { PostData } from '../data.t';

interface PostsListProps {}
const PostsList: FC<PostsListProps> = () => {
  const { data, loading } = usePostsQuery({
    variables: { limit: 50, offset: 0 },
    fetchPolicy: 'no-cache',
  });
  const { isAuthenticated } = useContext(AuthContext);

  const renderList = () => {
    if (loading) return <Loading />;
    if (data?.posts?.results?.length > 0)
      return (
        <div
          className="row blog-wrapper fix-spacing"
          style={{ display: 'inline-flex' }}
        >
          {data.posts.results.map((postItem: PostData) => (
            <div className="col-md-4" key={postItem.id}>
              <Post postData={postItem} />
            </div>
          ))}
        </div>
      );

    return 'Posts not found';
  };
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
        <div className="container">{renderList()}</div>
      </div>
    </>
  );
};

export default PostsList;

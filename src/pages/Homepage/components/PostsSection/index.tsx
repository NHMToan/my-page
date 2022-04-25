import Pagetitle from 'components/elements/Pagetitle';
import { Post as PostData, usePostsQuery } from 'generated/graphql';
import Post from 'pages/Posts/components/Post';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface PostsSectionProps {}

const PostsSection: FC<PostsSectionProps> = (props) => {
  const { data, loading } = usePostsQuery({
    variables: { limit: 3, offset: 0 },
    fetchPolicy: 'no-cache',
  });

  const renderPostsList = () => {
    if (loading) return null;
    if (data.posts.totalCount <= 0) return 'No posts found';
    return (
      <div className="row blog-wrapper">
        {data.posts.results.map((post: PostData) => (
          <div className="col-md-4" key={post.id}>
            <Post postData={post} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        {renderPostsList()}
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

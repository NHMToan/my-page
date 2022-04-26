import { Col, message, Popconfirm, Row, Skeleton, Space, Tag } from 'antd';
import IButton from 'components/IButton';
import Icon from 'components/Icon';
import { AuthContext } from 'contexts/AuthContext';
import { useDeletePostMutation, usePostQuery } from 'generated/graphql';
import { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import defaultImg from '../../../assets/blog-images/1-1.jpg';

interface PostDetailsProps {}
const PostDetails: FC<PostDetailsProps> = (props) => {
  const { postID } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const { data, loading } = usePostQuery({
    variables: { id: postID },
    fetchPolicy: 'no-cache',
  });
  const navigate = useNavigate();
  const [deletePost] = useDeletePostMutation({ fetchPolicy: 'no-cache' });

  const onDelete = () => {
    deletePost({ variables: { id: postID } }).then((res) => {
      if (res?.data?.deletePost?.success) {
        message.success('Post deleted!');
        navigate('/posts');
      } else {
        message.error('Delete failed ' + res?.data?.deletePost?.message);
      }
    });
  };
  const authActions = () => {
    if (isAuthenticated)
      return (
        <Row style={{ marginBottom: 12 }}>
          <Col span={24}>
            <Space className="pull-right">
              <IButton
                onClick={() => {
                  navigate(`/posts/edit/${postID}`);
                }}
              >
                <Icon icon={['fas', 'pencil']} />
              </IButton>
              <Popconfirm
                title="Are you sure to delete this post?"
                onConfirm={onDelete}
                okText="Yes"
                cancelText="No"
              >
                <IButton danger type="primary">
                  <Icon icon={['fas', 'trash']} />
                </IButton>
              </Popconfirm>
            </Space>
          </Col>
        </Row>
      );
  };
  const renderDetails = () => {
    if (loading) return <Skeleton />;
    if (!data) return null;

    const { title, text, category } = data.post;

    return (
      <div className="blog-single shadow-dark p-30">
        {authActions()}
        <img
          src={defaultImg}
          alt="blog-title"
          style={{ width: '100%', height: 'auto' }}
        />
        <Space>
          <h3>{title}</h3>
          <Tag color="#108ee9" style={{ borderRadius: 8 }}>
            {category}
          </Tag>
        </Space>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    );
  };
  return (
    <>
      <div className="blog-page-section">
        <div className="container">
          <div className="blog-single shadow-dark p-30">
            <h4
              onClick={() => {
                navigate('/posts');
              }}
              style={{ margin: 0 }}
              className="link"
            >
              Posts
            </h4>
          </div>
        </div>
      </div>
      <div className="spacer" data-height="30"></div>
      <div className="blog-page-section">
        <div className="container">{renderDetails()}</div>
      </div>
    </>
  );
};

export default PostDetails;

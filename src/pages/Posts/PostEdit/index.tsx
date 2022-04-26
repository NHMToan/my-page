import { Form, message, Modal } from 'antd';
import BraftEditor from 'braft-editor';
import IButton from 'components/IButton';
import ICustomSelect from 'components/IForm/ICustomSelect';
import IFormItem from 'components/IForm/IFormItem';
import IInput from 'components/IForm/IInput';
import RichText from 'components/IForm/RichText';
import Loading from 'components/Loading';
import Panel from 'components/Panel';
import { usePostQuery, useUpdatePostMutation } from 'generated/graphql';
import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface PostEditProps {}

const PostEdit: FC<PostEditProps> = (props) => {
  const navigate = useNavigate();
  const { postID } = useParams();
  const { data, loading } = usePostQuery({
    variables: { id: postID },
    fetchPolicy: 'no-cache',
  });

  const [form] = Form.useForm();
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [updatePost] = useUpdatePostMutation();

  const onSubmit = (values) => {
    setSubmiting(true);
    updatePost({
      variables: {
        updatePostInput: {
          id: postID,
          ...values,
        },
      },
    })
      .then((response) => {
        if (response?.data?.updatePost?.success) {
          message.success('Post updated!');
          navigate(`/posts/${postID}`);
        } else {
          message.error(
            response?.data?.updatePost?.message || 'Unexpected error!'
          );
        }

        setSubmiting(false);
      })
      .catch((e) => {
        console.log(e);
        setSubmiting(false);
      });
  };

  const renderForm = () => {
    if (postID && loading) return <Loading />;
    if (!data) return null;
    const {
      post: { title, text, category },
    } = data;
    const initialValues = {
      title,
      text,
      category,
    };
    return (
      <Form
        name="postForm"
        labelCol={{ flex: '110px' }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        form={form}
        onFinish={onSubmit}
        size="large"
        className="i-form"
        initialValues={initialValues}
      >
        <IFormItem name="title" label="Title">
          <IInput />
        </IFormItem>
        <IFormItem name="category" label="Category">
          <ICustomSelect
            defaultOptions={['Social', 'Tutorial', 'Other']}
            placeholder="Select category"
          />
        </IFormItem>

        <RichText
          onChange={(editorState) => {
            form.setFieldsValue({ text: editorState.toHTML() });
          }}
          defaultValue={BraftEditor.createEditorState(text)}
        />

        <IFormItem noStyle name="text">
          <IInput hidden />
        </IFormItem>
        <IFormItem>
          <IButton
            type="primary"
            onClick={() => {
              Modal.confirm({
                title: 'Update post',
                content: 'Are you sure update this post?',
                onOk() {
                  form.submit();
                },
              });
            }}
            className="pull-right"
            loading={submiting}
          >
            Submit
          </IButton>
        </IFormItem>
      </Form>
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
        <div className="container">
          <Panel>{renderForm()}</Panel>
        </div>
      </div>
    </>
  );
};

export default PostEdit;

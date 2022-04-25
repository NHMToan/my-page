import { Form, message } from 'antd';
import IButton from 'components/IButton';
import ICustomSelect from 'components/IForm/ICustomSelect';
import IFormItem from 'components/IForm/IFormItem';
import IInput from 'components/IForm/IInput';
import RichText from 'components/IForm/RichText';
import Panel from 'components/Panel';
import { useCreatePostMutation } from 'generated/graphql';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostFormProps {}

const PostForm: FC<PostFormProps> = (props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [createPost] = useCreatePostMutation({ fetchPolicy: 'no-cache' });
  const onSubmit = (values) => {
    setLoading(true);
    createPost({
      variables: {
        createPostInput: values,
      },
    })
      .then((response) => {
        if (response?.data?.createPost?.success) {
          message.success('Post added!');
          navigate('/posts');
        } else {
          message.error(
            response?.data?.createPost?.message || 'Unexpected error!'
          );
        }

        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
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
          <Panel>
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
              />

              <IFormItem noStyle name="text">
                <IInput hidden />
              </IFormItem>
              <IFormItem>
                <IButton
                  type="primary"
                  onClick={form.submit}
                  className="pull-right"
                  loading={loading}
                >
                  Submit
                </IButton>
              </IFormItem>
            </Form>
          </Panel>
        </div>
      </div>
    </>
  );
};

export default PostForm;

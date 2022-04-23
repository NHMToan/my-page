import Button from 'components/Button';
import Input from 'components/Form/Input';
import Textarea from 'components/Form/Textarea';
import Panel from 'components/Panel';
import { Form, Formik } from 'formik';
import { FC } from 'react';

interface PostFormProps {}
const PostForm: FC<PostFormProps> = (props) => {
  return (
    <>
      <div className="blog-page-section">
        <div className="container">
          <div className="blog-single shadow-dark p-30">
            <Button
              label="Posts"
              type="link"
              link="/posts"
              style={{ fontSize: 18 }}
            />
          </div>
        </div>
      </div>
      <div className="spacer" data-height="30"></div>
      <div className="blog-page-section">
        <div className="container">
          <Panel>
            <div style={{ maxWidth: 750 }}>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Input type="text" name="title" label="Title" />
                    <Textarea name="text" label="Content" />
                    <div className="i-row">
                      <div className="col-12">
                        <Button
                          htmlType="submit"
                          disabled={isSubmitting}
                          label="Post"
                          className="pull-right"
                        />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
};

export default PostForm;

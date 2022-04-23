import Button from 'components/Button';
import Markdown from 'markdown-to-jsx';
import { FC, useEffect, useState } from 'react';
import { fakeBlogsData } from '../_mock';

interface PostDetailsProps {}
const PostDetails: FC<PostDetailsProps> = (props) => {
  const [content, setContent] = useState('');

  const postFile = fakeBlogsData[1].filesource;

  useEffect(() => {
    import(`../../../assets/blogs/${postFile}`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((result) => result.text())
          .then((result) => setContent(result));
      });
  }, [content, postFile]);
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
          <div className="blog-single shadow-dark p-30">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

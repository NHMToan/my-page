import BraftEditor, { BraftEditorProps } from 'braft-editor';
import { FC } from 'react';
import './index.scss';

interface RichTextProps extends BraftEditorProps {}
const RichText: FC<RichTextProps> = ({ ...props }) => {
  return (
    <div className="editor-container">
      <BraftEditor id="editor-with-code-highlighter" language="en" {...props} />
    </div>
  );
};

export default RichText;

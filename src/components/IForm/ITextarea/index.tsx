import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import { FC } from 'react';

interface ITextareaProps extends TextAreaProps {}
const ITextarea: FC<ITextareaProps> = ({ ...props }) => {
  return <Input.TextArea {...props} />;
};

export default ITextarea;

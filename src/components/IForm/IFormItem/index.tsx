import { Form, FormItemProps } from 'antd';
import { FC } from 'react';

interface IFormItemProps extends FormItemProps {}
const IFormItem: FC<IFormItemProps> = ({ children, ...props }) => {
  return <Form.Item {...props}>{children}</Form.Item>;
};

export default IFormItem;

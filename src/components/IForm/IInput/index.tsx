import { Input, InputProps } from 'antd';
import { FC } from 'react';

interface IInputProps extends InputProps {}
const IInput: FC<IInputProps> = ({ ...props }) => {
  return <Input {...props} />;
};

export default IInput;

import { Select, SelectProps } from 'antd';
import { FC } from 'react';

interface ISelectProps extends SelectProps {}
const ISelect: FC<ISelectProps> = ({ ...props }) => {
  return <Select {...props} />;
};

export default ISelect;

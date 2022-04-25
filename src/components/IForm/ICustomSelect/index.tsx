import { Divider, Select, SelectProps, Space, Typography } from 'antd';
import Icon from 'components/Icon';
import { FC, useState } from 'react';
import IInput from '../IInput';

interface ICustomSelectProps extends SelectProps {
  defaultOptions: string[];
}
let index = 0;
const ICustomSelect: FC<ICustomSelectProps> = ({
  defaultOptions,
  ...props
}) => {
  const [items, setItems] = useState(defaultOptions);
  const [name, setName] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
  };
  return (
    <Select
      style={{ width: 300 }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space align="center" style={{ padding: '0 8px 4px' }}>
            <IInput
              placeholder="Please enter item"
              value={name}
              onChange={onNameChange}
            />
            <Typography.Link onClick={addItem} style={{ whiteSpace: 'nowrap' }}>
              <Icon icon="plus" /> Add item
            </Typography.Link>
          </Space>
        </>
      )}
      {...props}
    >
      {items.map((item) => (
        <Select.Option key={item}>{item}</Select.Option>
      ))}
    </Select>
  );
};

export default ICustomSelect;

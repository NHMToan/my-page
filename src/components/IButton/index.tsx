import { Button, ButtonProps } from 'antd';
import { FC } from 'react';

interface IButtonProps extends ButtonProps {}
const IButton: FC<IButtonProps> = ({ children, className, ...props }) => {
  const handleClass = () => {
    let classes = 'i-button';
    if (className) classes += ` ${className}`;
    return classes;
  };
  return (
    <Button className={handleClass()} {...props}>
      {children}
    </Button>
  );
};

export default IButton;

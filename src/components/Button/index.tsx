import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties, FC, ReactNode } from 'react';
import { Link, To } from 'react-router-dom';
import Icon from '../Icon';
interface ButtonProps {
  onClick?: () => void;
  link?: To;
  type?: 'default' | 'danger' | 'primary' | 'link';
  label?: string;
  children?: ReactNode;
  icon?: IconProp;
  iconPosition?: 'right' | 'left';
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  htmlType?: 'submit';
}
const Button: FC<ButtonProps> = ({
  type = 'default',
  iconPosition = 'left',
  link,
  children,
  icon,
  label,
  onClick = () => {},
  style,
  className,
  htmlType,
}) => {
  const handleClass = () => {
    let classes = 'btn';
    if (type === 'default') classes += ' btn-default';
    if (type === 'primary') classes += ' btn-primary';
    if (type === 'danger') classes += ' btn-danger';
    if (type === 'link') classes += ' btn-link';
    if (className) classes += ` ${className}`;

    return classes;
  };

  const handleLabel = () => {
    if (children) return children;
    if (icon) {
      if (label)
        return (
          <span>
            {iconPosition === 'left' && (
              <Icon icon={icon} style={{ marginRight: 8 }} />
            )}
            {label}
            {iconPosition === 'right' && (
              <Icon icon={icon} style={{ marginLeft: 8 }} />
            )}
          </span>
        );

      return <Icon icon={icon} />;
    }
    return <span>{label}</span>;
  };

  if (link)
    return (
      <Link to={link} className={handleClass()} style={style}>
        {handleLabel()}
      </Link>
    );
  return (
    <button
      className={handleClass()}
      onClick={onClick}
      style={style}
      type={htmlType}
    >
      {handleLabel()}
    </button>
  );
};

export default Button;

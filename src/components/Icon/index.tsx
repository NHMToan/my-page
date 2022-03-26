import {
  FontAwesomeIcon as Icon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface SNIconProps extends FontAwesomeIconProps {}
const SNIcon: FC<SNIconProps> = ({
  color,
  style,
  icon,
  name,
  className,
  ...props
}) => {
  if (!icon) return null;

  if (typeof icon === 'string')
    return (
      <Icon
        {...props}
        className={`sn-icon ${className || ''}`}
        icon={['far', icon]}
        aria-hidden="true"
        style={{ color: color, ...style }}
      />
    );

  return (
    <Icon
      {...props}
      className={`${className || ''}`}
      icon={icon}
      aria-hidden="true"
      style={{ color: color, ...style }}
    />
  );
};
export default SNIcon;

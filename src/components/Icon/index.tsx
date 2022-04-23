import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface SNIconProps extends FontAwesomeIconProps {}
const Icon: FC<SNIconProps> = ({
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
      <FontAwesomeIcon
        {...props}
        className={`sn-icon ${className || ''}`}
        icon={['far', icon]}
        aria-hidden="true"
        style={{ color: color, ...style }}
      />
    );

  return (
    <FontAwesomeIcon
      {...props}
      className={`${className || ''}`}
      icon={icon}
      aria-hidden="true"
      style={{ color: color, ...style }}
    />
  );
};
export default Icon;

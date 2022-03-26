import { CSSProperties, FC } from 'react';
import './index.scss';
interface AvatarProps {
  src: any;
  alt?: string;
  size?: number | 'large' | 'small' | 'default';
  style?: CSSProperties;
  className?: string;
}
const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size = 'default',
  style,
  className,
}) => {
  const handleSize = () => {
    if (typeof size === 'number') {
      return { width: size, height: size, lineHeight: size };
    }
    if (size === 'default') {
      return {};
    }
    if (size === 'large') {
      return { width: 40, height: 40, lineHeight: 40 };
    }
    if (size === 'small') {
      return { width: 24, height: 24, lineHeight: 24 };
    }
  };
  return (
    <span
      className={'t-avatar t-avatar-circle t-avatar-image ' + className}
      style={{ ...style, ...handleSize() }}
    >
      <img src={src} alt={alt || '#'}></img>
    </span>
  );
};

export default Avatar;

import { CSSProperties, FC, ReactNode } from 'react';
import './index.scss';

interface PanelProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}
const Panel: FC<PanelProps> = ({ children, className, style }) => {
  const handleClassName = () => {
    let classes = 'panel';
    if (className) classes += ` ${className}`;
    return classes;
  };
  return (
    <div className={handleClassName()} style={style}>
      {children}
    </div>
  );
};

export default Panel;

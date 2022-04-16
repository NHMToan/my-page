import { FC, ReactNode } from 'react';
import './index.scss';
interface AuthContainerProps {
  title?: string;
  children?: ReactNode;
}
const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-content">{children}</div>
    </div>
  );
};

export default AuthContainer;

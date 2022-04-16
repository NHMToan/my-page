import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainer from '../AuthContainer';
import './index.scss';
interface LoginProps {}
const Login: FC<LoginProps> = (props) => {
  const navigate = useNavigate();
  return (
    <AuthContainer>
      <div className="login-container">
        <div className="login-title-content">
          <div className="login-title">Admin login</div>
          <div className="login-title-desc">
            Only admin is authenticated to login
          </div>
        </div>
        <div className="login-form">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              name="email"
              placeholder="Email address"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Input password"
            />
          </div>
          <button
            name="submit"
            id="submit"
            value="Submit"
            className="btn btn-default"
            style={{ width: '100%' }}
            onClick={() => {
              navigate('/');
            }}
          >
            Login
          </button>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Login;

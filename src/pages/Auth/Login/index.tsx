import { useAuthContext } from 'contexts/AuthContext';
import { useLoginMutation } from 'generated/graphql';
import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JWTManager from '../../../utils/jwt';
import AuthContainer from '../AuthContainer';
import './index.scss';
interface LoginProps {}
const Login: FC<LoginProps> = (props) => {
  const { setIsAuthenticated } = useAuthContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login] = useLoginMutation();

  const navigate = useNavigate();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login({
      variables: { loginInput: { username, password } },
    });

    if (response.data?.login.success) {
      JWTManager.setToken(response.data.login.accessToken as string);
      setIsAuthenticated(true);
      navigate('..');
    } else {
      if (response.data?.login.message) setError(response.data.login.message);
    }
  };

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
          {error && <h3 style={{ color: 'red' }}>{error}</h3>}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="username"
                className="form-control"
                id="UserName"
                name="username"
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Input password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              name="submit"
              id="submit"
              value="Submit"
              className="btn btn-default"
              style={{ width: '100%' }}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Login;

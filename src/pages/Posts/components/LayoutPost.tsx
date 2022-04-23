import Button from 'components/Button';
import { AuthContext } from 'contexts/AuthContext';
import { useLogoutMutation } from 'generated/graphql';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import JWTManager from '../../../utils/jwt';
const LayoutPost = (props) => {
  const { isAuthenticated, logoutClient } = useContext(AuthContext);
  const [logoutServer] = useLogoutMutation();
  const logout = async () => {
    logoutClient();

    await logoutServer({
      variables: { userId: JWTManager.getUserId()?.toString() as string },
    });
  };
  const headerAuthBtnRender = () => {
    if (isAuthenticated)
      return (
        <Button
          onClick={() => {
            logout();
          }}
          label="Logout"
          type="primary"
        />
      );

    return <Button label="Login" link="/login" />;
  };
  return (
    <>
      <header className={'desktop-header-3 fixed-top light'}>
        <div className="container">
          <div className="header-login-btn">
            <Button label="Back to home" icon={['fas', 'house']} link="/" />
            {headerAuthBtnRender()}
          </div>
        </div>
      </header>

      <main className="content-3">
        <div className="spacer" data-height="96"></div>
        <Outlet />
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
};

export default LayoutPost;

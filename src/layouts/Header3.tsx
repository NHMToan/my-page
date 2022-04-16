import { useAuthContext } from 'contexts/AuthContext';
import { useLogoutMutation } from 'generated/graphql';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import JWTManager from '../utils/jwt';
interface Header3Props {
  light?: boolean;
}
function Header3({ light }: Header3Props) {
  const { isAuthenticated, logoutClient } = useAuthContext();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [logoutServer] = useLogoutMutation();

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener('click', (e: any) => {
    if (e.target.closest('.content-3')) {
      setToggleNavbar(false);
    }
  });
  const logout = async () => {
    logoutClient();

    await logoutServer({
      variables: { userId: JWTManager.getUserId()?.toString() as string },
    });
  };
  const headerAuthBtnRender = () => {
    if (isAuthenticated)
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      );

    return (
      <RouterLink className="btn btn-primary" to="/login">
        Login
      </RouterLink>
    );
  };
  return (
    <header
      className={
        light
          ? 'desktop-header-3 fixed-top light'
          : 'desktop-header-3 fixed-top'
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? 'collapse navbar-collapse show'
                : 'collapse navbar-collapse'
            }
            id="navbarNavDropdown"
            style={{ gap: 8 }}
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-experiences"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-certificates"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-works"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Recent Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-quotes"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Quotes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-login-btn">{headerAuthBtnRender()}</div>
        </nav>
      </div>
    </header>
  );
}

export default Header3;

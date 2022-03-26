import SNIcon from 'components/Icon';
import { FC } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../elements/Logo';
interface HeaderProps {
  light?: boolean;
  logoSource?: any;
  toggleMenu?: any;
  headerToggler?: any;
}
const Header: FC<HeaderProps> = ({
  light,
  logoSource,
  toggleMenu,
  headerToggler,
}) => {
  const handleClasses = () => {
    let classes = 'desktop-header-1 d-flex align-items-start flex-column';
    if (light && toggleMenu) {
      classes += ' light open';
    } else if (toggleMenu) {
      classes += ' open';
    } else if (light) {
      classes += ' light';
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = 'mobile-header-1';
    if (light && toggleMenu) {
      classes += ' light open';
    } else if (toggleMenu) {
      classes += ' open';
    } else if (light) {
      classes += ' light';
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          <Logo logoSource={logoSource} />
        </div>
      </header>
      <header className={handleClasses()}>
        <Logo logoSource={logoSource} />
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'house']}
                  style={{ marginRight: 10, width: 14 }}
                />
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'user']}
                  style={{ marginRight: 10, width: 14 }}
                />
                About
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="section-services"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'briefcase']}
                  style={{ marginRight: 8, width: 14 }}
                />
                Services
              </Link>
            </li> */}
            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'graduation-cap']}
                  style={{ marginRight: 10, width: 14 }}
                />
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-works"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'layer-group']}
                  style={{ marginRight: 10, width: 14 }}
                />
                Works
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-quotes"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'bookmark']}
                  style={{ marginRight: 10, width: 14 }}
                />
                Quotes
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <SNIcon
                  icon={['fas', 'comment-alt-dots']}
                  style={{ marginRight: 10, width: 14 }}
                />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright"></span>
        </div>
      </header>
    </>
  );
};

export default Header;

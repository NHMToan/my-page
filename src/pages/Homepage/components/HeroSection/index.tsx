import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/Avatar';
import SNIcon from 'components/Icon';
import { Link } from 'react-scroll';
import Typed from 'react-typed';
import './index.scss';
function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? 'home d-flex align-items-center light'
          : 'home d-flex align-items-center'
      }
    >
      <div className="container">
        <div className="intro">
          <Avatar
            src="images/avatar.jpeg"
            alt="Toan"
            className="mb-4"
            size={120}
          />
          <h1 className="mb-2 mt-0">Nguyen Toan</h1>
          <p>
            I'm a{' '}
            <Typed
              strings={['UI/UX designer ', 'Front-End developer']}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/toan.nguyenhuynhminh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SNIcon icon={['fab', 'facebook']} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/NHMToan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SNIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/toan-nguyen-a5b2501b0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SNIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          <FontAwesomeIcon
            icon={['fal', 'lightbulb-on']}
            className="layer p1"
            fontSize={24}
            color="#FFD15C"
            style={activeParallax(15)}
          />

          <FontAwesomeIcon
            icon={['fal', 'rocket']}
            fontSize={24}
            className="layer p2"
            color="#FF4C60"
            style={activeParallax(20)}
          />

          <FontAwesomeIcon
            icon={['fal', 'deer']}
            fontSize={35}
            className="layer p3"
            color="#44D7B6"
            style={activeParallax(25)}
          />

          <FontAwesomeIcon
            icon={['fal', 'cloud-hail']}
            fontSize={34}
            className="layer p4"
            color="#FFD15C"
            style={activeParallax(10)}
          />

          <FontAwesomeIcon
            icon={['fal', 'bell-on']}
            fontSize={34}
            className="layer p5"
            color="#6C6CE5"
            style={activeParallax(8)}
          />

          <FontAwesomeIcon
            icon={['fal', 'balance-scale']}
            fontSize={32}
            className="layer p6"
            color="#FF4C60"
            style={activeParallax(18)}
          />

          <FontAwesomeIcon
            icon={['fal', 'globe']}
            fontSize={28}
            className="layer p7"
            color="#FFD15C"
            style={activeParallax(22)}
          />

          <FontAwesomeIcon
            icon={['fal', 'book-heart']}
            fontSize={35}
            className="layer p8"
            color="#6C6CE5"
            style={activeParallax(15)}
          />

          <FontAwesomeIcon
            icon={['fal', 'hand-holding-seedling']}
            fontSize={34}
            className="layer p9"
            color="#6C6CE5"
            style={activeParallax(10)}
          />

          <FontAwesomeIcon
            icon={['fal', 'seedling']}
            fontSize={34}
            className="layer p10"
            color="#44D7B6"
            style={activeParallax(23)}
          />

          <FontAwesomeIcon
            icon={['fal', 'chart-line']}
            fontSize={32}
            className="layer p11"
            color="#FFD15C"
            style={activeParallax(18)}
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;

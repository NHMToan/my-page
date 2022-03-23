import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  logoSource?: string;
  bootstrapNav?: boolean;
}
const Logo: FC<LogoProps> = ({ logoSource, bootstrapNav }) => {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Toan" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img src={logoSource} alt="Toan" />
      </Link>
    </div>
  );
};

export default Logo;

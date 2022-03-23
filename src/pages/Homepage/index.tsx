import Header from 'components/layouts/Header';
import Contact from 'components/sections/Contact';
import Experiences from 'components/sections/Experiences';
import Services from 'components/sections/Services';
import Works from 'components/sections/Works';
import { FC, useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import About from './components/AboutSection';
import Herosection from './components/HeroSection';

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => {
  document.body.classList.remove('dark');

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener('click', function (e: any) {
    if (e.target.closest('.content')) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <Header
        light
        logoSource="images/logo-dark.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? 'content open' : 'content'}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection light />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
};

export default Homepage;

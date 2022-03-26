import Header from 'components/layouts/Header';
import { FC, useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import About from './components/AboutSection';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Herosection from './components/HeroSection';
import Quotes from './components/Quotes';
import Works from './components/Works';

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
      <Header light toggleMenu={toggleMenu} headerToggler={headerToggler} />
      <main className={toggleMenu ? 'content open' : 'content'}>
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection light />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-quotes">
          <Quotes />
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

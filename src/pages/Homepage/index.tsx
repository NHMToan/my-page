import Header3 from 'layouts/Header3';
import { FC } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import About from './components/AboutSection';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Herosection from './components/HeroSection';
import PostsSection from './components/PostsSection';
import Quotes from './components/Quotes';

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => {
  document.body.classList.remove('dark');

  return (
    <>
      <Header3 light />
      <main className="content-3">
        <div id="section-home">
          <ReactCursorPosition>
            <Herosection light />
          </ReactCursorPosition>
        </div>
        <div id="section-about">
          <About />
        </div>
        <div id="section-experiences">
          <Experiences />
        </div>
        <div id="section-certificates">
          <Certificates />
        </div>
        <div id="section-posts">
          <PostsSection />
        </div>
        <div id="section-quotes">
          <Quotes />
        </div>
        <div id="section-contact">
          <Contact />
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
};

export default Homepage;

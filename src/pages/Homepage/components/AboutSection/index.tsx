import Avatar from 'components/Avatar';
import Pagetitle from 'components/elements/Pagetitle';
import Skill from 'components/elements/Skill';
import Skills, { SkillsItemData } from 'components/elements/Skills';

const aboutContent = {
  name: 'Toan',
  avatarImage: '/images/avatar.jpeg',
  content:
    'I am Toan, web developer from Ho Chi Minh city, Vietnam. I have rich experience in website design and building and customization, also I am able to work as back-end developer with NodeJs, GraphQL.',
};

const progressData = [
  {
    id: 1,
    title: 'Front-end Development',
    percantage: 90,
    progressColor: '#FFD15C',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    percantage: 80,
    progressColor: '#FF4C60',
  },
  {
    id: 3,
    title: 'Back-end Development',
    percantage: 70,
    progressColor: '#1890ff',
  },
];

const counterData: SkillsItemData[] = [
  {
    id: 1,
    title: 'Front-end',
    description:
      'Javascript(React, jQuery), Typescript, HTML, CSS(SASS,SCSS,LESS),...',
    icon: 'browser',
  },
  {
    id: 2,
    title: 'Back-end',
    description: 'Python (Django), NodeJs',
    icon: 'cogs',
  },
  {
    id: 3,
    title: 'Tools',
    description: 'Jest, Redux, Flux, Graphql,...',
    icon: 'tools',
  },
  {
    id: 4,
    title: 'Other',
    description: 'Babel, Webpack, npm, git,...',
    icon: 'toolbox',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <Avatar
                src={aboutContent.avatarImage}
                alt={aboutContent.name}
                size={180}
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a
                      href="/files/mycv.pdf"
                      download
                      className="btn btn-default"
                    >
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <Skill progress={progress} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((skill) => (
            <div key={skill.id} className="col-md-6 col-sm-6">
              <Skills skillsItem={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

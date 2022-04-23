import Pagetitle from 'components/elements/Pagetitle';
import Timeline from 'components/elements/Timeline';
import { FC, useState } from 'react';
import WorkModal from './components/WorkModal';

const educationData = [
  {
    id: 1,
    title: 'Software Engineering',
    years: '2015 - 2019',
    content:
      'Bachelors - Ho Chi Minh university of Foreign Language and Information Technology',
  },
];

interface ExperiencesProps {}
const Experiences: FC<ExperiencesProps> = () => {
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

  const experienceData = [
    {
      id: 1,
      title: 'Website Developer',
      years: '9/2019 - Present (2 years 7 months)',
      content:
        'Taking full responsivebility of the progress of the website development from analysing, designing UI, coding, testing to deploying and maintaining.',
      onclick: () => {
        setDetailsVisible(true);
      },
    },
    {
      id: 2,
      title: 'Front-End Internship - Fresher',
      years: '2018 - 2019',
      content: '',
    },
  ];
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline
                  key={experience.id}
                  education={experience}
                  onClick={experience.onclick}
                />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
      <WorkModal
        isVisible={detailsVisible}
        onClose={() => setDetailsVisible(false)}
      />
    </section>
  );
};

export default Experiences;

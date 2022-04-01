import Pagetitle from 'components/elements/Pagetitle';
import { FC } from 'react';
import WorkCard from './components/WorkCard';

interface WorksProps {}

const works = [
  {
    id: 1,
    title: 'Service node',
    job_title: 'Website developer',
    image: 'images/blog/1.svg',
    date: '09 Sept, 2019',
    country: 'Sweaden',
  },
];
const Works: FC<WorksProps> = ({}) => {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Recent works" />
        <div className="row blog-wrapper">
          {works.map((work) => (
            <div className="col-md-4" key={work.id}>
              <WorkCard data={work} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

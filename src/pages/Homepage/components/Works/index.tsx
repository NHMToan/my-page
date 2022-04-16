import Pagetitle from 'components/elements/Pagetitle';
import { FC, useState } from 'react';
import WorkCard from './components/WorkCard';
import WorkModal from './components/WorkModal';

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
const Works: FC<WorksProps> = () => {
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Recent works" />
        <div className="row blog-wrapper">
          {works.map((work) => (
            <div className="col-md-4" key={work.id}>
              <WorkCard data={work} onOpen={() => setDetailsVisible(true)} />
            </div>
          ))}
        </div>
      </div>
      <WorkModal
        isVisible={detailsVisible}
        onClose={() => setDetailsVisible(false)}
      />
    </section>
  );
};

export default Works;

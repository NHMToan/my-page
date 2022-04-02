import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export interface WorkData {
  id: number;
  title: string;
  job_title: string;
  image: string;
  date: string;
  country: string;
}
interface WorkCardProps {
  data: WorkData;
  onOpen?: any;
}
const WorkCard: FC<WorkCardProps> = ({ data, onOpen }) => {
  if (!data) return null;
  const { title, job_title, image, date, country } = data;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="blog-item rounded bg-white shadow-dark">
        <div className="thumb">
          <a href="!#">
            <span className="category">{job_title}</span>
          </a>
          <div
            onClick={() => {
              if (onOpen) onOpen();
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={image} alt="blog-title" />
          </div>
        </div>
        <div className="details">
          <h4 className="my-0 title">
            <div
              onClick={() => {
                if (onOpen) onOpen();
              }}
              style={{ cursor: 'pointer' }}
            >
              {title}
            </div>
          </h4>
          <ul className="list-inline meta mb-0 mt-2">
            <li className="list-inline-item">{date}</li>
            <li className="list-inline-item">{country}</li>
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default WorkCard;

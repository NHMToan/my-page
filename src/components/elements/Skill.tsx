import { Progress } from 'antd';
import { FC } from 'react';

interface SkillProps {
  progress: any;
  isVisible?: boolean;
}
const Skill: FC<SkillProps> = ({ progress, isVisible }) => {
  const { title, percantage, progressColor } = progress;
  const progressQuery = () => {
    return <Progress percent={percantage} strokeColor={progressColor} />;
  };
  return (
    <div className="skill-item" style={{ marginBottom: 10 }}>
      <div className="skill-info clearfix">
        <h4 className="float-left mt-0" style={{ marginBottom: 4, margin: 0 }}>
          {title}
        </h4>
      </div>
      {progressQuery()}
    </div>
  );
};

export default Skill;

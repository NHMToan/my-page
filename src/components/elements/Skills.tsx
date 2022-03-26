import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SNIcon from 'components/Icon';
import { FC } from 'react';

export interface SkillsItemData {
  title: any;
  description: any;
  icon: IconProp;
  id: any;
}
interface SkillsProps {
  isVisible?: boolean;
  skillsItem: SkillsItemData;
}
const Skills: FC<SkillsProps> = ({ skillsItem, isVisible }) => {
  const { title, description, icon, id } = skillsItem;

  return (
    <div className="fact-item" key={id}>
      <span>
        <SNIcon icon={icon} />
      </span>
      <div className="details">
        <h3 className="mb-0 mt-0 number">{title}</h3>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default Skills;

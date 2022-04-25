interface TimelineProps {
  education: any;
  onClick?: () => void;
}
function Timeline({ education, onClick }: TimelineProps) {
  const { years, title, content } = education;
  return (
    <div className="timeline-container">
      <div className="content">
        <span className="time">{years}</span>
        <h3 className={`title ${onClick ? 'link' : ''}`} onClick={onClick}>
          {title}
        </h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Timeline;

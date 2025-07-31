import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experiences} from "../assets/experiences.jsx";

const Timeline = () => {
    return (
        <VerticalTimeline lineColor="#3b82f6">
            {experiences.map(
                ({
                     type,
                     date,
                     title,
                     subtitle,
                     description,
                     icon,
                     contentStyle,
                     contentArrowStyle,
                     iconStyle,
                 }) => (
                    <VerticalTimelineElement
                        key={`${type}-${date}-${title}`}
                        className={`vertical-timeline-element--${type}`}
                        date={date}
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        icon={icon}
                    >
                        <h3 className="vertical-timeline-element-title">{title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                        <p>{description}</p>
                    </VerticalTimelineElement>
                )
            )}
        </VerticalTimeline>
    );
};

export default Timeline;

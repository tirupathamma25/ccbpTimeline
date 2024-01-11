import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-duration-card">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard

import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-card">
      <div className="title-duration-card">
        <h1 className="title">{courseTitle}</h1>

        <div className="duration-card">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>

      <ul className="un-ordered-btn">
        {tagsList.map(eachItem => (
          <p className="course-name">{eachItem.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

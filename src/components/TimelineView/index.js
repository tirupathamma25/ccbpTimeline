import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeline = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
  }

  return (
    <div style={{width: '800px', height: '950px'}}>
      <h1 className="my-journey-h1">
        MY JOURNEY OF <span className="ccbp-h1">CCBP 4.0</span>
      </h1>

      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimeline(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimelineView

import { CourseItemsProps } from "../../types/data"
import './Course.css'

const CourseItems: React.FC<CourseItemsProps> = (props) => {
    return (
        <div className='course_flex'>
            <div className='course_all'>
                {props.text}
            </div>
            <span className='course_people'>
                {props.number}
            </span>
        </div>
    )
}

export { CourseItems }
import { TeacherItemsProps } from '../../types/data';
import './teacher.css';

const TeacherItems: React.FC<TeacherItemsProps> = (props) => {
    return (
        <div className='teacherItems_container'>
            <div className='teacherItems_papa'>
                <img src={props.img} alt="" className='teacherItems_img' />
            </div>
            <div className="teacherItems_name">
                {props.name}
            </div>
            <div className="teacherItems_job">
                {props.job}
            </div>
            <div className='teacherItems_papa'>
                <div className="teacherItems_button">
                    Биография
                </div>
            </div>
        </div>
    )
}

export { TeacherItems }
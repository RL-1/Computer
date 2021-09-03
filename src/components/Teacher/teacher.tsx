import './teacher.css';
import svg from '../../Svg/Ellipse 1 (Stroke) (3).svg';
import { state } from '../state';
import { TeacherItems } from './teacherItems';
import { TeacherItemsProps } from '../../types/data';

const Teacher:React.FC = () => {

    const teacherItemsMap = state.TeacherElement.map(e=>
        <TeacherItems img = {e.img} job = {e.job} name = {e.name} /> 
    )

    return(
        <div className = 'teacher_container'>
            <div className="teacher_box">
                <div className="teacher_block">
                    <img src={svg} alt="" className="" />
                    <div className="teacher_title">
                        Ваши преподаватели
                    </div>
                </div>
                <div className="teacher_info">
                    {teacherItemsMap}
                </div>
            </div>
        </div>
    )
}

export {Teacher}
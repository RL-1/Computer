import { NavLink } from 'react-router-dom'
import { state } from '../state'
import './Course.css'
import { CourseItems } from './CourseItems'

const Course: React.FC = () => {
    return (
        <div className="course_box">
                <div className='course_container'>
                    <NavLink to='/course_buy' className='course_button'>
                        Заказать курс
                    </NavLink>
                    <div className='course_student'>
                        {state.CourseElements.map(e => <CourseItems text={e.text} number={e.number} />)}
                    </div>
                    <div className='course_line_box'>
                        <CourseItems text='Заработано учениками:' number='400 000₽' />
                        <div className='course_line'>
                            <div className='course_line_gradient' />
                            <div className='course_line_white' />
                        </div>
                        <div className='course_line_money'>
                            <span className='course_done'>0</span>
                            <span className='course_done'>1 000 000₽</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export { Course }
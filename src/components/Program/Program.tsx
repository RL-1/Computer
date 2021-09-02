import './Program.css';
import svg_eclipse_progarm from '../../Svg/Ellipse 1 (Stroke) (2).svg'
import { ProgramItems, ProgramItemsRight } from './ProgramItems';
import { state } from '../state';

const Programs: React.FC = () => {
    const Left = state.ProgramElementLeft.map(e =>
        <ProgramItems week={e.week} text={e.text} />
    )
    const Right = state.ProgramElementRight.map(e =>
        <ProgramItemsRight week={e.week} text={e.text} />
    )
    return (
        <div className='program_container'>
            <div className="program_box">
                <div className='program_svg'>
                    <img src={svg_eclipse_progarm} alt="" className='program_svg_item' />
                </div>
                <div className="program_title">
                    Программа обучение
                </div>
                <div className="program_text">
                    Больше 90% учеников прошли полный курс и смогли<br></br>собрать свой первый компьютер
                </div>
                <div className='program_block_center'>
                    <div className='program__left'>
                        {Left}
                    </div>
                    <span className="program_line" />
                    <div className='program__right'>
                        {Right}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Programs }
import svg_Eclipse from '../../Svg/icon-heading.svg'
import { state } from '../state';
import './Start.css';
import { StartItems } from './StartItems';

const Start:React.FC = () => {

    const startElementsMap = state.StartElement.map(e=>
        <StartItems percent = {e.percent} text = {e.text} height = {e.height} tops = {e.tops} bottom = {e.bottom}/>
    )
    return(
        <div className = 'start_container'>
            <div className="start_first">
                <div className="start_fast">
                    <img src = {svg_Eclipse}/>
                    <div className="start_fast_text">
                        Быстрый старт
                    </div>
                </div>
                <div className="start_children">
                    Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
                </div>
            </div>
            <div className="start_static">
                {startElementsMap}
            </div>
        </div>
    )
}

export { Start }
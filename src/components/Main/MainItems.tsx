import { MainItemsType } from '../../types/data';
import './Main.css';

const MainItems: React.FC<MainItemsType> = (props) => {
    return <div className='Main_block_time'>
        <div className="main_time">
            {props.time}
        </div>
        <div className='main_title'>
            {props.title}
        </div>
    </div>
}

export { MainItems }

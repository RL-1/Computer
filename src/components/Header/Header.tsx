import svg_logo from '../../Svg/logo.svg';
import './Header.css';
import { HeaderItems } from './HeaderItems';
import { state } from '../state'


const Header: React.FC = () => {
    return (
        <div className='Header_container'>
            <img src={svg_logo} alt="" className='Header_img' />
            <div className='Header_items'>
                {state.HeaderElements.map(e =>
                    <HeaderItems item={e.item} link={e.link} />
                    //where first element it's item. Second it's link
                )}
            </div>
            <span className='Header_button'>Зайти в кабинет</span>
        </div>
    )
}

export { Header };
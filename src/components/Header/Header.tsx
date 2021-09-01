import svg_logo from '../../Svg/logo.svg';
import './Header.css';
import { HeaderItems } from './HeaderItems';
import { state } from '../state'
import { Main } from '../Main/Main';
import { NavLink } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <div className='Header_block_img'>
            <div className='Header_container'>
                <img src={svg_logo} alt="" className='Header_img' />
                <div className='Header_items'>
                    {state.HeaderElements.map(e =>
                        <HeaderItems item={e.item} link={e.link} />
                    )}
                </div>
                <NavLink to='/'>
                    <span className='Header_button'>
                        Зайти в кабинет
                    </span>
                </NavLink>
            </div>
            <Main />
        </div>
    )
}

export { Header };
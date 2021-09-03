import { state } from '../state';
import './footer.css';
import { FooterItems } from './footerItems';

const Footer: React.FC = () => {

    const footerItemsMap = state.FooterElement.map(e =>
        <FooterItems svg={e.svg} />
    )

    return (
        <div className='footer_container'>
            <div className="footer_box">
                <div className="footer_title">
                    Статьи каждую неделю
                </div>
                <div className="footer_text">
                Больше 90% учеников прошли полный курс и смогли<br></br>
                собрать свой первый компьютер
                </div>
                <div className='footer_block_find'>
                    <input type="text" className = 'footer_email' placeholder = 'E-mail'/>
                    <span className="footer_button">
                        Подписаться
                    </span>
                </div>
            <div className = 'footer_svg_monster'>
                {footerItemsMap}
                </div>
                <div className = 'footer_author'>
                    Роман Любенко
            </div>
            </div>
        </div>
    )
}

export { Footer }
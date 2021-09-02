import './partnerts.css'
import eclipse_svg from '../../Svg/Ellipse 1 (Stroke).svg';
import { PartnertsItems } from './PartnertsItems';
import { state } from '../state';


const Partnerts:React.FC = () => {

    const PartnertsItemsMap = state.PartnertsElemet.map(e=>
        <PartnertsItems img = {e.img} />
    )

    return(
        <div className="partnerts_container">
            <div className="partnerts_box">
                <div className="partnerts_title">
                    <img src={eclipse_svg} alt="" className="" />
                    <span className="partnerts_text">
                        Партнеры - топовые бренды
                    </span>
                </div>
                <div className="partnerts_brend">
                    {   PartnertsItemsMap  }
                </div>
            </div>
        </div>
    )
}

export { Partnerts }
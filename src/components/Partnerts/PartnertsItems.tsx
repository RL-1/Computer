import { PartnertsItemsProps } from '../../types/data'
import './partnerts.css'

const PartnertsItems:React.FC<PartnertsItemsProps> = (props) => {
    return(
        <div className = 'Partnerts_brend_element'>
            <img src={props.img} alt="" className="" />
        </div>
    )
}

export {PartnertsItems}
import { FooterItemsProps } from '../../types/data';
import './footer.css';

const FooterItems:React.FC<FooterItemsProps> = (props) => {
    return(
        <img src = {props.svg} className = 'footer_svg'/>
    )
}

export {FooterItems}
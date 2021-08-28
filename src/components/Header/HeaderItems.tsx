import { NavLink } from "react-router-dom";
import { HeaderItemsProps } from "../../types/Header";
import './Header.css';


const HeaderItems:React.FC<HeaderItemsProps> = (props) => {
    return(
        <NavLink to = {`/${props.link}`}>
            <div className = 'Header_element'>
                {props.item}
            </div>
        </NavLink>
    )
}

export { HeaderItems }
import { StartItemsProps } from "../../types/data"
import './Start.css'

const StartItems:React.FC<StartItemsProps> = (props) => {
    return(
        <div className = 'startItems_element'>
            <div className="startItems_percent">
                {props.percent}
            </div>
            <div className="startItems_block" style = {{height:props.height,marginTop: props.tops, marginBottom:props.bottom}}/>
            <div className = 'startItems_text'>
                {props.text}
            </div>
        </div>
    )
}

export {StartItems}
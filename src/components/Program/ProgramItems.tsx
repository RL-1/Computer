import { ProgramItemsProps } from '../../types/data';
import { state } from '../state';
import './Program.css';

const ProgramItems: React.FC<ProgramItemsProps> = (props) => {


    return (
        <div className='program_block'>
            <div className='program_items'>
                <div className="program_week_block">
                    {props.week}
                </div>
                <div className="program_text_block">
                    {props.text}
                </div>
            </div>
        </div>
    )
}
const ProgramItemsRight: React.FC<ProgramItemsProps> = (props) => {


    return (
        <div className='program_block'>
            <div className='program_items'>
                <div className="program_week_block_right">
                    {props.week}
                </div>
                <div className="program_text_block_right">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export { ProgramItems,ProgramItemsRight }

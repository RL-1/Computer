import { JobItemsProps } from '../../types/data'
import './job.css'

const JobItems: React.FC<JobItemsProps> = (props) => {
    return (
        <div className='job_container_block'>
            <div className='job_block'>
                <img src={props.svg} alt="svg_img" className="job_svg" />
                <div className = 'job_title'>
                    {props.title}
                </div>
                <div className="job_text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export { JobItems }
import { state } from '../state'
import './job.css'
import { JobItems } from './jobItems'

const Job: React.FC = () => {

    const jobElementsMap = state.JobElement.map(e =>
        <JobItems svg={e.svg} text={e.text} title={e.title} />
    )
    return (
        <div className='job_container'>
            <div className="job_box">
                <div className="job_proffesion">
                    Получите профессию прямо сейчас
                </div>
                <div className='job_element'>
                    { jobElementsMap }
                </div>
            </div>
        </div>
    )
}

export { Job }
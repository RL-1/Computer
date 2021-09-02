import { state } from '../state'
import './job.css'
import { JobItems } from './jobItems'

const Job: React.FC = () => {
    return (
        <div className='job_container'>
            <div className="job_box">
                <div className="job_proffesion">
                    Получите профессию прямо сейчас
                </div>
                <div className='job_element'>
                    {state.JobElement.map(e =>
                        <JobItems svg={e.svg} text={e.text} title={e.title} />
                    )}
                </div>
            </div>
        </div>
    )
}

export { Job }
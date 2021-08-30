import '../Main/Main.css'
import { MainTime } from './MainTime'

const Main: React.FC = () => {
    return (
        <div className='Main_container'>
            <div className='Main_title'>
                Первый курс<br></br>
                по компьютерной сборке
            </div>
            <MainTime day = {18} hours={18} minutes={18} seconds={18}/>
        </div>
    )
}

export { Main }
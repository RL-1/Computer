import './work.css';
import svg_computer from '../../Svg/about__img (1).svg'

const Work:React.FC = () => {
    return(
        <div className = 'Work_container'>
            <div className="work_box">
                <div className="work_computer">
                    <img src = {svg_computer}/>
                    <div className = 'work_text_all'>
                        <div className="work_title">
                            Чем мы занимаемся?
                        </div>
                        <div className="work_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Work}
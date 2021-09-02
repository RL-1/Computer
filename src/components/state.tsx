import { HeaderItemsProps } from '../types/data';
import svg_computer from './../Svg/icon-1.svg'
import svg_flash_drive from './../Svg/icon-2.svg'
import svg_usb from './../Svg/icon-3.svg'

let state = {
     HeaderElements:[ //Нужно типизировать
        {item:'Главная', link:'main'},
        {item:'Курсы', link:'course'},
        {item:'Расписание', link:'timetable'},
        {item:'Преподаватели', link:'Teachers'},
        {item:'Рассылка', link:'Newsletter'},
        {item:'Контакты', link: 'Contacts'}
    ],
    CourseElements:[
        {text:'Учеников всего:',number:'200'},
        {text:'Успешно закончили курс:',number:'190'},
    ],
    StartElement:[
        {percent:'100%',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',height:'80px',tops:'20px',bottom:"35px"},
        {percent:'75%',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',height:'60px',tops:'30px',bottom:"45px"},
        {percent:"50%",text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',height:'30px',tops:'45px',bottom:"60px"},
        {percent:'Итог',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.',height:'10px',tops:'55px',bottom:"70px"}
    ],
    JobElement:[
        {svg:svg_computer,title:`Только практические\nнавыки в работе`,text:'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Netus eget velit quisque accumsan\namet tortor. Velit, volutpat egestas fringilla mi\nporttitor tempus. Placerat dui.'},
        {svg:svg_flash_drive,title:'Работа на самом\nсовременном оборудовании',text:'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Netus eget velit quisque accumsan\namet tortor. Velit, volutpat egestas fringilla mi\nporttitor tempus. Placerat dui.'},
        {svg:svg_usb,title:'Сертификация\nпо окончании обучения',text:'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Netus eget velit quisque accumsan\namet tortor. Velit, volutpat egestas fringilla mi\nporttitor tempus. Placerat dui.'}
    ]
}

export {state}
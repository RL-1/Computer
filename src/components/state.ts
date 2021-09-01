import { HeaderItemsProps } from '../types/data';
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
    ]
}

export {state}
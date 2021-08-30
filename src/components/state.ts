import { HeaderItemsProps } from '../types/data';
let state = {
     HeaderElements:[ //Нужно типизировать
        {item:'Главная', link:'main'},
        {item:'Курсы', link:'course'},
        {item:'Расписание', link:'timetable'},
        {item:'Преподаватели', link:'Teachers'},
        {item:'Рассылка', link:'Newsletter'},
        {item:'Контакты', link: 'Contacts'}
    ]
}

export {state}
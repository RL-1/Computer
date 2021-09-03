export interface HeaderItemsProps{
    link:string;
    item:string;
}
export interface MainTimeType {
    day:number;
    hours: number;
    minutes: number;
    seconds: number;
}
export interface MainItemsType{
    time:string;
    title:string;
}
export interface CourseItemsProps{
    text:string,
    number:string,
}
export interface StartItemsProps{
    percent:string,
    text:string,
    height:string,
    tops:string,
    bottom:string,
}
export interface JobItemsProps{
    svg:string,
    title:string,
    text:string,
}

export interface PartnertsItemsProps{
    img:any;
}
export interface ProgramItemsProps{
    week:string,
    text:string,
}
export interface TeacherItemsProps{
    img:any,
    name:string,
    job:string,
}
export interface FooterItemsProps{
    svg:any;
}
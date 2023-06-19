import { Category } from "./categories.interface";

export interface Task_{
    id:string,
    title:string,
    category:Category,
    description:string,
    date: string,
    hour: string,
    isCompleted : boolean,
    isExpired : boolean
}
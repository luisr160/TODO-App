import { Injectable } from '@angular/core';
import { addDays, format, subDays } from 'date-fns';
import { es } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class TaskDateFormatterService {

  
  constructor() { }

  public giveFormat(date:string):string{
    const today = format(new Date(), "yyyy-LL-dd");
    const tomorrow = format( addDays(new Date(), 1) ,"yyyy-LL-dd");
    const yesterday = format( subDays(new Date(), 1) ,"yyyy-LL-dd");

    switch (date){
      case today: 
        return 'Hoy';
      
      case tomorrow:
        return 'Mañana';

      case yesterday:
        return 'Ayer';
      
      default:
        return format(new Date(date), "dd LLL yyyy", {locale:es});
    }

  }

  public giveTimeFormat(time:string):string{
    const [hour, minute] = time.split(':')
    return format(new Date(2022, 4, 19, Number(hour), Number(minute)), "hh:mm a");
  }

  public toNumberFormat(date:string, time:string):number[]{
    const [year, month, day] = date.split('-');
    const [hour,minute] = time.split(':');
    return [Number(year),Number(month),Number(day),Number(hour),Number(minute)];
  }
}

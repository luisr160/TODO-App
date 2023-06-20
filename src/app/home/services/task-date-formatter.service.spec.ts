import { TestBed } from '@angular/core/testing';

import { TaskDateFormatterService } from './task-date-formatter.service';
import { addDays, format, subDays } from 'date-fns';

describe('TaskDateFormatterService', () => {
  let service: TaskDateFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDateFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return time in hh:mm a format', () => {
    const formatedTime = service.giveTimeFormat('13:25', '2023-06-19')
    expect(formatedTime).toBe('01:25 PM');
  });

  it('should return date in dd LLL yyyy (01 JUN 2023) format', () => {
    const formatedDate = service.giveFormat('2023-06-17')
    expect(formatedDate).toBe('16 jun 2023');
  });

  it('should return date as Hoy string', () => {
    const today = format(new Date(), "yyyy-LL-dd");
    const formatedDate = service.giveFormat(today)
    expect(formatedDate).toBe('Hoy');
  });

  it('should return date as Mañana string', () => {
    const tomorrow = format( addDays(new Date(), 1) ,"yyyy-LL-dd");
    const formatedDate = service.giveFormat(tomorrow);
    expect(formatedDate).toBe('Mañana');
  });

  it('should return date as Ayer string', () => {
    const yesterday = format( subDays(new Date(), 1) ,"yyyy-LL-dd");
    const formatedDate = service.giveFormat(yesterday);
    expect(formatedDate).toBe('Ayer');
  });

  it('should return an array of numbers', () => {
    
    const array = service.toNumberFormat('2023-06-19','13:25');
    const allNumbers = array.every((val,i,arr) => typeof arr[0]);

    expect(Array.isArray(array)).toBeTrue();
    expect(allNumbers).toBeTrue();
  });

});

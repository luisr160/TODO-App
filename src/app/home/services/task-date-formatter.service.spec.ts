import { TestBed } from '@angular/core/testing';

import { TaskDateFormatterService } from './task-date-formatter.service';

describe('TaskDateFormatterService', () => {
  let service: TaskDateFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDateFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

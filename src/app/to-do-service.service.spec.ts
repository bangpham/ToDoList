import { TestBed, inject } from '@angular/core/testing';

import { ToDoServiceService } from './to-do-service.service';

describe('ToDoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoServiceService]
    });
  });

  it('should ...', inject([ToDoServiceService], (service: ToDoServiceService) => {
    expect(service).toBeTruthy();
  }));
});

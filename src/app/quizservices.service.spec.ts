import { TestBed, inject } from '@angular/core/testing';

import { QuizservicesService } from './quizservices.service';

describe('QuizservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizservicesService]
    });
  });

  it('should be created', inject([QuizservicesService], (service: QuizservicesService) => {
    expect(service).toBeTruthy();
  }));
});

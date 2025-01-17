import { TestBed } from '@angular/core/testing';

import { VoiceRecognitionService } from './voice-recognition.service';
import {HttpClientModule} from "@angular/common/http";

describe('VoiceRecognitionService', () => {
  let service: VoiceRecognitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(VoiceRecognitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

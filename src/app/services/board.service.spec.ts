import {TestBed} from '@angular/core/testing';

import {BoardService} from './board.service';
import {FormsModule} from '@angular/forms';
import {Ng2ImgMaxModule} from 'ng2-img-max';
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

describe('BoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, Ng2ImgMaxModule, HttpClientModule],
    providers: [{
      provide: Router, useClass: class {
        navigate = jasmine.createSpy('navigate');
      }
    }]
  }));

  it('should be created', () => {
    const service: BoardService = TestBed.inject(BoardService);
    expect(service).toBeTruthy();
  });
});

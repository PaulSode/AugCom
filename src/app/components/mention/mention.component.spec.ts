import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionComponent } from './mention.component';
import {HttpClientModule} from "@angular/common/http";

describe('MentionComponent', () => {
  let component: MentionComponent;
  let fixture: ComponentFixture<MentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

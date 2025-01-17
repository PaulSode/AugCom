import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetConfigurationComponent } from './reset-configuration.component';
import {Ng2ImgMaxModule} from "ng2-img-max";
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from "@angular/common/http";

describe('ResetConfigurationComponent', () => {
  let component: ResetConfigurationComponent;
  let fixture: ComponentFixture<ResetConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetConfigurationComponent ],
      imports: [Ng2ImgMaxModule, MatDialogModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

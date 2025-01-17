import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApplicationThemeComponent} from './application-theme.component';
import {Ng2ImgMaxModule} from "ng2-img-max";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { MatMenuModule } from '@angular/material/menu';

describe('ApplicationThemeComponent', () => {
  let component: ApplicationThemeComponent;
  let fixture: ComponentFixture<ApplicationThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationThemeComponent],
      imports: [Ng2ImgMaxModule, HttpClientModule, MatMenuModule],
      providers: [{
        provide: Router, useClass: class {
          navigate = jasmine.createSpy('navigate');
        }
      }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

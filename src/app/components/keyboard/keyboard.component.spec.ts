import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KeyboardComponent} from './keyboard.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2ImgMaxModule} from 'ng2-img-max';
import {Router} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('KeyboardComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, Ng2ImgMaxModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [],
      declarations: [KeyboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.indexeddbaccessService.loadUsersList();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create subcomponents', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-snap-bar')).not.toBe(null);
    expect(compiled.querySelectorAll('app-usertoolbar')).not.toBe(null);
    expect(compiled.querySelectorAll('app-dialogbar')).not.toBe(null);
  });

  it('should display home page and its elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.boardService.currentPath = '#HOME';
    fixture.detectChanges();
    expect(compiled.querySelector('.add')).toBe(null);
    expect(compiled.querySelector('.editionSettings')).toBe(null);
  });

  it('should display edit functions ', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.userToolBarService.edit = true;
    component.boardService.currentPath = '#HOME';
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.add').length).toEqual(1);
    expect(compiled.querySelector('.editionSettings')).not.toBe(null);
  });

  it('should add clicked element having display action on click to historic', () => {
    component.boardService.currentPath = '#HOME';
    fixture.detectChanges();
    component.action(component.boardService.board.ElementList[0], 'click');
    fixture.detectChanges();
    expect(component.historicService.historic.length).toBeGreaterThan(0);
    component.action(component.boardService.board.ElementList[0], 'click');
    fixture.detectChanges();
    expect(component.historicService.historic.length).toBeGreaterThan(1);
  });

});

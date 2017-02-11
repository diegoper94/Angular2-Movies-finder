/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerieCardComponent } from './serie-card.component';

describe('SerieCardComponent', () => {
  let component: SerieCardComponent;
  let fixture: ComponentFixture<SerieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

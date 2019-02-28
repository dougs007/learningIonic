import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosslidePage } from './carrosslide.page';

describe('CarrosslidePage', () => {
  let component: CarrosslidePage;
  let fixture: ComponentFixture<CarrosslidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosslidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosslidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

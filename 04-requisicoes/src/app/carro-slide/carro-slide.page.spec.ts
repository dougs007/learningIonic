import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroSlidePage } from './carro-slide.page';

describe('CarroSlidePage', () => {
  let component: CarroSlidePage;
  let fixture: ComponentFixture<CarroSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

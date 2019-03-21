import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroGridPage } from './carro-grid.page';

describe('CarroGridPage', () => {
  let component: CarroGridPage;
  let fixture: ComponentFixture<CarroGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

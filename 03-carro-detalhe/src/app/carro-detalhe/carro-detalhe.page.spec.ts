import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetalhePage } from './carro-detalhe.page';

describe('CarroDetalhePage', () => {
  let component: CarroDetalhePage;
  let fixture: ComponentFixture<CarroDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

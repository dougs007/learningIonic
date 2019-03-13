import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosCardPage } from './carros-card.page';

describe('CarrosCardPage', () => {
  let component: CarrosCardPage;
  let fixture: ComponentFixture<CarrosCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

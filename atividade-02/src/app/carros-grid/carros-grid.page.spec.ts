import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosGridPage } from './carros-grid.page';

describe('CarrosGridPage', () => {
  let component: CarrosGridPage;
  let fixture: ComponentFixture<CarrosGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

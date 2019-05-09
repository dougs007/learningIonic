import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFormPage } from './curso-form.page';

describe('CursoFormPage', () => {
  let component: CursoFormPage;
  let fixture: ComponentFixture<CursoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

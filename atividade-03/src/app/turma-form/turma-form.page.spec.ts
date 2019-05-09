import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaFormPage } from './turma-form.page';

describe('TurmaFormPage', () => {
  let component: TurmaFormPage;
  let fixture: ComponentFixture<TurmaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

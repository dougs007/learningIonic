import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosFormPage } from './produtos-form.page';

describe('ProdutosFormPage', () => {
  let component: ProdutosFormPage;
  let fixture: ComponentFixture<ProdutosFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

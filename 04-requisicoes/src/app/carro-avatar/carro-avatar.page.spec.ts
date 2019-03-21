import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroAvatarPage } from './carro-avatar.page';

describe('CarroAvatarPage', () => {
  let component: CarroAvatarPage;
  let fixture: ComponentFixture<CarroAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosAvatarPage } from './carros-avatar.page';

describe('CarrosAvatarPage', () => {
  let component: CarrosAvatarPage;
  let fixture: ComponentFixture<CarrosAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

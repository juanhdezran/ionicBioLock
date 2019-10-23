import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockScreenPage } from './lock-screen.page';

describe('LockScreenPage', () => {
  let component: LockScreenPage;
  let fixture: ComponentFixture<LockScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

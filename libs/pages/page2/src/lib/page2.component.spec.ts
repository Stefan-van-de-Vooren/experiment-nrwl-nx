import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { page2Component } from './page2.component';

describe('page2Component', () => {
  let component: page2Component;
  let fixture: ComponentFixture<page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ page2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

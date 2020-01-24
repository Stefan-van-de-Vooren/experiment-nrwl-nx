import { async, TestBed } from '@angular/core/testing';
import { Page1Module } from './page1.module';

describe('Page1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Page1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Page1Module).toBeDefined();
  });
});

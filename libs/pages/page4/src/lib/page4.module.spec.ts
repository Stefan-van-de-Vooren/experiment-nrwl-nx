import { async, TestBed } from '@angular/core/testing';
import { Page4Module } from './page4.module';

describe('Page4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Page4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Page4Module).toBeDefined();
  });
});

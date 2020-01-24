import { async, TestBed } from '@angular/core/testing';
import { Page3Module } from './page3.module';

describe('Page3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Page3Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Page3Module).toBeDefined();
  });
});

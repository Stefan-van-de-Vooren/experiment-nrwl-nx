import { async, TestBed } from '@angular/core/testing';
import { Page2Module } from './page2.module';

describe('Page2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Page2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Page2Module).toBeDefined();
  });
});

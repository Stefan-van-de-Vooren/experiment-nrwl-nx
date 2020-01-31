import { async, TestBed } from '@angular/core/testing';
import { PagesPage1Module } from './pages-page1.module';

describe('PagesPage1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesPage1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesPage1Module).toBeDefined();
  });
});

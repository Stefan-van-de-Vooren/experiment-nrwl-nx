import { async, TestBed } from '@angular/core/testing';
import { UiHeaderModule } from './shell.module';

describe('UiHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiHeaderModule).toBeDefined();
  });
});

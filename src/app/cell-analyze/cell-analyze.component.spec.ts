import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellAnalyzeComponent } from './cell-analyze.component';

describe('CellAnalyzeComponent', () => {
  let component: CellAnalyzeComponent;
  let fixture: ComponentFixture<CellAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

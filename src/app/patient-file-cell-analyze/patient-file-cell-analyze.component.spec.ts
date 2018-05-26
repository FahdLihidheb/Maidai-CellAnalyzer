import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFileCellAnalyzeComponent } from './patient-file-cell-analyze.component';

describe('PatientFileCellAnalyzeComponent', () => {
  let component: PatientFileCellAnalyzeComponent;
  let fixture: ComponentFixture<PatientFileCellAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFileCellAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFileCellAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFilesListComponent } from './patient-files-list.component';

describe('PatientFilesListComponent', () => {
  let component: PatientFilesListComponent;
  let fixture: ComponentFixture<PatientFilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

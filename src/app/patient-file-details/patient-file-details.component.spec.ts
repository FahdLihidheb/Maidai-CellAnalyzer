import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFileDetailsComponent } from './patient-file-details.component';

describe('PatientFileDetailsComponent', () => {
  let component: PatientFileDetailsComponent;
  let fixture: ComponentFixture<PatientFileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantPatientListComponent } from './assistant-patient-list.component';

describe('AssistantPatientListComponent', () => {
  let component: AssistantPatientListComponent;
  let fixture: ComponentFixture<AssistantPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

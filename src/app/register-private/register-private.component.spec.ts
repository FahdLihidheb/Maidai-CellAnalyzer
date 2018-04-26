import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPrivateComponent } from './register-private.component';

describe('RegisterPrivateComponent', () => {
  let component: RegisterPrivateComponent;
  let fixture: ComponentFixture<RegisterPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

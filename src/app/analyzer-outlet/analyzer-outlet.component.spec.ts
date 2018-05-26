import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerOutletComponent } from './analyzer-outlet.component';

describe('AnalyzerOutletComponent', () => {
  let component: AnalyzerOutletComponent;
  let fixture: ComponentFixture<AnalyzerOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAnalyzerComponent } from './sample-analyzer.component';

describe('SampleAnalyzerComponent', () => {
  let component: SampleAnalyzerComponent;
  let fixture: ComponentFixture<SampleAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

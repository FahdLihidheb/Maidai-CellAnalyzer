import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerMenuComponent } from './analyzer-menu.component';

describe('AnalyzerMenuComponent', () => {
  let component: AnalyzerMenuComponent;
  let fixture: ComponentFixture<AnalyzerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

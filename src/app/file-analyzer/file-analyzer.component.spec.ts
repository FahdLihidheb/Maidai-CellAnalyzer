import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAnalyzerComponent } from './file-analyzer.component';

describe('FileAnalyzerComponent', () => {
  let component: FileAnalyzerComponent;
  let fixture: ComponentFixture<FileAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

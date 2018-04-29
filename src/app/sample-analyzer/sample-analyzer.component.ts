import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-analyzer',
  templateUrl: './sample-analyzer.component.html',
  styleUrls: ['./sample-analyzer.component.css']
})
export class SampleAnalyzerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fileEvent($event) {
    const fileSelected: File = $event.target.files[0];
    console.log(fileSelected.name)
  }

}

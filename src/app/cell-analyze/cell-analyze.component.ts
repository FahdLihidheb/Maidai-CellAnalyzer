import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { DevEnv } from '../shared/config';
import { AnalyzeFile } from '../shared/cell-analyzer-service/AnalyzeFile';
import { CellAnalyzeService } from '../shared/cell-analyzer-service/cellAnalyzer.service';
import { analyzeFile } from '@angular/compiler';
import { error } from 'protractor';

@Component({
  selector: 'app-cell-analyze',
  templateUrl: './cell-analyze.component.html',
  styleUrls: ['./cell-analyze.component.css'],
  providers: [CellAnalyzeService]
})
export class CellAnalyzeComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: DevEnv.SERVER + 'api/uploadToAWS', itemAlias: 'imagePath' });

  result: any
  name: string
  analyseFile= new AnalyzeFile('','','','');

  constructor(private _cellAnalyzeService: CellAnalyzeService) { }
  
  ngOnInit() {



    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };
    
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const responseJSON = JSON.parse(response);
      if (responseJSON.err_code === 0) {
        this.result = responseJSON.diagnosis.data;
        this.name= responseJSON.name;
        console.log(responseJSON);
      }
      this.uploader.queue[0].remove();
    };

  }

  saveFile(analyzeFile: AnalyzeFile) {
   
    
    this.analyseFile.diagnosis= this.result;
    this.analyseFile.sampleCellImage= this.name;
    
    console.log(this.analyseFile)
    analyzeFile=this.analyseFile;
    this._cellAnalyzeService.addAnalyseFile(analyzeFile)
      .then(res => {
        console.log(res)
        if (res) {
          console.log("successfully added")
        } else {


        }
      })
      .catch()
  }
}

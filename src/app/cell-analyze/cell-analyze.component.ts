import { Component, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { DevEnv } from '../shared/config';


@Component({
  selector: 'app-cell-analyze',
  templateUrl: './cell-analyze.component.html',
  styleUrls: ['./cell-analyze.component.css']
})
export class CellAnalyzeComponent implements OnInit {



  public uploader: FileUploader = new FileUploader({ url: DevEnv.SERVER + 'api/uploadToAWS', itemAlias: 'imagePath' });

   result: any
  constructor() { }

  ngOnInit() {



    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };
    
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const responseJSON = JSON.parse(response);
      if (responseJSON.err_code === 0) {
        this.result=responseJSON.diagnosis.data;
        console.log(responseJSON);
      }
      this.uploader.queue[0].remove();
    };

  }

}

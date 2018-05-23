import { Component, OnInit } from '@angular/core';
import { Session } from '../shared/Session';
import { AuthService } from '../shared/user-service/auth.service';
import { Doctor } from '../shared/user-service/Doctor';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { DevEnv } from '../shared/config';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {

  profile: Doctor;
  result: any;
  public uploader: FileUploader = new FileUploader({ url: DevEnv.SERVER + 'api/upload', itemAlias: 'imagePath' });


  constructor(private _authService: AuthService) {
    this.profile = new Doctor('', '', '', '', '', '');
    this.profile.privacySettings = {
      isEmail: true,
      isPhonenumber: true
    };
  }

  ngOnInit() {
    this._authService.getCurrentSession()
      .subscribe(doctor => {
        this.profile = doctor;
      });

    const authHeader: Array<{
      name: string;
      value: string;
    }> = [];

    authHeader.push({ name: 'Authorization', value: 'b ' + this._authService.getCurrentToken() });
    const uploadOptions = <FileUploaderOptions>{ headers: authHeader };
    this.uploader.setOptions(uploadOptions);

    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const responseJSON = JSON.parse(response);
      if (responseJSON.err_code === 0) {
        this.profile.imagePath = responseJSON.imagePath;
      }
      this.uploader.queue[0].remove();
    };
  }


  updateCard() {

  }

}

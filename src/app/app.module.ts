import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploadModule } from 'ng2-file-upload';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlwaysAuthGuard } from './shared/alwaysAuthGuard';
import { AlwaysNotAuthGuard } from './shared/alwaysNotAuthGuard';
import { ProfileComponent } from './profile/profile.component';

// service
import { AuthService } from './shared/user-service/auth.service';
import { RegisterComponent } from './register/register.component';
import { RegisterPrivateComponent } from './register-private/register-private.component';
import { RegisterEnterpriseComponent } from './register-enterprise/register-enterprise.component';
import { PricingListComponent } from './pricing-list/pricing-list.component';
import { RegisterProComponent } from './register-pro/register-pro.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { PatientFilesComponent } from './patient-files/patient-files.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AlwaysNotAuthGuard] },
  {
    path: 'register', component: RegisterComponent, canActivate: [AlwaysNotAuthGuard], children: [
      { path: '', redirectTo: 'pricing', pathMatch: 'full' },
      { path: 'pricing', component: PricingListComponent },
      { path: 'private-free', component: RegisterPrivateComponent },
      { path: 'private-pro', component: RegisterProComponent },
      { path: 'enterprise', component: RegisterEnterpriseComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AlwaysAuthGuard], children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'patients', component: PatientFilesComponent },
      { path: 'analyzer', component: AnalyzerComponent },
      { path: 'appoinments', component: AppoinmentComponent }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    RegisterComponent,
    RegisterPrivateComponent,
    RegisterEnterpriseComponent,
    PricingListComponent,
    RegisterProComponent,
    AnalyzerComponent,
    AppoinmentComponent,
    PatientFilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatIconModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-R3bAtHNQmGa5IuyUaUxlkBc1IV5UEWk'
    }),
    CloudinaryModule.forRoot(
      { Cloudinary }, { cloud_name: 'drtg6wmwx' } as CloudinaryConfiguration
    )
  ],
  providers: [AlwaysAuthGuard, AlwaysNotAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  }
}

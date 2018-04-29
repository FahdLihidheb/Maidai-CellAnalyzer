import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnalyzerComponent } from './analyzer/analyzer.component';
import { AlwaysAuthGuard } from './shared/alwaysAuthGuard';
import { ProfileComponent } from './profile/profile.component';
import { PatientsComponent } from './patients/patients.component';

//service
import { AuthService } from './shared/user-service/auth.service';
import { RegisterComponent } from './register/register.component';
import { RegisterPrivateComponent } from './register-private/register-private.component';
import { RegisterEnterpriseComponent } from './register-enterprise/register-enterprise.component';
import { PricingListComponent } from './pricing-list/pricing-list.component';
import { RegisterProComponent } from './register-pro/register-pro.component';
import { SampleAnalyzerComponent } from './sample-analyzer/sample-analyzer.component';
import { AnalyzerMenuComponent } from './analyzer-menu/analyzer-menu.component';
import { FileAnalyzerComponent } from './file-analyzer/file-analyzer.component';
import { MyPatientsListComponent } from './my-patients-list/my-patients-list.component';
import { AssistantPatientListComponent } from './assistant-patient-list/assistant-patient-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'register', component: RegisterComponent, children: [
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
      { path: 'patients', component: PatientsComponent, children: [
        { path: '', redirectTo: 'myPatients', pathMatch: 'full' },
        { path: 'myPatients', component: MyPatientsListComponent },
        { path: 'assistantPatients', component: AssistantPatientListComponent },
      ] },
      {
        path: 'analyzer', component: AnalyzerComponent, children: [
          { path: '', redirectTo: 'menu', pathMatch: 'full' },
          { path: 'menu', component: AnalyzerMenuComponent },
          { path: 'sample-analyzer', component: SampleAnalyzerComponent },
          { path: 'file-analyzer', component: FileAnalyzerComponent },
        ]
      }
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
    AnalyzerComponent,
    ProfileComponent,
    PatientsComponent,
    RegisterComponent,
    RegisterPrivateComponent,
    RegisterEnterpriseComponent,
    PricingListComponent,
    RegisterProComponent,
    SampleAnalyzerComponent,
    AnalyzerMenuComponent,
    FileAnalyzerComponent,
    MyPatientsListComponent,
    AssistantPatientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-R3bAtHNQmGa5IuyUaUxlkBc1IV5UEWk'
    })
  ],
  providers: [AlwaysAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

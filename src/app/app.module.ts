import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


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
      { path: 'patients', component: PatientsComponent },
      {
        path: 'analyzer', component: AnalyzerComponent, children: [
          { path: 'sample-analyzer', component: SampleAnalyzerComponent },
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
    SampleAnalyzerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AlwaysAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

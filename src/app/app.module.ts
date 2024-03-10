import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AttendanceMgmtComponent } from './AttendanceMgmt/Components/attendance-mgmt/attendance-mgmt.component';

import { UsermgmtComponent } from './UserMgmt/Component/usermgmt/usermgmt.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './UserMgmt/Component/login/login.component';

import { NavBarComponent } from './UserMgmt/Component/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './UserMgmt/Component/forgotpassword/forgotpassword.component';
import {MatCardModule} from '@angular/material/card';
import { RestpasswordComponent } from './UserMgmt/Component/restpassword/restpassword.component';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavComponent } from './UserMgmt/Component/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { UserComponent } from './UserMgmt/Component/user/user.component';
import { UserViewComponent } from './UserMgmt/Component/user-view/user-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FileUploadComponent } from './ResourceMgmt/Components/file-upload/file-upload.component';
import { AppLayoutComponent } from './Layout/app-layout/app-layout.component';
import { TalentlistComponent } from './ResourceMgmt/Components/talentlist/talentlist.component';
import {  TalenteditComponent } from './ResourceMgmt/Components/talentedit/talentedit.component';
import { AttendanceComponent } from './AttendanceMgmt/Components/attendance/attendance.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { enGbLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { DashboardComponent } from './UserMgmt/Component/dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AttendanceReportComponent } from './AttendanceMgmt/Components/attendance-report/attendance-report.component';
<<<<<<< HEAD
import { DatePipe } from '@angular/common';
import { AsessmentdetailsComponent } from './AssessmentMgmt/Components/asessmentdetails/asessmentdetails.component';
import { DisclaimerComponent } from './Disclaimer/disclaimer/disclaimer.component';
import { ViewassessmentComponent } from './AssessmentMgmt/Components/viewassessment/viewassessment.component';

=======
import { ViewRoleComponent } from './UserMgmt/Component/role/view-role/view-role.component';
import { CreateRoleComponent } from './UserMgmt/Component/role/create-role/create-role.component';
>>>>>>> ab492903afc4dc512e82a851d6cd505b87cc74bc

defineLocale('en-gb', enGbLocale); //
@NgModule({
  declarations: [
    AppComponent,
    AttendanceMgmtComponent,
  
    UsermgmtComponent,
    UserViewComponent,
    UserComponent,
    ForgotpasswordComponent,
    RestpasswordComponent,
    SideNavComponent,
    LoginComponent,
    NavBarComponent,
    FileUploadComponent,
    AppLayoutComponent,
    TalentlistComponent,
    TalenteditComponent,
    AttendanceComponent,
    DashboardComponent,
    AttendanceReportComponent,
<<<<<<< HEAD
    AsessmentdetailsComponent,
    DisclaimerComponent,
    ViewassessmentComponent
=======
    CreateRoleComponent,
    ViewRoleComponent
>>>>>>> ab492903afc4dc512e82a851d6cd505b87cc74bc
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatPaginatorModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})


export class AppModule { }

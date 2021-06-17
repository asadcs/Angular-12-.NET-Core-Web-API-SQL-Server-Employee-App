import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeptComponent } from './department/show-dept/show-dept.component';
import { EditDeptComponent } from './department/edit-dept/edit-dept.component';
import { AddDeptComponent } from './department/add-dept/add-dept.component';
import { EmployeeService } from './Services/employee.service';
import { DepartmentService } from './Services/department.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDeptComponent,
    EditDeptComponent,
    AddDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

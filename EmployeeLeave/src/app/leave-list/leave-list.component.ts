import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
result:any
employeeData:Array<any>;

  constructor(private employeeService:EmployeeService ) {

    employeeService.get().subscribe((data:any)=>this.employeeData = data);
   }

  ngOnInit(): void {
  }

  

}

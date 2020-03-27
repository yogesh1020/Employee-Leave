import { Component , OnInit, ModuleWithComponentFactories } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {  HttpClientModule ,HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmployeeLeave';
emoloyeeFormGroup:FormGroup
days:any = 7 ;
  currentDate = new Date();
  startDate: any;
  dateDiff: any;
  formattedDate = new Date(this.currentDate.getTime() + (this.days * 24 * 60* 60 *1000));
  endDate: any;
  validDate: any;
url:any = 'https://localhost:44307/api/Employees'
body:any

constructor(private formBUilder:FormBuilder , private http:HttpClient , private employeeService:EmployeeService){
  this.validDate = this.formattedDate.toISOString().slice(0,10);
  
}

  
  ngOnInit(): void {
      this.emoloyeeFormGroup =this.formBUilder.group({
        name:['',Validators.required],
      })
      
  }
  dateStart(event){
    this.startDate = event.target.value
    if(this.startDate > '2021-12-31'){
      alert ("Date Is Not Valid")
      window.location.reload()
    }
    if(this.startDate < this.validDate){
      alert("You must Select Date after 7 days from Current Date !")
      window.location.reload();

    }
  }
  dateEnd(event){
this.endDate = event.target.value
if(this.endDate<this.startDate){
 alert(" End Date Is Not Valid !")
 window.location.reload();
}
  }
  submit(){
this.body ={
  name : this.emoloyeeFormGroup.controls.name.value,
startDate:this.startDate,
endDate:this.endDate
}
console.log(this.startDate) 
console.log(this.body)
console.log(this.formattedDate)
console.log(this.validDate)
this.employeeService.post(this.body)
  }

}

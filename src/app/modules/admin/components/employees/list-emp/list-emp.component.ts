import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})


export class ListEmpComponent implements OnInit{
  serverURL: any = environment.apiUrl;
  loader:boolean = false
  empList: any =[]
  addPerformance: FormGroup;
  isPerformance : boolean = false
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  constructor(private web: EmployeeService,private fb: FormBuilder,private toastr: ToastrService,) { }
  ngOnInit(): void {
    this.getEmployees()
    this.addPerformance = this.fb.group({
      addedFor: ['', Validators.required],
      title: ['', Validators.required],
      rating: [null, Validators.required],
    });
  }

  async getEmployees(){
    try {
      this.loader = true
      const result$ = this.web.listUsers();
      const res = await lastValueFrom(result$);
      if(res){
        this.empList = res
        let imegtesttest = this.serverURL + res[7]?.imageURL
        console.log('imegtesttest: ', imegtesttest);
        this.loader = false
      }
    } catch (error) {
      this.loader = false
      this.toastr.error("Something went wrong!");
    }
  }

  countStar(star) {
    this.addPerformance.value.rating = star
    console.log('Value of star', star);
  }

  async createPerformance(){
    try {
      let payload = {
        addedFor : this.addPerformance.value.addedFor,
        title : this.addPerformance.value.title,
        rating : this.addPerformance.value.rating,
       
      }
      this.toastr.info("Adding performance, Please Wait!");
      const result$ = this.web.addPerformance(payload)
      const res = await lastValueFrom(result$)
      if(res){
        this.addPerformance.reset()
        this.isPerformance = false
        this.toastr.success("Performance added successfully!");
      }
    } catch (error) {
      this.toastr.error("Something went wrong!");
    }
  }

  closePerformance(){
    this.addPerformance.reset()
    this.isPerformance = false
  }

  openPerformance(data){
    console.log('data: ', data);
    this.addPerformance.controls['addedFor'].patchValue(data);
    this.isPerformance = true

  }
}

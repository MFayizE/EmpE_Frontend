import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { EmployeeService } from 'src/app/modules/admin/components/employees/employee.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit{
  loader:boolean  = false
  serverURL: any = environment.apiUrl;
  userData: any 
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(private web: EmployeeService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.getMe()

  }
  async getMe(){
    try {
      this.loader = true
      const result$ = this.web.getMe();
      const res = await lastValueFrom(result$);
      if(res){
        this.userData = res
        console.log('this.userData: ', this.userData);
        this.loader = false
      }
    } catch (error) {
      this.toastr.error("Something went wrong!");
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  loader:boolean  = false
  serverURL: any = environment.apiUrl;
  userData: any 
  stars: number[] = [1, 2, 3, 4, 5];
  constructor(private web: EmployeeService) { }
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
      
    }
  }
}

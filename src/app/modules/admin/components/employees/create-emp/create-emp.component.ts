import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss']
})
export class CreateEmpComponent implements OnInit{
  createEmpForm: FormGroup;
  uploadedMedia : any
  url: any
  constructor(private fb: FormBuilder, private router:Router,private toastr: ToastrService, private web : EmployeeService) { }

  ngOnInit(): void {
    this.createEmpForm = this.fb.group({
      salary: [0, Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    });
  }

  uploadMedia(e){
    console.log('e: ', e);
    const file = e.target.files[0]
    console.log('file: ', file);
    this.uploadedMedia = file
    var reader = new FileReader();
        reader.onload = (event: any) => {
          this.url = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    console.log('this.uploadedMedia: ', this.uploadedMedia);
  }

  async onClickSubmit() {
    try {
      if(this.createEmpForm.value.password == this.createEmpForm.value.confirmPassword){
        const fd = new FormData();
        fd.append('profileImage', this.uploadedMedia);
        fd.append('name', this.createEmpForm.value.name);
        fd.append('email', this.createEmpForm.value.email);
        fd.append('password', this.createEmpForm.value.password);
        fd.append('role', this.createEmpForm.value.role);
        fd.append('salary', this.createEmpForm.value.salary);
        this.toastr.info("Please Wait, Creating Employee!");
        const result$ = this.web.createUser(fd);
        const res = await lastValueFrom(result$);
        if (res) {
          this.toastr.success("Employee created successfully!");
          console.log('res: ', res);
        }
      }
      else{
        this.toastr.error("Password does not match!");
      }
      
    } catch (error) {
      this.toastr.error("Something went wrong!");
      // Handle error
    }
  }
}

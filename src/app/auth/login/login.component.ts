import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPass: boolean = true
  passType = 'password'
  clicked: boolean = false
  constructor(private web: AuthService, private fb: FormBuilder,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  async onClickSubmit() {
    let payload = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
    }
    console.log('payload: ', payload);

    try {
      this.toastr.info("Please Wait, logging in!");
      const result$ = this.web.onClickLogin(payload)
      const res = await lastValueFrom(result$);
      console.log('res: ', res);
      if (res['token']) {
        localStorage.setItem('EmpE_accessToken', res['token']);
        localStorage.setItem('EmpE_role', res['role']);
        if(localStorage['EmpE_role'] == 'HR'){
          this.router.navigate(['/admin'])
        }
        else{
          this.router.navigate(['/user'])
        }
        this.toastr.success("Log in successfully!");
      }
    } catch (error) {
      this.clicked = false
      this.toastr.error("Something went wrong!");
    }
  }

}

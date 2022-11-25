import { Component, OnInit } from '@angular/core';
import  {  FormBuilder, FormGroup, Validators, }  from  '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public formLogin: FormGroup = this.formBuilder.group({
    username: ['', [Validators.minLength(5), Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
  });


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public login(formLogin: Login) {
    if (formLogin.username && formLogin.password) {
      this.authLogin(formLogin)
    }
  }

  public authLogin(login: Login) {
    this.authService.login(login).subscribe({
      next: (res) => {
        this.router.navigate(['admin/edit'])
      },
      error: () => this.toastr.error('username or password incorrect', 'login fail')
    })
  }
}

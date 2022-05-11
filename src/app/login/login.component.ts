import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string;
  password!:string


  constructor(private http: HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  login(){
    const userobj={
    "email":this.email,
    "password":this.password
    };
    const url="http://localhost:8080/users/login";
    this.http.post(url,userobj).subscribe((res)=>{
      console.log(res);
      this.toastr.success('successfully logged in');
    },(err:any)=>{
      console.log(err.error);
      this.toastr.error('please enter valid credentials')
    
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  phoneNo!: string;
  ImagePath: string;
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.ImagePath = '/assets/images/movie.jpg'
    
  }

  ngOnInit(): void {
  }
  register() {
    const userObj = {
      "name": this.name,
      "email": this.email,
      "password": this.password,
      "phoneNo": this.phoneNo

    };
    const url = "http://localhost:8080/users/save";
    this.http.post(url, userObj).subscribe((res) => {
      console.log(res);
      this.toastrService.success('Successfully Registered');

    }, (err:any) => {
      console.log(err.error);
      this.toastrService.error('Please Re-enter your Details');
    })

  }

}



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();

  }
  users:any;
  getAllUsers()
  {
    const url="http://localhost:8080/users/list";
    this.http.get(url).subscribe((res)=>{
      this.users =res;
    },err=>{
      console.log("An error occured");
    }
    )
}
usersById:any;
getUserById(id:any){
  const url="http://localhost:8080/users/find/"+id;
  this.http.get(url).subscribe((res)=>{
    this.users =res;
  },err=>{
    console.log("An error occured");
  }
  )


}
}
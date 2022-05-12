import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  user:any;
  id:any;

  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getUser();    
  }
  getUser(){
    const url="http://localhost:8080/users/find/"+this.id;
    this.http.get(url).subscribe(res=>{
      this.user=res;
    })
  }
  updateUser(){
    console.log(this.user);
    const url="http://localhost:8080/users/update/"+this.id;
    this.http.put(url,this.user).subscribe(res=>{
      this.toastr.success('updated');
    })
  }
  

}

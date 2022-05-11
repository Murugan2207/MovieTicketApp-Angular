import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-movielist',
  templateUrl:'./movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  toastrService: any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllMovies();

  }
  movies:any;
  getAllMovies()
  {
    const url="http://localhost:8080/movies/list";
    this.http.get(url).subscribe((res)=>{
      this.movies =res;
    },err=>{
      console.log("An error occured");
    }
    )

}
deleteMovie(id:any){
  let cfm=confirm("Do you want to delete?");
  if (cfm){
    const url="http://localhost:8080/movies/delete/"+id;
    this.http.delete(url).subscribe((res)=>{
      console.log(res);
      this.toastr.success('Successfully Deleted');
      this.getAllMovies();
    },err=>{
      this.toastr.error('An Error Occured');
    }
    )
}
}
}

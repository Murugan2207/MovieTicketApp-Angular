import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymovies',
  templateUrl: './displaymovies.component.html',
  styleUrls: ['./displaymovies.component.css']
})
export class DisplaymoviesComponent implements OnInit {

  constructor(private http:HttpClient) { }

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
}

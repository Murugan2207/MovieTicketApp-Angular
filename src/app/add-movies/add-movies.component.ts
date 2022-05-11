import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  movieName: any;
  ticketPrice: any;
  ratings: any;
  language: any;
  location: any;
  category: any;
  

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addMovie() {
    const movieObj = {
      "movieName": this.movieName,
      "ticketPrice": this.ticketPrice,
      "ratings": this.ratings,
      "language": this.language,
      "location":this.location,
      "category":this.category

    };
    const url = "http://localhost:8080/movies/save";
    this.http.post(url, movieObj).subscribe((res) => {
      console.log(res);
      this.toastr.success('Successfully Movie Added');

    }, (err:any) => {
      console.log(err.error);
      this.toastr.error('Please Re-enter your Details');
    })

  }


}

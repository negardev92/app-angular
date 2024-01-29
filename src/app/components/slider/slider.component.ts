import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
 constructor(private http:HttpClient) {

 }
 ngOnInit(): void {
   this.http.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=1073f3d71dadafcdf1810b5cbde45685'
    ).subscribe((data)=>{
      console.log(data);
    })

 }
}

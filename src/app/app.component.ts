import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../src/app/shared/header/header.component";
import { FooterComponent } from "../../src/app/shared/footer/footer.component";
import {SliderComponent} from "../../src/app/components/slider/slider.component";
import {HomeComponent} from "../../src/app/pages/home/home.component";
import {MovieListComponent} from "../../src/app/pages/movie-list/movie-list.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent,FooterComponent
    ,SliderComponent,MovieListComponent,HomeComponent]
})
export class AppComponent {
  title = 'appAngular';
}

import { Photo } from './models/Photo.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: any[] = [];

  constructor(http: HttpClient) {
    http.get<Photo[]>('http://localhost:3000/photos').subscribe((photos: Photo[]) => this.photos = photos)
  }

}

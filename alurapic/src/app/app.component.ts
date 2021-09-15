import { Photo } from './models/Photo.model';
import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Photo[] = [];

  constructor(photoService: PhotoService) {
    photoService.listFromUser('Flavio').subscribe(photos => this.photos = photos);
  }

}

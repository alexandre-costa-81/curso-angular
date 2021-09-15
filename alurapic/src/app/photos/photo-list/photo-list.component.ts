import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listFromUser('Flavio').subscribe(photos => this.photos = photos);
  }
}

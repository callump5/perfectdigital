import { Component, OnInit } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { IImage } from '../../modules/IImage';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit{

  constructor () { }

  imageUrls: (string | IImage)[] = [
    { url: './assets/slideshow/text/photos.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: './assets/slideshow/text/PassportImage.jpg' ,backgroundSize: 'contain', backgroundPosition: 'center'  },
    { url: './assets/slideshow/text/frames.jpg' ,backgroundSize: 'contain', backgroundPosition: 'center'  },
 
  ];

  ngOnInit () {
    setTimeout(() => { }, 2000);;
  }
}
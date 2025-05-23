import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';


@Component({
  selector: 'app-card-player',
  imports: [CommonModule,ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = {
    _id:0,
    name: '',
    album: '',
    url: '',
    cover:'',
    duration: {
    start: 0,
    end: 0
  }
  } 
}
